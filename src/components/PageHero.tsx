import { Reveal } from "./Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body?: string;
};

export function PageHero({ eyebrow, title, body }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pb-20 pt-28 text-white sm:pb-24 sm:pt-32">
      <img
        src="/assets/images/hero-procurement.jpg"
        alt=""
        className="animate-hero-zoom absolute inset-0 h-full w-full object-cover object-[80%_center] sm:object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-ink/20 sm:via-ink/62 sm:to-ink/10" />
      <div className="container-x relative z-10">
        <Reveal direction="left">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
          {body && <p className="mt-5 max-w-3xl text-base leading-8 text-white/76">{body}</p>}
        </Reveal>
      </div>
    </section>
  );
}
