import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function BlogCard({ post }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/60 bg-white/75 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-white/10">
      <img className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" src={post.image} alt={post.title} />
      <div className="p-6">
        <div className="flex items-center justify-between text-xs font-black uppercase tracking-[0.18em] text-leaf dark:text-skytrust">
          <span>{post.category}</span><span>{post.date}</span>
        </div>
        <h3 className="mt-4 font-display text-2xl font-black text-forest dark:text-white">{post.title}</h3>
        <p className="mt-3 leading-7 text-ink/65 dark:text-white/65">{post.excerpt}</p>
        <Link to="/blog" className="mt-5 inline-flex items-center gap-2 font-black text-forest dark:text-white">Read story <ArrowRight size={18} /></Link>
      </div>
    </article>
  );
}
