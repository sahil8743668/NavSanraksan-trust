import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CalendarDays, Heart } from 'lucide-react';

export default function CampaignCard({ campaign }) {
  const [raised, setRaised] = useState(0);
  const percent = Math.min(Math.round((raised / campaign.goal) * 100), 100);

  useEffect(() => {
    const updateRaised = () => {
      const donations = JSON.parse(localStorage.getItem('navsanrakshan_donations') || '[]');
      const total = donations
        .filter((donation) => donation.campaign === campaign.title && donation.countInCampaign)
        .reduce((sum, donation) => sum + Number(donation.amount || 0), 0);
      setRaised(total);
    };

    updateRaised();
    window.addEventListener('storage', updateRaised);
    window.addEventListener('navsanrakshan:donation', updateRaised);
    return () => {
      window.removeEventListener('storage', updateRaised);
      window.removeEventListener('navsanrakshan:donation', updateRaised);
    };
  }, [campaign.title]);

  return (
    <article className="group overflow-hidden rounded-3xl border border-white/60 bg-white/75 shadow-soft backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:shadow-glow dark:border-white/10 dark:bg-white/10">
      <div className="relative h-60 overflow-hidden">
        <img className="h-full w-full object-cover transition duration-500 group-hover:scale-110" src={campaign.image} alt={campaign.title} />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-forest">{campaign.category}</span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl font-black text-forest dark:text-white">{campaign.title}</h3>
        <p className="mt-3 leading-7 text-ink/65 dark:text-white/65">{campaign.copy}</p>
        <div className="mt-5 h-3 overflow-hidden rounded-full bg-forest/10 dark:bg-white/10">
          <div className="h-full rounded-full bg-gradient-to-r from-leaf to-ember" style={{ width: `${percent}%` }} />
        </div>
        <div className="mt-4 flex items-center justify-between text-sm font-bold text-ink/65 dark:text-white/65">
          <span>Raised Rs. {raised.toLocaleString('en-IN')}</span>
          <span>{percent}%</span>
        </div>
        <div className="mt-2 flex items-center justify-between text-sm text-ink/55 dark:text-white/55">
          <span>Goal Rs. {campaign.goal.toLocaleString('en-IN')}</span>
          <span className="flex items-center gap-1"><CalendarDays size={16} /> {campaign.days} days left</span>
        </div>
        <Link to={`/donate?campaign=${encodeURIComponent(campaign.title)}`} className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-5 py-3 font-black text-white transition hover:bg-leaf">
          <Heart size={18} fill="currentColor" /> Donate to Campaign
        </Link>
      </div>
    </article>
  );
}
