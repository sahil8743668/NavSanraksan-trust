import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Heart, ShieldCheck, Users } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter.jsx';
import { stats } from '../data/siteData.js';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 md:pt-20">
      <div className="particle particle-a" />
      <div className="particle particle-b" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-leaf/20 bg-white/70 px-4 py-2 text-sm font-black text-forest shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-white">
            <ShieldCheck size={18} /> Transparent care, measurable change
          </span>
          <h1 className="mt-7 font-display text-5xl font-black leading-[1.02] text-forest dark:text-white md:text-7xl">
            Restoring hope where communities need it most.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-9 text-ink/70 dark:text-white/70">
            NavSanrakshan Trust works with children, women, families, schools, and local leaders to build healthier, greener, and more dignified futures.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/donate" className="btn-primary"><Heart size={19} fill="currentColor" /> Donate Now</Link>
            <Link to="/volunteer" className="btn-secondary"><Users size={19} /> Join Volunteer Program</Link>
            <Link to="/campaigns" className="btn-ghost">Support a Child <ArrowRight size={18} /></Link>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
          <div className="absolute -left-6 top-8 z-10 rounded-3xl border border-white/60 bg-white/75 p-4 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-white/10">
            <p className="text-sm font-bold text-ink/60 dark:text-white/60">This month</p>
            <p className="font-display text-2xl font-black text-forest dark:text-white">4,200 meals served</p>
          </div>
          <img className="h-[520px] w-full rounded-[2rem] object-cover shadow-glow" src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=1400&q=80" alt="Volunteers serving a community with care" />
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
