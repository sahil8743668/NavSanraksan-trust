import { motion } from 'framer-motion';
import { HeartHandshake } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className="grid min-h-screen place-items-center bg-soft-radial">
      <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 1.6 }} className="mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-forest text-white shadow-glow">
          <HeartHandshake size={36} />
        </motion.div>
        <p className="mt-5 font-display text-2xl font-black text-forest">NavSanrakshan Trust</p>
        <p className="mt-2 text-sm font-bold uppercase tracking-[0.24em] text-ink/50">Loading hope</p>
      </motion.div>
    </div>
  );
}
