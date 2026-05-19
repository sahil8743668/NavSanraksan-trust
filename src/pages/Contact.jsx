import { useState } from 'react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion.jsx';
import PageTransition from '../components/PageTransition.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const updateField = (field, value) => setForm((current) => ({ ...current, [field]: value }));
  const submitContact = (event) => {
    event.preventDefault();
    const message = { ...form, createdAt: new Date().toISOString() };
    const existing = JSON.parse(localStorage.getItem('navsanrakshan_contacts') || '[]');
    localStorage.setItem('navsanrakshan_contacts', JSON.stringify([message, ...existing]));
    setForm({ name: '', email: '', subject: '', message: '' });
    setSent(true);
  };

  return (
    <PageTransition>
      <section className="page-hero">
        <p className="eyebrow">Contact</p>
        <h1>Connect with NavSanrakshan Trust for welfare, training, and community support.</h1>
        <p>Reach out for child development programs, women skill training, health awareness, welfare access, volunteering, and partnerships.</p>
      </section>
      <section className="section">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <form onSubmit={submitContact} className="glass-panel grid gap-4" data-aos="fade-right">
            <input className="field" placeholder="Full name" value={form.name} onChange={(event) => updateField('name', event.target.value)} required />
            <input className="field" placeholder="Email address" type="email" value={form.email} onChange={(event) => updateField('email', event.target.value)} required />
            <input className="field" placeholder="Subject" value={form.subject} onChange={(event) => updateField('subject', event.target.value)} required />
            <textarea className="field min-h-36" placeholder="Message" value={form.message} onChange={(event) => updateField('message', event.target.value)} required />
            {sent && <p className="rounded-2xl bg-leaf/10 p-3 font-bold text-forest dark:text-white">Message received. We will connect with you soon.</p>}
            <button type="submit" className="rounded-full bg-forest px-6 py-4 font-black text-white">Send Message</button>
          </form>
          <div className="grid gap-4" data-aos="fade-left">
            <div className="glass-card"><MapPin className="text-ember" /><h3>Address</h3><p>Community Care Center, India</p></div>
            <div className="glass-card"><Phone className="text-ember" /><h3>Phone</h3><p>+91 98765 43210</p></div>
            <div className="glass-card"><Mail className="text-ember" /><h3>Email</h3><p>hello@navsanrakshan.org</p></div>
            <div className="flex gap-3">
              <a className="icon-btn" href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
              <a className="icon-btn" href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
              <a className="icon-btn" href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><Twitter size={18} /></a>
              <a className="icon-btn" href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="grid min-h-[360px] place-items-center rounded-[2rem] bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center p-8 text-center shadow-glow">
          <div className="rounded-3xl bg-white/85 p-8 shadow-soft backdrop-blur dark:bg-ink/80">
            <p className="eyebrow">Community location</p>
            <h2 className="font-display text-3xl font-black text-forest dark:text-white">Find our community welfare center here.</h2>
          </div>
        </div>
      </section>
      <section className="section pb-24">
        <SectionHeader eyebrow="FAQ" title="Answers about trust objectives and support." />
        <FAQAccordion />
      </section>
    </PageTransition>
  );
}
