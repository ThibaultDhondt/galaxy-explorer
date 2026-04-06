'use client';

import { useRef, useState, useEffect } from 'react';
import { solarObjects } from '@/data/planets';

// Deterministic star field
const STARS = Array.from({ length: 130 }, (_, i) => ({
  id: i,
  x: ((i * 2473.1 + 300) % 2600) - 200,
  y: ((i * 1847.3 + 200) % 1800) - 100,
  r: i % 11 === 0 ? 1.6 : i % 4 === 0 ? 1.0 : 0.55,
  opacity: 0.12 + (i % 9) * 0.06,
}));

const ASTEROID_BELT_R = 230;
const MIN_SCALE = 0.14;
const MAX_SCALE = 14;

interface Props {
  onSelect: (id: string | null) => void;
  selectedId: string | null;
}

export default function SolarSystemMap({ onSelect, selectedId }: Props) {
  const svgRef = useRef<SVGSVGElement>(null);

  // Use refs for pan/scale so the wheel handler (attached once) always reads fresh values
  const ox = useRef(600);
  const oy = useRef(400);
  const scale = useRef(1);
  const [, rerender] = useState(0);

  const drag = useRef({ active: false, sx: 0, sy: 0, px: 0, py: 0 });
  const moved = useRef(false);
  const [isDragging, setIsDragging] = useState(false);

  const commit = () => rerender((n) => n + 1);

  // Center on mount
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const { width, height } = svg.getBoundingClientRect();
    ox.current = width / 2;
    oy.current = height / 2;
    commit();
  }, []);

  // Non-passive wheel for zoom-to-cursor
  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const factor = e.deltaY < 0 ? 1.12 : 1 / 1.12;
      const newScale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, scale.current * factor));
      const rect = svg.getBoundingClientRect();
      const px = e.clientX - rect.left;
      const py = e.clientY - rect.top;
      const r = newScale / scale.current;
      ox.current = px + (ox.current - px) * r;
      oy.current = py + (oy.current - py) * r;
      scale.current = newScale;
      commit();
    };

    svg.addEventListener('wheel', onWheel, { passive: false });
    return () => svg.removeEventListener('wheel', onWheel);
  }, []);

  const s = scale.current;
  const panX = ox.current;
  const panY = oy.current;

  return (
    <svg
      ref={svgRef}
      className="w-full h-full select-none"
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      onPointerDown={(e) => {
        if (e.button !== 0) return;
        e.currentTarget.setPointerCapture(e.pointerId);
        drag.current = { active: true, sx: e.clientX, sy: e.clientY, px: panX, py: panY };
        moved.current = false;
        setIsDragging(true);
      }}
      onPointerMove={(e) => {
        if (!drag.current.active) return;
        const dx = e.clientX - drag.current.sx;
        const dy = e.clientY - drag.current.sy;
        if (Math.abs(dx) > 3 || Math.abs(dy) > 3) moved.current = true;
        ox.current = drag.current.px + dx;
        oy.current = drag.current.py + dy;
        commit();
      }}
      onPointerUp={() => {
        drag.current.active = false;
        setIsDragging(false);
      }}
      onClick={(e) => {
        if (moved.current) return;
        if (e.target === svgRef.current) onSelect(null);
      }}
    >
      <defs>
        <radialGradient id="sun-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FDB813" stopOpacity="0.5" />
          <stop offset="60%" stopColor="#FF6B00" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#FF6B00" stopOpacity="0" />
        </radialGradient>
        <filter id="glow" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background stars (fixed, not panned) */}
      <g pointerEvents="none">
        {STARS.map((star) => (
          <circle
            key={star.id}
            cx={star.x}
            cy={star.y}
            r={star.r}
            fill="white"
            opacity={star.opacity}
          />
        ))}
      </g>

      {/* Panned & zoomed content */}
      <g transform={`translate(${panX},${panY}) scale(${s})`}>
        {/* Orbital rings */}
        {solarObjects
          .filter((o) => o.orbitRadius > 0)
          .map((obj) => (
            <circle
              key={`orbit-${obj.id}`}
              cx={0}
              cy={0}
              r={obj.orbitRadius}
              fill="none"
              stroke="rgba(255,255,255,0.07)"
              strokeWidth={1 / s}
              pointerEvents="none"
            />
          ))}

        {/* Asteroid belt */}
        <circle
          cx={0}
          cy={0}
          r={ASTEROID_BELT_R}
          fill="none"
          stroke="rgba(255,255,255,0.10)"
          strokeWidth={16 / s}
          strokeDasharray={`${2 / s} ${3 / s}`}
          pointerEvents="none"
        />

        {/* Celestial bodies */}
        {solarObjects.map((obj) => {
          const rad = (obj.orbitAngle * Math.PI) / 180;
          const bx = obj.orbitRadius * Math.cos(rad);
          const by = obj.orbitRadius * Math.sin(rad);
          const isSelected = obj.id === selectedId;

          return (
            <g
              key={obj.id}
              transform={`translate(${bx},${by})`}
              onClick={(e) => {
                e.stopPropagation();
                if (moved.current) return;
                onSelect(obj.id);
              }}
              style={{ cursor: 'pointer' }}
            >
              {/* Selection halo */}
              {isSelected && (
                <circle
                  cx={0}
                  cy={0}
                  r={obj.visualRadius + 6 / s}
                  fill="none"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth={1.5 / s}
                  pointerEvents="none"
                />
              )}

              {/* Sun glow */}
              {obj.id === 'sun' && (
                <circle
                  cx={0}
                  cy={0}
                  r={obj.visualRadius * 2.8}
                  fill="url(#sun-glow)"
                  pointerEvents="none"
                />
              )}

              {/* Saturn ring (behind planet body) */}
              {obj.id === 'saturn' && (
                <ellipse
                  cx={0}
                  cy={0}
                  rx={obj.visualRadius * 2.3}
                  ry={obj.visualRadius * 0.42}
                  fill="none"
                  stroke="rgba(200,178,110,0.55)"
                  strokeWidth={obj.visualRadius * 0.62}
                  pointerEvents="none"
                />
              )}

              {/* Planet body */}
              <circle
                cx={0}
                cy={0}
                r={obj.visualRadius}
                fill={obj.color}
                filter={obj.id === 'sun' ? 'url(#glow)' : undefined}
              />

              {/* Label */}
              <text
                x={0}
                y={obj.visualRadius + 12 / s}
                textAnchor="middle"
                fill="rgba(255,255,255,0.65)"
                fontSize={10 / s}
                pointerEvents="none"
                style={{ userSelect: 'none' }}
              >
                {obj.name}
              </text>
            </g>
          );
        })}
      </g>
    </svg>
  );
}
