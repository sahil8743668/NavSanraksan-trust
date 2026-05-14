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
        <h1>People-first welfare with international NGO standards.</h1>
        <p>NavSanrakshan Trust combines emotional care, transparent execution, and scalable community programs.</p>
      </section>

      <section className="section">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="glass-panel" data-aos="fade-right">
            <h2 className="font-display text-3xl font-black text-forest dark:text-white">Founder Message</h2>
            <p className="mt-5 leading-8 text-ink/70 dark:text-white/70">"We began with a simple belief: care should be organized enough to last and human enough to be felt. NavSanrakshan Trust exists to protect possibility for every child, woman, and family we serve."</p>
            <p className="mt-5 font-black text-forest dark:text-white">Dr. Asha Menon, Founder</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2" data-aos="fade-left">
            {values.map(([label, Icon]) => <div key={label} className="glass-card"><Icon className="text-ember" /><h3>{label}</h3><p>Built into each decision, partnership, report, and field program.</p></div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeader eyebrow="Our journey" title="A timeline of steady community trust." />
        <div className="mx-auto max-w-4xl space-y-5">
          {['2018 - Began education support with 80 children', '2020 - Emergency food relief and health awareness', '2022 - Women skill circles and climate action drives', '2024 - Rural development partnerships expanded', '2026 - Digital reporting and transparent campaign model'].map((item) => (
            <div key={item} className="rounded-3xl border-l-4 border-ember bg-white/75 p-6 font-bold shadow-soft backdrop-blur dark:bg-white/10">{item}</div>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeader eyebrow="Leadership" title="A team shaped by care, operations, and field experience." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => <TeamCard key={member.name} member={member} />)}
        </div>
      </section>

      <section className="section pb-24">
        <SectionHeader eyebrow="Achievements" title="Impact measured with humility and clarity." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => <AnimatedCounter key={stat.label} {...stat} />)}
        </div>
      </section>
    </PageTransition>
  );
}
