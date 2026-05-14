import { ArrowRight } from 'lucide-react';
import { iconMap } from './icons.js';

export default function ProgramCard({ program }) {
  const Icon = iconMap[program.icon];
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/60 bg-white/75 shadow-soft backdrop-blur-xl transition hover:-translate-y-2 hover:shadow-glow dark:border-white/10 dark:bg-white/10">
      <div className="relative h-56 overflow-hidden">
        <img className="h-full w-full object-cover transition duration-500 group-hover:scale-110" src={program.image} alt={program.title} />
        <span className="absolute bottom-4 left-4 grid h-14 w-14 place-items-center rounded-2xl bg-white text-forest shadow-soft">{Icon && <Icon />}</span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl font-black text-forest dark:text-white">{program.title}</h3>
        <p className="mt-3 leading-7 text-ink/65 dark:text-white/65">{program.copy}</p>
        <button className="mt-5 inline-flex items-center gap-2 font-black text-forest dark:text-white">Learn More <ArrowRight size={18} /></button>
      </div>
    </article>
  );
}
