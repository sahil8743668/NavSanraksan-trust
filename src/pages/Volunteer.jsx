import { useState } from 'react';
import { CheckCircle2, Clock, MapPin, Sparkles } from 'lucide-react';
import PageTransition from '../components/PageTransition.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { gallery } from '../data/siteData.js';

export default function Volunteer() {
  const skills = ['Teaching', 'Health Awareness', 'Parenting Sessions', 'Women Skills', 'Welfare Access', 'Events', 'Counseling', 'Technology'];
  const [form, setForm] = useState({ name: '', email: '', phone: '', reason: '', skills: [], availability: 'Weekend availability' });
  const [sent, setSent] = useState(false);
  const updateField = (field, value) => setForm((current) => ({ ...current, [field]: value }));
  const toggleSkill = (skill) => setForm((current) => ({
    ...current,
    skills: current.skills.includes(skill) ? current.skills.filter((item) => item !== skill) : [...current.skills, skill],
  }));
  const submitVolunteer = (event) => {
    event.preventDefault();
    const volunteer = { ...form, createdAt: new Date().toISOString() };
    const existing = JSON.parse(localStorage.getItem('navsanrakshan_volunteers') || '[]');
    localStorage.setItem('navsanrakshan_volunteers', JSON.stringify([volunteer, ...existing]));
    setForm({ name: '', email: '', phone: '', reason: '', skills: [], availability: 'Weekend availability' });
    setSent(true);
  };

  return (
    <PageTransition>
      <section className="page-hero">
        <p className="eyebrow">Volunteer</p>
        <h1>Join programs for child learning, health awareness, women skills, and community welfare.</h1>
        <p>Register your skills, availability, and area of interest to support objective-based field work.</p>
      </section>
      <section className="section">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <form onSubmit={submitVolunteer} className="glass-panel grid gap-4" data-aos="fade-right">
            <input className="field" placeholder="Full name" value={form.name} onChange={(event) => updateField('name', event.target.value)} required />
            <div className="grid gap-4 sm:grid-cols-2"><input className="field" placeholder="Email" type="email" value={form.email} onChange={(event) => updateField('email', event.target.value)} required /><input className="field" placeholder="Phone" value={form.phone} onChange={(event) => updateField('phone', event.target.value)} required /></div>
            <textarea className="field min-h-28" placeholder="Why would you like to volunteer?" value={form.reason} onChange={(event) => updateField('reason', event.target.value)} required />
            <div>
              <p className="mb-3 font-black text-forest dark:text-white">Select skills</p>
              <div className="flex flex-wrap gap-2">{skills.map((skill) => <label key={skill} className="rounded-full bg-white/70 px-4 py-2 text-sm font-bold dark:bg-white/10"><input type="checkbox" checked={form.skills.includes(skill)} onChange={() => toggleSkill(skill)} className="mr-2 accent-leaf" />{skill}</label>)}</div>
            </div>
            <select className="field" value={form.availability} onChange={(event) => updateField('availability', event.target.value)}><option>Weekend availability</option><option>Weekday availability</option><option>Remote support</option><option>Event based</option></select>
            {sent && <p className="rounded-2xl bg-leaf/10 p-3 font-bold text-forest dark:text-white">Volunteer form submitted successfully.</p>}
            <button type="submit" className="rounded-full bg-forest px-6 py-4 font-black text-white">Submit Volunteer Form</button>
          </form>
          <div className="grid gap-4" data-aos="fade-left">
            {[['Flexible roles', Clock], ['Local field exposure', MapPin], ['Training and certificates', CheckCircle2], ['Meaningful community network', Sparkles]].map(([label, Icon]) => <div key={label} className="glass-card"><Icon className="text-ember" /><h3>{label}</h3><p>Volunteer support for early learning, health, hygiene, women empowerment, welfare access, and family care.</p></div>)}
          </div>
        </div>
      </section>
      <section className="section pb-24">
        <SectionHeader eyebrow="Volunteer gallery" title="Moments from learning, care, and welfare work." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.slice(0, 4).map((img) => <img key={img} className="h-64 rounded-3xl object-cover shadow-soft" src={img} alt="Volunteer activity" />)}
        </div>
        <div className="mt-10 rounded-[2rem] bg-forest p-8 text-center text-white shadow-glow">
          <h2 className="font-display text-3xl font-black">Ready to serve the trust objectives?</h2>
          <p className="mt-3 text-white/70">Your first field orientation can support children, women, families, and community welfare.</p>
        </div>
      </section>
    </PageTransition>
  );
}
