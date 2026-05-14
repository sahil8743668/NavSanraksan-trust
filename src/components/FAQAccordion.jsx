import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/siteData.js';

export default function FAQAccordion() {
  const [open, setOpen] = useState(0);
  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {faqs.map((item, index) => (
        <div key={item.q} className="rounded-3xl border border-white/60 bg-white/75 p-5 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-white/10">
          <button onClick={() => setOpen(open === index ? null : index)} className="flex w-full items-center justify-between gap-4 text-left font-display text-lg font-black text-forest dark:text-white">
            {item.q}
            <ChevronDown className={`shrink-0 transition ${open === index ? 'rotate-180' : ''}`} />
          </button>
          {open === index && <p className="mt-4 leading-8 text-ink/65 dark:text-white/65">{item.a}</p>}
        </div>
      ))}
    </div>
  );
}
