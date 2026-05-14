import PageTransition from '../components/PageTransition.jsx';
import ProgramCard from '../components/ProgramCard.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { programs } from '../data/siteData.js';

export default function Programs() {
  return (
    <PageTransition>
      <section className="page-hero">
        <p className="eyebrow">Programs and services</p>
        <h1>Integrated support for education, health, livelihood, climate, and dignity.</h1>
        <p>Each program card is built with reusable data, icons, images, descriptions, and CTA buttons.</p>
      </section>
      <section className="section pb-24">
        <SectionHeader eyebrow="What we do" title="Eight focused areas, one shared purpose." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => <ProgramCard key={program.title} program={program} />)}
        </div>
      </section>
    </PageTransition>
  );
}
