'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Main navigation">
      <ul className="flex flex-wrap gap-x-6 gap-y-1 text-lg">
        {links.map(({ href, label }) => {
          // Keeps "Projects" highlighted on nested routes such as /projects/school.
          const isActive = pathname === href || (href !== '/' && pathname.startsWith(`${href}/`));

          return (
            <li key={href}>
              <Link
                href={href}
                className={isActive ? 'font-bold underline' : 'hover:underline focus:underline'}
                aria-current={pathname === href ? 'page' : undefined}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
