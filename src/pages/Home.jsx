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
            <img className="h-[460px] w-full rounded-[2rem] object-cover shadow-glow" src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1300&q=80" alt="NGO volunteers supporting community members" />
          </div>
          <div data-aos="fade-left">
            <p className="eyebrow">About the trust</p>
            <h2 className="section-title">A modern trust built around dignity, transparency, and local leadership.</h2>
            <p className="mt-5 leading-8 text-ink/70 dark:text-white/70">NavSanrakshan Trust partners with communities to create programs that are practical, measurable, and emotionally grounded. Every campaign is designed around real needs: education, health, nutrition, environment, livelihood, and care.</p>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="glass-card"><Target className="text-ember" /><h3>Mission</h3><p>Protect opportunity and dignity through community-first welfare programs.</p></div>
              <div className="glass-card"><Eye className="text-skytrust" /><h3>Vision</h3><p>A compassionate society where every child, woman, and family can thrive.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeader eyebrow="Featured campaigns" title="Choose a cause and make the change visible." copy="Each campaign includes clear goals, progress, and an impact story ready for live NGO reporting." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {campaigns.slice(0, 3).map((campaign) => <CampaignCard key={campaign.title} campaign={campaign} />)}
        </div>
      </section>

      <section className="section">
        <div className="overflow-hidden rounded-[2rem] bg-forest p-8 text-white shadow-glow md:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="eyebrow text-ember">Volunteer program</p>
              <h2 className="font-display text-3xl font-black md:text-5xl">Bring your skill, your time, or simply your heart.</h2>
              <p className="mt-5 max-w-2xl leading-8 text-white/75">Support tutoring, health camps, event operations, environmental drives, storytelling, fundraising, and community follow-up.</p>
              <Link to="/volunteer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-black text-forest">Join Volunteer Program <ArrowRight size={18} /></Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['Field Visits', 'Mentoring', 'Digital Support', 'Fundraising'].map((item) => <div key={item} className="rounded-3xl bg-white/10 p-5 font-black">{item}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeader eyebrow="Voices of trust" title="Stories that sound like real change." />
        <TestimonialSlider />
      </section>

      <section className="section">
        <SectionHeader eyebrow="Latest news" title="Field notes, impact stories, and community updates." />
        <div className="grid gap-6 md:grid-cols-3">
          {blogs.slice(0, 3).map((post) => <BlogCard key={post.title} post={post} />)}
        </div>
      </section>

      <section className="section pb-24">
        <div className="rounded-[2rem] border border-white/60 bg-white/70 p-8 text-center shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-white/10">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-5">
            {['SevaCare', 'GreenRise', 'EduBridge', 'HopeLabs', 'Aarogya'].map((logo) => (
              <div key={logo} className="rounded-2xl bg-white/80 p-5 font-display font-black text-forest dark:bg-white/10 dark:text-white">{logo}</div>
            ))}
          </div>
          <p className="mt-6 inline-flex items-center gap-2 font-bold text-ink/60 dark:text-white/60"><Sparkles size={18} /> Partner and supporter logo section</p>
        </div>
      </section>
    </PageTransition>
  );
}
