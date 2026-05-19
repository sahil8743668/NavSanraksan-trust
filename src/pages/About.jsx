import { Award, Compass, HeartHandshake, ShieldCheck } from 'lucide-react';
import AnimatedCounter from '../components/AnimatedCounter.jsx';
import PageTransition from '../components/PageTransition.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import TeamCard from '../components/TeamCard.jsx';
import { stats, team } from '../data/siteData.js';

export default function About() {
  const values = [
    ['Compassion', HeartHandshake],
    ['Accountability', ShieldCheck],
    ['Local Leadership', Compass],
    ['Measurable Impact', Award],
  ];
  return (
    <PageTransition>
      <section className="page-hero">
        <p className="eyebrow">About us</p>
        <h1>People-first welfare for children, women, families, and vulnerable communities.</h1>
        <p>NavSanrakshan Trust works through education, care, health awareness, women empowerment, livelihood support, welfare access, and public-good community initiatives.</p>
      </section>

      <section className="section">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel" data-aos="fade-right">
            <h2 className="font-display text-3xl font-black text-forest dark:text-white">Founder Message</h2>
            <p className="mt-5 leading-8 text-ink/70 dark:text-white/70">"NavSanrakshan Trust exists to protect possibility for every child, woman, family, and vulnerable person we serve through education, health, dignity, livelihoods, and community welfare."</p>
            <p className="mt-5 font-black text-forest dark:text-white">Dr. Asha Menon, Founder</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2" data-aos="fade-left">
            {values.map(([label, Icon]) => <div key={label} className="glass-card"><Icon className="text-ember" /><h3>{label}</h3><p>Built into each child, women, family welfare, and social development program.</p></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeader eyebrow="Our journey" title="A timeline of steady community welfare." />
        <div className="mx-auto max-w-4xl space-y-5">
          {['2018 - Began child development and early education support', '2020 - Health, nutrition, hygiene, and family welfare awareness', '2022 - Women skill development and livelihood training started', '2024 - Welfare scheme access and vulnerable group support expanded', '2026 - Public-good spaces, parenting education, and community programs strengthened'].map((item) => (
            <div key={item} className="rounded-3xl border-l-4 border-ember bg-white/75 p-6 font-bold shadow-soft backdrop-blur dark:bg-white/10">{item}</div>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeader eyebrow="Leadership" title="A team shaped by care, training, rights awareness, and field experience." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => <TeamCard key={member.name} member={member} />)}
        </div>
      </section>

      <section className="section pb-24">
        <SectionHeader eyebrow="Achievements" title="Impact across children, women, families, and communities." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => <AnimatedCounter key={stat.label} {...stat} />)}
        </div>
      </section>
    </PageTransition>
  );
}
