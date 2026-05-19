import { Link } from 'react-router-dom';
import { Facebook, HeartHandshake, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-forest text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15"><HeartHandshake /></span>
            <div>
              <p className="font-display text-xl font-black">NavSanrakshan Trust</p>
              <p className="text-sm uppercase tracking-[0.24em] text-white/55">Hope in action</p>
            </div>
          </div>
          <p className="mt-5 max-w-md leading-8 text-white/75">A people-first trust supporting child development, early education, health, nutrition, hygiene, women empowerment, livelihood, welfare access, family care, and social development.</p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => <a key={index} href="#" className="icon-btn-dark" aria-label="Social link"><Icon size={18} /></a>)}
          </div>
        </div>
        <div>
          <h3 className="font-display text-lg font-black">Quick Links</h3>
          <div className="mt-4 grid gap-3 text-white/75">
            {['About', 'Programs', 'Campaigns', 'Volunteer', 'Donate', 'Contact'].map((item) => <Link key={item} to={`/${item.toLowerCase()}`} className="hover:text-white">{item}</Link>)}
          </div>
        </div>
        <div>
          <h3 className="font-display text-lg font-black">Reach Us</h3>
          <div className="mt-4 grid gap-4 text-sm text-white/75">
            <p className="flex gap-3"><MapPin size={18} /> Community Care Center, India</p>
            <p className="flex gap-3"><Phone size={18} /> +91 98765 43210</p>
            <p className="flex gap-3"><Mail size={18} /> hello@navsanrakshan.org</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-white/60">(c) 2026 NavSanrakshan Trust. Built for child welfare, women empowerment, and community development.</div>
    </footer>
  );
}
