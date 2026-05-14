import { useEffect, useRef, useState } from 'react';

export default function AnimatedCounter({ value, label, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      let start = 0;
      const duration = 1600;
      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / duration, 1);
        setCount(Math.floor(progress * value));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
      observer.disconnect();
    }, { threshold: 0.35 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="rounded-3xl border border-white/50 bg-white/70 p-5 text-center shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-white/10">
      <div className="font-display text-3xl font-black text-forest dark:text-white md:text-4xl">
        {count.toLocaleString('en-IN')}{suffix}
      </div>
      <p className="mt-2 text-sm font-semibold text-ink/65 dark:text-white/65">{label}</p>
    </div>
  );
}
