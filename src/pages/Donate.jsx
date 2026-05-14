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
            <h1 className="font-display text-5xl font-black leading-tight text-forest dark:text-white md:text-7xl">Your giving can become a child school day, a health checkup, or a safe meal.</h1>
            <p className="mt-6 leading-8 text-ink/70 dark:text-white/70">A warm, secure, and conversion-friendly donation page with impact framing, payment method UI, monthly giving, and animated success feedback.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="glass-card"><Utensils className="text-ember" /><h3>Rs. 500</h3><p>Nutritious meals</p></div>
              <div className="glass-card"><Heart className="text-ember" /><h3>Rs. 2,500</h3><p>Child support kit</p></div>
              <div className="glass-card"><ShieldCheck className="text-ember" /><h3>Rs. 10,000</h3><p>Health camp support</p></div>
            </div>
          </div>
          <DonationCard />
        </div>
      </section>
    </PageTransition>
  );
}
