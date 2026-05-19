import { Heart, ShieldCheck, Utensils } from 'lucide-react';
import DonationCard from '../components/DonationCard.jsx';
import PageTransition from '../components/PageTransition.jsx';

export default function Donate() {
  return (
    <PageTransition>
      <section className="section pt-14">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div data-aos="fade-right">
            <p className="eyebrow">Donate</p>
            <h1 className="font-display text-5xl font-black leading-tight text-forest dark:text-white md:text-7xl">Your giving can support a child, train a woman, or help a family access welfare.</h1>
            <p className="mt-6 leading-8 text-ink/70 dark:text-white/70">Donations can strengthen early childhood education, health and nutrition awareness, hygiene sessions, women skill development, livelihood support, and community welfare activities.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="glass-card"><Utensils className="text-ember" /><h3>Rs. 500</h3><p>Nutrition awareness</p></div>
              <div className="glass-card"><Heart className="text-ember" /><h3>Rs. 2,500</h3><p>Child learning kit</p></div>
              <div className="glass-card"><ShieldCheck className="text-ember" /><h3>Rs. 10,000</h3><p>Women skill session</p></div>
            </div>
          </div>
          <DonationCard />
        </div>
      </section>
    </PageTransition>
  );
}
