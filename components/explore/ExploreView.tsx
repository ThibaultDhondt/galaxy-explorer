'use client';

import { useState } from 'react';
import { solarObjects } from '@/data/planets';
import SolarSystemMap from './SolarSystemMap';
import PlanetDetailPanel from './PlanetDetailPanel';

export default function ExploreView() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedObject = selectedId
    ? (solarObjects.find((o) => o.id === selectedId) ?? null)
    : null;

  return (
    <div className="relative w-full h-full">
      <SolarSystemMap selectedId={selectedId} onSelect={setSelectedId} />
      <PlanetDetailPanel object={selectedObject} onClose={() => setSelectedId(null)} />
      {/* Hint */}
      {!selectedId && (
        <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/30 text-xs pointer-events-none select-none">
          Scroll to zoom · Drag to pan · Click an object to explore
        </p>
      )}
    </div>
  );
}
