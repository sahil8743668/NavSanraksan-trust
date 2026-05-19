import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { iconMap } from './icons.js';

export default function ProgramCard({ program }) {
  const [open, setOpen] = useState(false);
  const Icon = iconMap[program.icon];
  return (
    <>
      <article className="group overflow-hidden rounded-3xl border border-white/60 bg-white/75 shadow-soft backdrop-blur-xl transition hover:-translate-y-2 hover:shadow-glow dark:border-white/10 dark:bg-white/10">
        <div className="relative h-56 overflow-hidden">
          <img className="h-full w-full object-cover transition duration-500 group-hover:scale-110" src={program.image} alt={program.title} />
          <span className="absolute bottom-4 left-4 grid h-14 w-14 place-items-center rounded-2xl bg-white text-forest shadow-soft">{Icon && <Icon />}</span>
        </div>
        <div className="p-6">
          <h3 className="font-display text-2xl font-black text-forest dark:text-white">{program.title}</h3>
          <p className="mt-3 leading-7 text-ink/65 dark:text-white/65">{program.copy}</p>
          <button onClick={() => setOpen(true)} className="mt-5 inline-flex items-center gap-2 font-black text-forest dark:text-white">Learn More <ArrowRight size={18} /></button>
        </div>
      </article>
      {open && (
        <div className="fixed inset-0 z-[90] grid place-items-center bg-ink/80 p-4" onClick={() => setOpen(false)}>
          <div className="max-w-xl rounded-[2rem] bg-white p-6 shadow-glow dark:bg-ink" onClick={(event) => event.stopPropagation()}>
            <img className="h-56 w-full rounded-3xl object-cover" src={program.image} alt={program.title} />
            <h3 className="mt-5 font-display text-3xl font-black text-forest dark:text-white">{program.title}</h3>
            <p className="mt-3 leading-8 text-ink/70 dark:text-white/70">{program.copy}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link to="/volunteer" className="btn-primary" onClick={() => setOpen(false)}>Volunteer</Link>
              <Link to="/donate" className="btn-secondary" onClick={() => setOpen(false)}>Support Program</Link>
              <button onClick={() => setOpen(false)} className="btn-ghost">Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
