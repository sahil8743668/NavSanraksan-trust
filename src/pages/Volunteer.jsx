import { CheckCircle2, Clock, MapPin, Sparkles } from 'lucide-react';
import PageTransition from '../components/PageTransition.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { gallery } from '../data/siteData.js';

export default function Volunteer() {
  const skills = ['Teaching', 'Healthcare', 'Events', 'Design', 'Fundraising', 'Environment', 'Counseling', 'Technology'];
  return (
    <PageTransition>
      <section className="page-hero">
        <p className="eyebrow">Volunteer</p>
        <h1>Join a program where your time becomes visible change.</h1>
        <p>Register skills, availability, and areas of interest with an elegant volunteer onboarding interface.</p>
      </section>
      <section className="section">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <form className="glass-panel grid gap-4" data-aos="fade-right">
            <input className="field" placeholder="Full name" />
            <div className="grid gap-4 sm:grid-cols-2"><input className="field" placeholder="Email" /><input className="field" placeholder="Phone" /></div>
            <textarea className="field min-h-28" placeholder="Why would you like to volunteer?" />
            <div>
              <p className="mb-3 font-black text-forest dark:text-white">Select skills</p>
              <div className="flex flex-wrap gap-2">{skills.map((skill) => <label key={skill} className="rounded-full bg-white/70 px-4 py-2 text-sm font-bold dark:bg-white/10"><input type="checkbox" className="mr-2 accent-leaf" />{skill}</label>)}</div>
            </div>
            <select className="field"><option>Weekend availability</option><option>Weekday availability</option><option>Remote support</option><option>Event based</option></select>
            <button className="rounded-full bg-forest px-6 py-4 font-black text-white">Submit Volunteer Form</button>
          </form>
          <div className="grid gap-4" data-aos="fade-left">
            {[['Flexible roles', Clock], ['Local field exposure', MapPin], ['Training and certificates', CheckCircle2], ['Meaningful community network', Sparkles]].map(([label, Icon]) => <div key={label} className="glass-card"><Icon className="text-ember" /><h3>{label}</h3><p>Volunteer benefits designed for students, professionals, and community leaders.</p></div>)}
          </div>
        </div>
      </section>
      <section className="section pb-24">
        <SectionHeader eyebrow="Volunteer gallery" title="Moments from the field." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.slice(0, 4).map((img) => <img key={img} className="h-64 rounded-3xl object-cover shadow-soft" src={img} alt="Volunteer activity" />)}
        </div>
        <div className="mt-10 rounded-[2rem] bg-forest p-8 text-center text-white shadow-glow">
          <h2 className="font-display text-3xl font-black">Ready to serve with purpose?</h2>
          <p className="mt-3 text-white/70">Your first field orientation can begin with one simple form.</p>
        </div>
      </section>
    </PageTransition>
  );
}
