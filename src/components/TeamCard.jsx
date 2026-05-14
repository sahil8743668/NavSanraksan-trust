export default function TeamCard({ member }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/60 bg-white/75 shadow-soft backdrop-blur-xl dark:border-white/10 dark:bg-white/10">
      <img className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" src={member.image} alt={member.name} />
      <div className="p-6">
        <h3 className="font-display text-xl font-black text-forest dark:text-white">{member.name}</h3>
        <p className="mt-1 font-semibold text-ink/60 dark:text-white/60">{member.role}</p>
      </div>
    </article>
  );
}
