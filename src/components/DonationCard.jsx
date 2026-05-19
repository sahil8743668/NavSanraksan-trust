import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BadgeIndianRupee, CheckCircle2, CreditCard, Landmark, Smartphone } from 'lucide-react';

export default function DonationCard() {
  const [amount, setAmount] = useState(2500);
  const [monthly, setMonthly] = useState(true);
  const [method, setMethod] = useState('UPI');
  const [success, setSuccess] = useState(false);
  const amounts = [500, 1000, 2500, 5000, 10000, 25000];
  const methods = [{ name: 'UPI', icon: Smartphone }, { name: 'Card', icon: CreditCard }, { name: 'Net Banking', icon: Landmark }];

  return (
    <div className="relative rounded-[2rem] border border-white/60 bg-white/80 p-6 shadow-glow backdrop-blur-2xl dark:border-white/10 dark:bg-white/10 md:p-8">
      <div className="flex items-center gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-forest text-white"><BadgeIndianRupee /></span>
        <div>
          <h2 className="font-display text-2xl font-black text-forest dark:text-white">Secure Donation</h2>
          <p className="text-sm text-ink/60 dark:text-white/60">Support child development, women empowerment, health awareness, and welfare access.</p>
        </div>
      </div>

      <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {amounts.map((item) => (
          <button key={item} onClick={() => setAmount(item)} className={`rounded-2xl border px-4 py-3 font-black transition ${amount === item ? 'border-forest bg-forest text-white' : 'border-forest/10 bg-white/70 text-forest hover:border-forest dark:border-white/10 dark:bg-white/10 dark:text-white'}`}>
            Rs. {item.toLocaleString('en-IN')}
          </button>
        ))}
      </div>

      <label className="mt-5 flex items-center justify-between rounded-2xl bg-sand/70 p-4 font-bold text-forest dark:bg-white/10 dark:text-white">
        Make this a monthly gift
        <input type="checkbox" checked={monthly} onChange={() => setMonthly(!monthly)} className="h-5 w-5 accent-leaf" />
      </label>

      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {methods.map(({ name, icon: Icon }) => (
          <button key={name} onClick={() => setMethod(name)} className={`flex items-center justify-center gap-2 rounded-2xl border px-4 py-3 font-black transition ${method === name ? 'border-ember bg-ember text-ink' : 'border-forest/10 bg-white/60 text-ink/70 dark:border-white/10 dark:bg-white/10 dark:text-white/70'}`}>
            <Icon size={18} /> {name}
          </button>
        ))}
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2">
        <input className="field" placeholder="Full name" />
        <input className="field" placeholder="Email address" type="email" />
        <input className="field" placeholder="Phone number" />
        <input className="field" placeholder="PAN optional" />
      </div>

      <button onClick={() => setSuccess(true)} className="mt-6 w-full rounded-full bg-forest px-6 py-4 font-black text-white shadow-soft transition hover:bg-leaf">
        Donate Rs. {amount.toLocaleString('en-IN')} {monthly ? 'Monthly' : 'Once'}
      </button>

      <AnimatePresence>
        {success && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 grid place-items-center rounded-[2rem] bg-forest/95 p-8 text-center text-white backdrop-blur">
            <motion.div initial={{ scale: 0.7 }} animate={{ scale: 1 }} className="max-w-sm">
              <CheckCircle2 className="mx-auto text-ember" size={64} />
              <h3 className="mt-4 font-display text-3xl font-black">Thank you for supporting welfare.</h3>
              <p className="mt-3 text-white/75">Your support can help children, women, families, and vulnerable communities.</p>
              <button onClick={() => setSuccess(false)} className="mt-6 rounded-full bg-white px-6 py-3 font-black text-forest">Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
