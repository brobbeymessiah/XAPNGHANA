import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useRef } from "react";
import { AppLink } from "../components/AppLink";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { services } from "../data/services";
import type { Navigate } from "../types/navigation";

export function ServicesPage({ navigate }: { navigate: Navigate }) {
  const categoryNavRef = useRef<HTMLElement>(null);
  const categoryGroupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const viewport = categoryNavRef.current;

    if (!viewport) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;
    let lastTimestamp: number | null = null;
    let paused = false;

    const resetCategoryScroll = () => {
      viewport.scrollLeft = 0;
      lastTimestamp = null;
    };

    const crawl = (timestamp: number) => {
      const elapsed = lastTimestamp === null ? 0 : Math.min(timestamp - lastTimestamp, 32);
      lastTimestamp = timestamp;

      if (!reducedMotion.matches && !paused) {
        const groupWidth = categoryGroupRef.current?.offsetWidth ?? 0;

        if (groupWidth > 0) {
          viewport.scrollLeft += elapsed * 0.028;

          if (viewport.scrollLeft >= groupWidth) {
            viewport.scrollLeft %= groupWidth;
          }
        }
      }

      animationFrame = window.requestAnimationFrame(crawl);
    };

    const pauseCrawl = () => {
      paused = true;
    };

    const resumeCrawl = () => {
      paused = false;
      lastTimestamp = null;
    };

    resetCategoryScroll();
    animationFrame = window.requestAnimationFrame(crawl);
    window.addEventListener("pageshow", resetCategoryScroll);
    viewport.addEventListener("pointerenter", pauseCrawl);
    viewport.addEventListener("pointerleave", resumeCrawl);
    viewport.addEventListener("touchstart", pauseCrawl, { passive: true });
    viewport.addEventListener("touchend", resumeCrawl);
    viewport.addEventListener("focusin", pauseCrawl);
    viewport.addEventListener("focusout", resumeCrawl);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("pageshow", resetCategoryScroll);
      viewport.removeEventListener("pointerenter", pauseCrawl);
      viewport.removeEventListener("pointerleave", resumeCrawl);
      viewport.removeEventListener("touchstart", pauseCrawl);
      viewport.removeEventListener("touchend", resumeCrawl);
      viewport.removeEventListener("focusin", pauseCrawl);
      viewport.removeEventListener("focusout", resumeCrawl);
    };
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Integrated support for mining and industrial operations."
        body="From essential mining inputs to engineering, facility maintenance, and environmental support, XAPN helps clients keep critical operations moving."
      />

      <section className="overflow-x-hidden border-b border-ink/10 bg-white py-8">
        <div className="container-x animate-fade-up min-w-0">
          <nav
            ref={categoryNavRef}
            className="service-crawler-viewport"
            aria-label="Service categories"
          >
            <div className="flex w-max">
              {[0, 1, 2].map((copyIndex) => (
                <div
                  key={copyIndex}
                  ref={copyIndex === 0 ? categoryGroupRef : undefined}
                  aria-hidden={copyIndex > 0 ? "true" : undefined}
                  className={`flex shrink-0 gap-3 pr-3 ${copyIndex > 0 ? "motion-reduce:hidden" : ""}`}
                >
                  {services.map((service) => (
                    <a
                      key={service.id}
                      href={`#${service.id}`}
                      tabIndex={copyIndex > 0 ? -1 : undefined}
                      className="shrink-0 rounded-md border border-ink/10 bg-mist px-4 py-3 text-sm font-bold text-ink transition hover:border-brand hover:text-brand-dark"
                    >
                      {service.title}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </nav>
        </div>
      </section>

      <section className="bg-mist py-16">
        <div className="container-x space-y-8">
          {services.map((service, index) => {
            const imageDirection = index % 2 ? "right" : "left";
            const contentDirection = index % 2 ? "left" : "right";

            return (
              <article
                id={service.id}
                key={service.id}
                className="card-motion scroll-mt-28 overflow-hidden rounded-lg border border-ink/10 bg-white shadow-sm"
              >
                <div className="grid lg:grid-cols-2">
                  <Reveal
                    direction={imageDirection}
                    duration={0.9}
                    className={`relative aspect-[16/10] self-start overflow-hidden bg-ink/5 lg:my-8 ${index % 2 ? "lg:order-2" : ""}`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover object-center transition duration-700 hover:scale-105"
                    />
                  </Reveal>

                  <Reveal direction={contentDirection} duration={0.9} className="h-full">
                    <div className="p-6 sm:p-8 lg:p-10">
                      <h2
                        tabIndex={-1}
                        className="mt-3 font-display text-2xl font-bold leading-tight sm:text-3xl"
                      >
                        {service.title}
                      </h2>
                      <p className="mt-4 text-base leading-8 text-black/75">{service.summary}</p>
                      <div className="mt-7 grid gap-3 sm:grid-cols-2">
                        {service.items.map((item) => (
                          <div
                            key={item}
                            className="flex gap-3 rounded-md bg-mist p-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-white hover:shadow-sm"
                          >
                            <CheckCircle2 className="mt-0.5 shrink-0 text-brand-dark" size={17} />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-7 rounded-md border-l-4 border-brand bg-brand/10 px-5 py-4">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-dark">
                          Why Choose XAPN
                        </p>
                        <p className="mt-2 text-sm leading-7 text-ink/75">{service.whyChoose}</p>
                      </div>
                      <AppLink navigate={navigate} href="/contact" className="button-outline mt-7">
                        Request Quote <ArrowRight size={17} />
                      </AppLink>
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
