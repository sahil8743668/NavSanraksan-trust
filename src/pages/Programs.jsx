import PageTransition from '../components/PageTransition.jsx';
import ProgramCard from '../components/ProgramCard.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { programs } from '../data/siteData.js';

export default function Programs() {
  return (
    <PageTransition>
      <section className="page-hero">
        <p className="eyebrow">Programs and services</p>
        <h1>Integrated support for child development, women empowerment, family welfare, and public good.</h1>
        <p>Programs are shaped around the trust objectives: education, health, nutrition, hygiene, livelihood, rights awareness, welfare access, and social development.</p>
      </section>
      <section className="section pb-24">
        <SectionHeader eyebrow="What we do" title="Eight objective-based areas, one shared purpose." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => <ProgramCard key={program.title} program={program} />)}
        </div>
      </section>
    </PageTransition>
  );
}
