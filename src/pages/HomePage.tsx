import { ArrowRight } from "lucide-react";
import { AppLink } from "../components/AppLink";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import { ServiceCard } from "../components/ServiceCard";
import { WhyChoose } from "../components/WhyChoose";
import { productCategories } from "../data/products";
import { services } from "../data/services";
import type { Navigate } from "../types/navigation";

const featuredProducts = productCategories.slice(0, 3);
const featuredServices = services.slice(0, 3);

export function HomePage({ navigate }: { navigate: Navigate }) {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-white sm:min-h-[84vh]">
        <img
          src="/assets/images/hero-procurement.jpg"
          alt="Procurement team reviewing supplies in a warehouse"
          className="animate-hero-zoom absolute inset-0 h-full w-full object-cover object-[80%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/82 to-ink/35 sm:via-ink/78 sm:to-ink/20" />
        <div className="container-x relative z-10 flex items-center pb-12 pt-28 sm:min-h-[84vh] sm:py-20">
          <Reveal direction="up" className="max-w-3xl">
            <div>
              <h1
                tabIndex={-1}
                className="max-w-3xl font-display text-4xl font-bold leading-[1.08] sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Your Trusted Partner for Industrial Services & Supplies
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
                Reliable supply and service support for industrial operations.
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
              eyebrow="Our Services"
              title=""
            />
          </Reveal>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service) => (
              <Reveal key={service.id} direction="up" className="h-full">
                <ServiceCard service={service} navigate={navigate} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-16 text-white">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <Reveal direction="left">
              <SectionHeading
                eyebrow="Our Products"
               title=""
               />
            </Reveal>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {featuredProducts.map((product) => (
              <Reveal key={product.id} direction="up" className="h-full">
                <article className="card-motion flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-white text-ink shadow-sm">
                  <div className="aspect-[16/10] overflow-hidden bg-ink/5">
                    <img
                      src={product.image}
                      alt={product.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-center transition duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg font-bold text-black">{product.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-black/75">{product.summary}</p>
                    <div className="mt-auto pt-5">
                      <AppLink
                        navigate={navigate}
                        href="/products"
                        hash={product.id}
                        className="button-outline"
                      >
                        View Details<ArrowRight size={16} />
                      </AppLink>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyChoose />
    </>
  );
}
