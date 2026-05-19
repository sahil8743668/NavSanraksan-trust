import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, ShieldCheck, Users } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter.jsx';
import { stats } from '../data/siteData.js';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fffdf8_0%,#f7fbf4_54%,#fff4df_100%)] pt-12 md:pt-20 dark:bg-[linear-gradient(135deg,#071611_0%,#10201a_100%)]">
      <div className="particle particle-a" />
      <div className="particle particle-b" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 lg:grid-cols-[1fr_0.95fr] lg:px-8">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-leaf/20 bg-white/80 px-4 py-2 text-sm font-black text-forest shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-white">
            <ShieldCheck size={18} /> Child care, women empowerment, public welfare
          </span>
          <h1 className="hero-title mt-7 max-w-3xl text-[3.1rem] font-extrabold leading-[1.07] text-forest dark:text-white md:text-[4.35rem] lg:text-[4.75rem]">
            Protecting childhood, dignity, and community well-being.
          </h1>
          <p className="mt-7 max-w-2xl text-lg font-medium leading-9 text-ink/70 dark:text-white/70">
            NavSanrakshan Trust works for holistic child development, early childhood education, health and nutrition awareness, women skills, livelihood support, welfare access, and social development.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/donate" className="btn-primary"><Heart size={19} fill="currentColor" /> Donate Now</Link>
            <Link to="/volunteer" className="btn-secondary"><Users size={19} /> Join Volunteer Program</Link>
            <Link to="/campaigns" className="btn-ghost">View Objectives <ArrowRight size={18} /></Link>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
          <div className="absolute -left-6 top-14 z-10 w-[260px] rounded-3xl border border-white/60 bg-white/75 px-4 py-3 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-white/10">
            <p className="text-sm font-bold text-ink/60 dark:text-white/60">This month</p>
            <p className="font-display text-xl font-black text-forest dark:text-white">4,200 families reached</p>
          </div>
          <img className="h-[520px] w-full rounded-[2rem] object-cover object-center shadow-glow" src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1400&q=80" alt="Children learning in a safe activity-based classroom" />
          <div className="absolute -bottom-6 right-4 rounded-3xl bg-forest p-5 text-white shadow-glow">
            <p className="text-sm text-white/70">Impact score</p>
            <p className="font-display text-3xl font-black">98%</p>
          </div>
        </motion.div>
      </div>
      <div className="mx-auto grid max-w-7xl gap-4 px-4 pb-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {stats.map((stat) => <AnimatedCounter key={stat.label} {...stat} />)}
      </div>
    </section>
  );
}
