import { useState } from 'react';
import CampaignCard from '../components/CampaignCard.jsx';
import PageTransition from '../components/PageTransition.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { campaigns } from '../data/siteData.js';

export default function Campaigns() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(campaigns.map((item) => item.category))];
  const visible = filter === 'All' ? campaigns : campaigns.filter((item) => item.category === filter);

  return (
    <PageTransition>
      <section className="page-hero">
        <p className="eyebrow">Campaigns</p>
        <h1>Support objective-based campaigns for children, women, families, and vulnerable groups.</h1>
        <p>Filter by child development, health, women empowerment, and community welfare priorities.</p>
      </section>
      <section className="section pb-24">
        <SectionHeader eyebrow="Active campaigns" title="Support the objective closest to your heart." />
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button key={category} onClick={() => setFilter(category)} className={`rounded-full px-5 py-3 text-sm font-black transition ${filter === category ? 'bg-forest text-white' : 'bg-white/70 text-forest hover:bg-white dark:bg-white/10 dark:text-white'}`}>{category}</button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((campaign) => <CampaignCard key={campaign.title} campaign={campaign} />)}
        </div>
      </section>
    </PageTransition>
  );
}
