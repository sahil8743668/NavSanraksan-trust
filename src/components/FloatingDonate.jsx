import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function FloatingDonate() {
  return (
    <Link to="/donate" className="fixed bottom-6 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-ember px-5 py-3 text-sm font-black text-ink shadow-soft transition hover:-translate-y-1">
      <Heart size={18} fill="currentColor" /> Donate
    </Link>
  );
}
