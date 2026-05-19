import { Search } from 'lucide-react';
import { useMemo, useState } from 'react';
import BlogCard from '../components/BlogCard.jsx';
import PageTransition from '../components/PageTransition.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import { blogs } from '../data/siteData.js';

export default function Blog() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [page, setPage] = useState(1);
  const [activePost, setActivePost] = useState(null);
  const categories = ['All', ...new Set(blogs.map((post) => post.category))];
  const posts = useMemo(() => blogs.filter((post) => (category === 'All' || post.category === category) && post.title.toLowerCase().includes(query.toLowerCase())), [query, category]);
  const pageSize = 3;
  const totalPages = Math.max(1, Math.ceil(posts.length / pageSize));
  const visiblePosts = posts.slice((page - 1) * pageSize, page * pageSize);
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
            <input value={query} onChange={(e) => { setQuery(e.target.value); setPage(1); }} className="field pl-12" placeholder="Search stories" />
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((item) => <button key={item} onClick={() => { setCategory(item); setPage(1); }} className={`rounded-full px-5 py-3 text-sm font-black ${category === item ? 'bg-forest text-white' : 'bg-white/70 text-forest dark:bg-white/10 dark:text-white'}`}>{item}</button>)}
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visiblePosts.map((post) => <BlogCard key={post.title} post={post} onRead={setActivePost} />)}
        </div>
        <div className="mt-10 flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((item) => <button key={item} onClick={() => setPage(item)} className={`grid h-11 w-11 place-items-center rounded-full font-black ${page === item ? 'bg-forest text-white' : 'bg-white/70 text-forest dark:bg-white/10 dark:text-white'}`}>{item}</button>)}
        </div>
      </section>
      {activePost && (
        <div className="fixed inset-0 z-[90] grid place-items-center bg-ink/80 p-4" onClick={() => setActivePost(null)}>
          <article className="max-w-2xl rounded-[2rem] bg-white p-6 shadow-glow dark:bg-ink" onClick={(event) => event.stopPropagation()}>
            <img className="h-64 w-full rounded-3xl object-cover" src={activePost.image} alt={activePost.title} />
            <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-leaf dark:text-skytrust">{activePost.category} | {activePost.date}</p>
            <h2 className="mt-3 font-display text-3xl font-black text-forest dark:text-white">{activePost.title}</h2>
            <p className="mt-4 leading-8 text-ink/70 dark:text-white/70">{activePost.excerpt} NavSanrakshan Trust continues this work through community sessions, field follow-up, and objective-based support.</p>
            <button onClick={() => setActivePost(null)} className="btn-primary mt-6">Close Story</button>
          </article>
        </div>
      )}
    </PageTransition>
  );
}
