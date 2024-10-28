import logo from '../assets/logo.svg';
import { Link } from '@tanstack/react-router';
import { cx } from '../utils/cx';

const styles = {
  logo: cx('w-8 h-auto'),
  menu: cx('flex my-8'),
  menuItem: cx('mr-8'),
  menuItemLink: cx(
    'block text-neutral-500 text-xl py-2',
    '[&.active]:text-white [&.active]:border-b-2 [&.active]:border-b-[#009de0]'
  ),
};

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
      <img src={logo} className={styles.logo} alt="Logo" />
      <ul className={styles.menu}>
        {LINKS.map((link) => (
          <li key={link.to} className={styles.menuItem}>
            <Link to={link.to} className={styles.menuItemLink}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
