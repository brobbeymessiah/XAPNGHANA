import { ArrowRight, CheckCircle2 } from "lucide-react";
import { AppLink } from "../components/AppLink";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { productCategories } from "../data/products";
import type { Navigate } from "../types/navigation";

export function ProductsPage({ navigate }: { navigate: Navigate }) {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="Products and supplies for every aspect of your operations."
        body="From office furniture and fleet essentials to industrial supplies, spare parts, storage products, and asset-protection materials, XAPN helps clients source what they need."
      />

      <section className="border-b border-ink/10 bg-white py-6">
        <div className="container-x">
          <nav
            className="service-crawler-viewport flex snap-x gap-3"
            aria-label="Product categories"
          >
            {productCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="shrink-0 snap-start rounded-md border border-ink/10 bg-mist px-4 py-3 text-sm font-bold text-ink transition hover:border-brand hover:text-brand-dark"
              >
                {category.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="bg-mist py-12 sm:py-16">
        <div className="container-x space-y-8">
          {productCategories.map((category, index) => (
            <article
              id={category.id}
              key={category.id}
              className="card-motion scroll-mt-28 overflow-hidden rounded-lg border border-ink/10 bg-white shadow-sm"
            >
              <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
                <Reveal
                  direction={index % 2 ? "right" : "left"}
                  duration={0.9}
                  className={`relative aspect-[16/10] overflow-hidden bg-ink/5 lg:aspect-auto lg:min-h-[24rem] ${
                    index % 2 ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={category.image}
                    alt={category.title}
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 hover:scale-105"
                  />
                </Reveal>

                <Reveal
                  direction={index % 2 ? "left" : "right"}
                  duration={0.9}
                  className="h-full"
                >
                  <div className="flex h-full flex-col p-6 sm:p-8 lg:p-10">
                    <p className="eyebrow">Product Category</p>
                    <h2
                      tabIndex={-1}
                      className="mt-3 font-display text-2xl font-bold leading-tight sm:text-3xl"
                    >
                      {category.title}
                    </h2>
                    <p className="mt-4 text-base leading-8 text-black/75">{category.summary}</p>
                    <div className="mt-7 grid gap-3 sm:grid-cols-2">
                      {category.items.map((item) => (
                        <div
                          key={item}
                          className="flex gap-3 rounded-md bg-mist p-3 text-sm font-semibold text-ink"
                        >
                          <CheckCircle2 className="mt-0.5 shrink-0 text-brand-dark" size={17} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    <AppLink
                      navigate={navigate}
                      href="/contact"
                      className="button-outline mt-7 self-start"
                    >
                      Request Quote <ArrowRight size={17} />
                    </AppLink>
                  </div>
                </Reveal>
              </div>

              <div className="border-t border-ink/10 bg-white p-5 sm:p-6 lg:p-8">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-brand-dark">
                  Available Products
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
                  {category.showcaseItems.map((item) => (
                    <figure
                      key={item.title}
                      className="group overflow-hidden rounded-md border border-ink/10 bg-white"
                    >
                      <div className="aspect-[4/3] overflow-hidden bg-ink/5">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                        />
                      </div>
                      <figcaption className="px-3 py-2 text-xs font-bold leading-5 text-ink">
                        {item.title}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
