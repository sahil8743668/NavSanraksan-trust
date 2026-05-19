import { PlayCircle } from 'lucide-react';
import GalleryGrid from '../components/GalleryGrid.jsx';
import PageTransition from '../components/PageTransition.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

export default function Gallery() {
  return (
    <PageTransition>
      <section className="page-hero">
        <p className="eyebrow">Gallery</p>
        <h1>Field stories from child development, women empowerment, and community welfare.</h1>
        <p>Photos reflect learning spaces, health and nutrition awareness, skill training, welfare access, and family support.</p>
      </section>
      <section className="section">
        <SectionHeader eyebrow="Photo stories" title="A visual archive of objective-based work." />
        <GalleryGrid />
      </section>
      <section className="section pb-24">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative overflow-hidden rounded-[2rem] shadow-glow">
            <img className="h-[420px] w-full object-cover" src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=1400&q=80" alt="Community welfare event video preview" />
            <button className="absolute inset-0 grid place-items-center bg-ink/30 text-white" aria-label="Play video"><PlayCircle size={82} /></button>
          </div>
          <div className="glass-panel">
            <p className="eyebrow">Event highlights</p>
            <h2 className="font-display text-3xl font-black text-forest dark:text-white">Learning activities, health awareness, women skill training, and welfare guidance.</h2>
            <div className="mt-6 grid gap-3">
              {['Early childhood school readiness day', 'Women rights and livelihood session', 'Village nutrition and hygiene awareness', 'Government schemes help desk'].map((item) => <div key={item} className="rounded-2xl bg-sand/70 p-4 font-bold text-forest dark:bg-white/10 dark:text-white">{item}</div>)}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
