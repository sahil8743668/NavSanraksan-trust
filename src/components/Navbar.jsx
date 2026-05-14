import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HeartHandshake, Menu, Moon, Sun, X } from 'lucide-react';

const links = [
  ['Home', '/'],
  ['About', '/about'],
  ['Programs', '/programs'],
  ['Campaigns', '/campaigns'],
  ['Gallery', '/gallery'],
  ['Blog', '/blog'],
  ['Contact', '/contact'],
];

export default function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  const navClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-bold transition ${isActive ? 'bg-forest text-white dark:bg-white dark:text-forest' : 'text-ink/75 hover:bg-white/70 hover:text-forest dark:text-white/75 dark:hover:bg-white/10 dark:hover:text-white'}`;

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/70 shadow-sm backdrop-blur-2xl dark:border-white/10 dark:bg-ink/70">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="NavSanrakshan Trust home">
          <span className="grid h-12 w-12 place-items-center rounded-2xl bg-forest text-white shadow-glow">
            <HeartHandshake />
          </span>
          <span>
            <span className="block font-display text-lg font-black leading-5 text-forest dark:text-white">NavSanrakshan</span>
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-ink/55 dark:text-white/50">Trust</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {links.map(([label, path]) => <NavLink key={path} to={path} className={navClass}>{label}</NavLink>)}
        </div>

        <div className="flex items-center gap-2">
          <button onClick={() => setDark(!dark)} className="icon-btn" aria-label="Toggle dark mode">
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Link to="/donate" className="hidden rounded-full bg-ember px-5 py-3 text-sm font-black text-ink shadow-soft transition hover:-translate-y-0.5 hover:bg-orange-400 md:inline-flex">
            Donate Now
          </Link>
          <button onClick={() => setOpen(!open)} className="icon-btn lg:hidden" aria-label="Open menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/40 bg-white/95 px-4 py-4 dark:border-white/10 dark:bg-ink/95 lg:hidden">
          <div className="grid gap-2">
            {links.map(([label, path]) => (
              <NavLink key={path} to={path} onClick={() => setOpen(false)} className={navClass}>{label}</NavLink>
            ))}
            <Link to="/donate" onClick={() => setOpen(false)} className="rounded-full bg-ember px-5 py-3 text-center text-sm font-black text-ink">Donate Now</Link>
          </div>
        </div>
      )}
    </header>
  );
}
