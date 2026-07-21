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
    let scrollPosition = 0;
    let paused = false;
    let resumeTimeout = 0;

    const resetCategoryScroll = () => {
      viewport.scrollLeft = 0;
      scrollPosition = 0;
      lastTimestamp = null;
    };

    const crawl = (timestamp: number) => {
      const elapsed = lastTimestamp === null ? 0 : Math.min(timestamp - lastTimestamp, 32);
      lastTimestamp = timestamp;

      if (!reducedMotion.matches && !paused) {
        const groupWidth = categoryGroupRef.current?.offsetWidth ?? 0;

        if (groupWidth > 0) {
          scrollPosition += elapsed * 0.028;

          if (scrollPosition >= groupWidth) {
            scrollPosition %= groupWidth;
          }

          viewport.scrollLeft = scrollPosition;
        }
      }

      animationFrame = window.requestAnimationFrame(crawl);
    };

    const pauseCrawl = () => {
      window.clearTimeout(resumeTimeout);
      paused = true;
      scrollPosition = viewport.scrollLeft;
    };

    const resumeCrawl = () => {
      scrollPosition = viewport.scrollLeft;
      paused = false;
      lastTimestamp = null;
    };

    const resumeAfterTouch = () => {
      window.clearTimeout(resumeTimeout);
      resumeTimeout = window.setTimeout(resumeCrawl, 550);
    };

    const pauseOnPointerEnter = (event: PointerEvent) => {
      if (event.pointerType === "mouse") pauseCrawl();
    };

    const resumeOnPointerLeave = (event: PointerEvent) => {
      if (event.pointerType === "mouse") resumeCrawl();
    };

    resetCategoryScroll();
    animationFrame = window.requestAnimationFrame(crawl);
    window.addEventListener("pageshow", resetCategoryScroll);
    viewport.addEventListener("pointerenter", pauseOnPointerEnter);
    viewport.addEventListener("pointerleave", resumeOnPointerLeave);
    viewport.addEventListener("touchstart", pauseCrawl, { passive: true });
    viewport.addEventListener("touchend", resumeAfterTouch);
    viewport.addEventListener("touchcancel", resumeAfterTouch);
    viewport.addEventListener("focusin", pauseCrawl);
    viewport.addEventListener("focusout", resumeCrawl);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.clearTimeout(resumeTimeout);
      window.removeEventListener("pageshow", resetCategoryScroll);
      viewport.removeEventListener("pointerenter", pauseOnPointerEnter);
      viewport.removeEventListener("pointerleave", resumeOnPointerLeave);
      viewport.removeEventListener("touchstart", pauseCrawl);
      viewport.removeEventListener("touchend", resumeAfterTouch);
      viewport.removeEventListener("touchcancel", resumeAfterTouch);
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
                      <div className="mt-7">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-dark">
                          Service Gallery
                        </p>
                        <div className="service-gallery-viewport -mx-1 mt-3 flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0">
                          {service.gallery.map((galleryItem) => (
                            <figure
                              key={galleryItem.title}
                              className="group w-[82%] shrink-0 snap-start overflow-hidden rounded-md border border-ink/10 bg-white sm:w-auto"
                            >
                              <div className="aspect-[16/10] overflow-hidden bg-ink/5">
                                <img
                                  src={galleryItem.image}
                                  alt={`${galleryItem.title} for ${service.title}`}
                                  loading="lazy"
                                  decoding="async"
                                  className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                                />
                              </div>
                              <figcaption className="px-3 py-2 text-xs font-bold leading-5 text-ink">
                                {galleryItem.title}
                              </figcaption>
                            </figure>
                          ))}
                        </div>
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
