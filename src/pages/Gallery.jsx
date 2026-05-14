import { PlayCircle } from 'lucide-react';
import GalleryGrid from '../components/GalleryGrid.jsx';
import PageTransition from '../components/PageTransition.jsx';
import SectionHeader from '../components/SectionHeader.jsx';

export default function Gallery() {
  return (
    <PageTransition>
      <section className="page-hero">
        <p className="eyebrow">Gallery</p>
        <h1>Field stories in images, events, and community highlights.</h1>
        <p>Masonry gallery, hover animations, video section, event highlights, and lightbox preview.</p>
      </section>
      <section className="section">
        <SectionHeader eyebrow="Photo stories" title="A visual archive of care in motion." />
        <GalleryGrid />
      </section>
      <section className="section pb-24">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative overflow-hidden rounded-[2rem] shadow-glow">
            <img className="h-[420px] w-full object-cover" src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1400&q=80" alt="Community event video preview" />
            <button className="absolute inset-0 grid place-items-center bg-ink/30 text-white" aria-label="Play video"><PlayCircle size={82} /></button>
          </div>
          <div className="glass-panel">
            <p className="eyebrow">Event highlights</p>
            <h2 className="font-display text-3xl font-black text-forest dark:text-white">Health camps, plantation drives, school kit distributions, and volunteer days.</h2>
            <div className="mt-6 grid gap-3">
              {['Annual community health week', 'Girls education scholarship day', 'Monsoon tree plantation', 'Village nutrition awareness camp'].map((item) => <div key={item} className="rounded-2xl bg-sand/70 p-4 font-bold text-forest dark:bg-white/10 dark:text-white">{item}</div>)}
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
