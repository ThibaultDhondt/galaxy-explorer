'use client';

import Image from 'next/image';
import { SolarObject } from '@/data/planets';

interface Props {
  object: SolarObject | null;
  onClose: () => void;
}

const TYPE_LABEL: Record<SolarObject['type'], string> = {
  star: 'Star',
  planet: 'Planet',
  'dwarf-planet': 'Dwarf Planet',
};

export default function PlanetDetailPanel({ object, onClose }: Props) {
  if (!object) return null;

  return (
    <div className="absolute top-0 right-0 bottom-0 w-80 flex flex-col bg-[#0b1220]/95 backdrop-blur-md border-l border-white/[0.07] overflow-y-auto">
      {/* Header */}
      <div className="flex items-start justify-between px-5 pt-5 pb-3 shrink-0">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-white/35 mb-1">
            {TYPE_LABEL[object.type]}
          </p>
          <h2 className="text-xl font-semibold text-white">{object.name}</h2>
        </div>
        <button
          onClick={onClose}
          className="mt-0.5 text-white/40 hover:text-white/80 transition-colors text-xl leading-none p-1"
          aria-label="Close"
        >
          ×
        </button>
      </div>

      {/* Image */}
      <div className="relative mx-5 mb-4 rounded-lg overflow-hidden bg-white/5 shrink-0" style={{ aspectRatio: '16/9' }}>
        <Image
          src={object.imageUrl}
          alt={object.name}
          fill
          className="object-cover"
          sizes="320px"
        />
      </div>

      {/* Key facts */}
      <div className="mx-5 mb-4 rounded-lg bg-white/[0.03] border border-white/[0.06] divide-y divide-white/[0.05] shrink-0">
        {[
          { label: 'Diameter', value: object.facts.diameter },
          { label: 'Distance from Sun', value: object.facts.distanceFromSun },
          { label: 'Orbital Period', value: object.facts.orbitalPeriod },
          { label: 'Moons', value: object.facts.moons },
          { label: 'Atmosphere', value: object.facts.atmosphere },
        ].map(({ label, value }) => (
          <div key={label} className="flex justify-between gap-3 px-3 py-2.5">
            <span className="text-xs text-white/40 shrink-0">{label}</span>
            <span className="text-xs text-white/80 text-right">{value}</span>
          </div>
        ))}
      </div>

      {/* Description */}
      <p className="mx-5 mb-6 text-sm text-white/55 leading-relaxed">{object.description}</p>
    </div>
  );
}
