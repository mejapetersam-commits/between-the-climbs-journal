export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="mx-auto max-w-[84rem] px-6 pt-20 pb-14 md:px-10 md:pt-32 md:pb-20">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.05] md:text-7xl">{title}</h1>
      {intro && (
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">{intro}</p>
      )}
    </header>
  );
}
