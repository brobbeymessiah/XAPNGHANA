import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { SolutionCard } from "../components/SolutionCard";
import { Stat } from "../components/Stat";
import { WhyChoose } from "../components/WhyChoose";
import { solutions } from "../data/solutions";
import type { Navigate } from "../types/navigation";

export function HomePage({ navigate }: { navigate: Navigate }) {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-white sm:min-h-[84vh]">
        <img
          src="/assets/images/hero-procurement.jpg"
          alt="Procurement team reviewing supplies in a warehouse"
          className="animate-hero-zoom absolute inset-0 h-full w-full object-cover object-[80%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/82 to-ink/35 sm:via-ink/78 sm:to-ink/20" />
        <div className="container-x relative z-10 flex items-center pb-12 pt-28 sm:min-h-[84vh] sm:py-20">
          <Reveal direction="up" className="max-w-3xl">
            <div>
              <h1 className="max-w-3xl font-display text-4xl font-bold leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl">
                Your Trusted Partner in Industrial Solutions & Supplies
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
                Supplying the essentials that keep business moving.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-x grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-end lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal direction="left">
            <div>
              <p className="eyebrow">What We Do</p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">
                Reliable supply support for offices, fleets, warehouses, and operation teams.
              </h2>
            </div>
          </Reveal>
          <Reveal direction="right">
            <p className="text-base leading-8 text-black/75">
              XAPN Ghana Limited helps businesses source essential products and services
              with a focus on quality, timely delivery, and long-term operational value.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-16">
        <div className="container-x">
          <Reveal direction="left">
            <SectionHeading
              eyebrow="Our Solutions"
              title="Grouped clearly, so clients find what they need fast."
              body="The website presents solution categories first, then supporting items inside each category."
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <Reveal key={solution.id} direction="up" className="h-full">
                <SolutionCard solution={solution} navigate={navigate} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyChoose />
    </>
  );
}
