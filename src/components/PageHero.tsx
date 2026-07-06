import { Reveal } from "./Reveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
};

export function PageHero({ eyebrow, title, body }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-20 text-white sm:py-24">
      <img
        src="/assets/images/hero-procurement.jpg"
        alt=""
        className="animate-hero-zoom absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-ink/78" />
      <div className="container-x relative">
        <Reveal direction="left">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/76">{body}</p>
        </Reveal>
      </div>
    </section>
  );
}
