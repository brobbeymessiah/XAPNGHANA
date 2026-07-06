import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { solutions } from "../data/solutions";
import type { Navigate } from "../types/navigation";

export function SolutionsPage({ navigate }: { navigate: Navigate }) {
  return (
    <>
      <PageHero
        eyebrow="Our Solutions"
        title="Practical supply solutions for every part of your operation."
        body="Instead of overwhelming visitors with every item at once, the page groups products and services into practical supply areas."
      />

      <section className="border-b border-ink/10 bg-white py-8">
        <div className="container-x animate-fade-up overflow-hidden">
          <div className="solution-crawler flex w-max">
            {[0, 1].map((group) => (
              <div
                key={group}
                className="flex shrink-0 gap-3 pr-3"
                aria-hidden={group === 1 ? true : undefined}
              >
                {solutions.map((solution) => (
                  <a
                    key={`${group}-${solution.id}`}
                    href={`#${solution.id}`}
                    className="shrink-0 rounded-md border border-ink/10 bg-mist px-4 py-3 text-sm font-bold text-ink transition hover:border-amber hover:text-amber"
                  >
                    {solution.title}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist py-16">
        <div className="container-x space-y-8">
          {solutions.map((solution, index) => {
            const imageDirection = index % 2 ? "right" : "left";
            const contentDirection = index % 2 ? "left" : "right";

            return (
              <article
                id={solution.id}
                key={solution.id}
                className="card-motion scroll-mt-28 overflow-hidden rounded-lg border border-ink/10 bg-white shadow-sm"
              >
                <div className="grid lg:grid-cols-2">
                  <Reveal
                    direction={imageDirection}
                    duration={0.9}
                    className={`min-h-80 overflow-hidden ${index % 2 ? "lg:order-2" : ""}`}
                  >
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="h-full min-h-80 w-full object-cover transition duration-700 hover:scale-110"
                    />
                  </Reveal>

                  <Reveal direction={contentDirection} duration={0.9} className="h-full">
                    <div className="p-6 sm:p-8 lg:p-10">
                      <h2 className="mt-3 font-display text-2xl font-bold leading-tight sm:text-3xl">{solution.title}</h2>
                      <p className="mt-4 text-base leading-8 text-steel">{solution.summary}</p>
                      <div className="mt-7 grid gap-3 sm:grid-cols-2">
                        {solution.items.map((item) => (
                          <div
                            key={item}
                            className="flex gap-3 rounded-md bg-mist p-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-white hover:shadow-sm"
                          >
                            <CheckCircle2 className="mt-0.5 shrink-0 text-forest" size={17} />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                      <button className="button-outline mt-7" onClick={() => navigate("/contact")}>
                        Request Quote <ArrowRight size={17} />
                      </button>
                    </div>
                  </Reveal>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
