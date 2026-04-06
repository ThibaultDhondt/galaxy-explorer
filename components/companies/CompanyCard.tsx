import { SpaceCompany } from '@/data/companies';

interface Props {
  company: SpaceCompany;
}

export default function CompanyCard({ company }: Props) {
  return (
    <div className="flex flex-col gap-3 p-5 rounded-xl bg-[#0f1729] border border-white/[0.07] hover:border-white/[0.14] transition-colors">
      {/* Name + meta */}
      <div>
        <div className="flex items-baseline justify-between gap-2 mb-0.5">
          <h3 className="text-sm font-semibold text-white leading-snug">{company.name}</h3>
          <span className="text-xs text-white/30 tabular-nums shrink-0">
            est. {company.founded}
          </span>
        </div>
        <p className="text-xs text-white/40">{company.country}</p>
      </div>

      {/* Focus */}
      <p className="text-xs text-white/55 leading-relaxed">{company.focusArea}</p>

      {/* Key achievement */}
      <div className="rounded-lg bg-white/[0.03] border border-white/[0.05] px-3 py-2.5">
        <p className="text-xs text-white/30 uppercase tracking-wider mb-1">Key achievement</p>
        <p className="text-xs text-white/65 leading-relaxed">{company.keyAchievement}</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 gap-2 text-xs">
        <Row label="Valuation / Cap" value={company.valuation} />
        <Row label="Key investors" value={company.investors} />
        <Row label="Founders" value={company.founders} />
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <span className="text-white/30">{label}: </span>
      <span className="text-white/60">{value}</span>
    </div>
  );
}
