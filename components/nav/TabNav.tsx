'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const TABS = [
  { label: 'Explore', href: '/explore' },
  { label: 'Books', href: '/books' },
  { label: 'Companies', href: '/companies' },
];

export default function TabNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-1 px-6 h-14 border-b border-white/[0.06] bg-[#080c14]/80 backdrop-blur-sm shrink-0">
      <span className="mr-4 text-sm font-semibold tracking-widest uppercase text-white/40 select-none">
        Galaxy Explorer
      </span>
      {TABS.map((tab) => {
        const active = pathname.startsWith(tab.href);
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={[
              'px-4 py-1.5 rounded-full text-sm font-medium transition-colors',
              active
                ? 'bg-white/10 text-white'
                : 'text-white/50 hover:text-white/80 hover:bg-white/5',
            ].join(' ')}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
