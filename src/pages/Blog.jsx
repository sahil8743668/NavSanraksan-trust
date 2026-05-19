import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import BlogCard from '../components/BlogCard.jsx';
import PageTransition from '../components/PageTransition.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { blogs } from '../data/siteData.js';

export default function Blog() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const categories = ['All', ...new Set(blogs.map((post) => post.category))];
  const posts = useMemo(() => blogs.filter((post) => (category === 'All' || post.category === category) && post.title.toLowerCase().includes(query.toLowerCase())), [query, category]);
  const featured = blogs[0];

  return (
    <PageTransition>
      <section className="page-hero">
        <p className="eyebrow">Blog and news</p>
        <h1>Updates on child development, women empowerment, health, and community welfare.</h1>
        <p>Stories from early learning, nutrition and hygiene awareness, livelihood training, welfare access, and social development work.</p>
      </section>
      <section className="section">
        <article className="grid overflow-hidden rounded-[2rem] border border-white/60 bg-white/75 shadow-glow backdrop-blur-xl dark:border-white/10 dark:bg-white/10 lg:grid-cols-2">
          <img className="h-full min-h-80 w-full object-cover" src={featured.image} alt={featured.title} />
          <div className="p-8 md:p-12">
            <p className="eyebrow">Featured article</p>
            <h2 className="font-display text-3xl font-black text-forest dark:text-white md:text-5xl">{featured.title}</h2>
            <p className="mt-5 leading-8 text-ink/70 dark:text-white/70">{featured.excerpt}</p>
          </div>
        </article>
      </section>
      <section className="section pb-24">
        <SectionHeader eyebrow="Newsroom" title="Latest objective-based trust updates." />
        <div className="mb-8 grid gap-4 md:grid-cols-[1fr_auto]">
          <label className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/40" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} className="field pl-12" placeholder="Search stories" />
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`rounded-full px-5 py-3 text-sm font-black ${category === item ? 'bg-forest text-white' : 'bg-white/70 text-forest dark:bg-white/10 dark:text-white'}`}>{item}</button>)}
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => <BlogCard key={post.title} post={post} />)}
        </div>
        <div className="mt-10 flex justify-center gap-2">
          {[1, 2, 3].map((page) => <button key={page} className={`grid h-11 w-11 place-items-center rounded-full font-black ${page === 1 ? 'bg-forest text-white' : 'bg-white/70 text-forest dark:bg-white/10 dark:text-white'}`}>{page}</button>)}
        </div>
      </section>
    </PageTransition>
  );
}
