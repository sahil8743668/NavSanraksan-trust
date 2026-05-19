import { Link } from 'react-router-dom';
import { ArrowRight, Eye, HeartHandshake, Sparkles, Target } from 'lucide-react';
import PageTransition from '../components/PageTransition.jsx';
import HeroSection from '../components/HeroSection.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import CampaignCard from '../components/CampaignCard.jsx';
import TestimonialSlider from '../components/TestimonialSlider.jsx';
import BlogCard from '../components/BlogCard.jsx';
import { blogs, campaigns } from '../data/siteData.js';

export default function Home() {
  return (
    <PageTransition>
      <HeroSection />

      <section className="section">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div data-aos="fade-right">
            <img className="h-[460px] w-full rounded-[2rem] object-cover shadow-glow" src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1300&q=80" alt="Health and nutrition awareness for families" />
          </div>
          <div data-aos="fade-left">
            <p className="eyebrow">About the trust</p>
            <h2 className="section-title">A trust focused on children, women, families, and community welfare.</h2>
            <p className="mt-5 leading-8 text-ink/70 dark:text-white/70">NavSanrakshan Trust creates safe, inclusive, and child-friendly support systems through education, health, nutrition, hygiene awareness, women empowerment, livelihood training, parenting education, and access to welfare services.</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="glass-card"><Target className="text-ember" /><h3>Mission</h3><p>Promote holistic child development and empower women through skills, rights awareness, and livelihoods.</p></div>
              <div className="glass-card"><Eye className="text-skytrust" /><h3>Vision</h3><p>A caring society where children, women, families, and vulnerable groups can thrive with dignity.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeader eyebrow="Featured objectives" title="Choose an area of public welfare to support." copy="Each campaign reflects the trust objectives: child development, education, health, women empowerment, welfare access, and community development." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {campaigns.slice(0, 3).map((campaign) => <CampaignCard key={campaign.title} campaign={campaign} />)}
        </div>
      </section>

      <section className="section">
        <div className="overflow-hidden rounded-[2rem] bg-forest p-8 text-white shadow-glow md:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="eyebrow text-ember">Volunteer program</p>
              <h2 className="font-display text-3xl font-black md:text-5xl">Support learning, health awareness, skills, and welfare access.</h2>
              <p className="mt-5 max-w-2xl leading-8 text-white/75">Help with activity-based learning, parenting education, health and hygiene sessions, women skill training, welfare guidance, events, and community follow-up.</p>
              <Link to="/volunteer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-black text-forest">Join Volunteer Program <ArrowRight size={18} /></Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['Child Learning', 'Health Awareness', 'Women Skills', 'Welfare Guidance'].map((item) => <div key={item} className="rounded-3xl bg-white/10 p-5 font-black">{item}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeader eyebrow="Voices of trust" title="Stories shaped by care, learning, and dignity." />
        <TestimonialSlider />
      </section>

      <section className="section">
        <SectionHeader eyebrow="Latest news" title="Updates from child, women, family, and welfare programs." />
        <div className="grid gap-6 md:grid-cols-3">
          {blogs.slice(0, 3).map((post) => <BlogCard key={post.title} post={post} onRead={() => window.location.assign('/blog')} />)}
        </div>
      </section>

      <section className="section pb-24">
        <div className="rounded-[2rem] border border-white/60 bg-white/70 p-8 text-center shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-white/10">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-5">
            {['Child Care', 'Skill Training', 'Health Awareness', 'Welfare Access', 'Family Support'].map((logo) => (
              <div key={logo} className="rounded-2xl bg-white/80 p-5 font-display font-black text-forest dark:bg-white/10 dark:text-white">{logo}</div>
            ))}
          </div>
          <p className="mt-6 inline-flex items-center gap-2 font-bold text-ink/60 dark:text-white/60"><Sparkles size={18} /> Objective and supporter focus section</p>
        </div>
      </section>
    </PageTransition>
  );
}
