import { spaceCompanies } from '@/data/companies';
import CompanyCard from './CompanyCard';

export default function CompaniesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {spaceCompanies.map((company) => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </div>
  );
}
