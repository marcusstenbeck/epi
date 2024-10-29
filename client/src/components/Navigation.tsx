import logo from '@/assets/logo.svg';
import { cn } from '@/lib/utils';
import { Link } from '@tanstack/react-router';

const LINKS: Array<{ to: string; label: string }> = [
  {
    to: '/',
    label: 'Tracks',
  },
  {
    to: '/playlists',
    label: 'Playlists',
  },
];

export function Navigation() {
  return (
    <nav>
      <img src={logo} className="w-8 h-auto" alt="Logo" />

      <ul className="flex my-8">
        {LINKS.map((link) => (
          <li key={link.to} className="mr-8">
            <Link
              to={link.to}
              className={cn(
                'block text-neutral-500 text-xl py-2',
                '[&.active]:text-white [&.active]:border-b-2 [&.active]:border-b-[#009de0]'
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
