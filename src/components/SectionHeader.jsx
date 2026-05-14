export default function SectionHeader({ eyebrow, title, copy, center = true }) {
  return (
    <div className={`mx-auto mb-10 max-w-3xl ${center ? 'text-center' : ''}`} data-aos="fade-up">
      {eyebrow && <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-leaf dark:text-skytrust">{eyebrow}</p>}
      <h2 className="font-display text-3xl font-black leading-tight text-forest dark:text-white md:text-5xl">{title}</h2>
      {copy && <p className="mt-5 text-base leading-8 text-ink/70 dark:text-white/70 md:text-lg">{copy}</p>}
    </div>
  );
}
