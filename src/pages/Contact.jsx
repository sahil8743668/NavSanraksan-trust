import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import FAQAccordion from '../components/FAQAccordion.jsx';
import PageTransition from '../components/PageTransition.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

export default function Contact() {
  return (
    <PageTransition>
      <section className="page-hero">
        <p className="eyebrow">Contact</p>
        <h1>Connect with NavSanrakshan Trust for welfare, training, and community support.</h1>
        <p>Reach out for child development programs, women skill training, health awareness, welfare access, volunteering, and partnerships.</p>
      </section>
      <section className="section">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <form className="glass-panel grid gap-4" data-aos="fade-right">
            <input className="field" placeholder="Full name" />
            <input className="field" placeholder="Email address" type="email" />
            <input className="field" placeholder="Subject" />
            <textarea className="field min-h-36" placeholder="Message" />
            <button className="rounded-full bg-forest px-6 py-4 font-black text-white">Send Message</button>
          </form>
          <div className="grid gap-4" data-aos="fade-left">
            <div className="glass-card"><MapPin className="text-ember" /><h3>Address</h3><p>Community Care Center, India</p></div>
            <div className="glass-card"><Phone className="text-ember" /><h3>Phone</h3><p>+91 98765 43210</p></div>
            <div className="glass-card"><Mail className="text-ember" /><h3>Email</h3><p>hello@navsanrakshan.org</p></div>
            <div className="flex gap-3">{[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => <a key={index} className="icon-btn" href="#" aria-label="Social media"><Icon size={18} /></a>)}</div>
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
