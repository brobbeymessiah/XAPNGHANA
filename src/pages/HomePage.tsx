import { ArrowRight, Building2, MessageCircle } from "lucide-react";
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
          className="absolute inset-0 h-full w-full object-cover object-[80%_center] sm:object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/82 to-ink/35 sm:via-ink/78 sm:to-ink/20" />
        <div className="container-x relative z-10 flex items-center py-12 sm:min-h-[84vh] sm:py-20">
          <div className="max-w-3xl">
            <h1 className="max-w-3xl text-4xl font-black leading-[1.05] sm:text-5xl lg:text-7xl">
              Supplying the essentials that keep business moving.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
            Your Trusted Partner in Industrial Solutions & Supplies
            </p>
           
          </div>
        </div>
      </section>

      <section className="border-b border-ink/10 bg-white py-6">
        <div className="container-x grid gap-4 sm:grid-cols-3">
          <Stat label="Solution Areas" value="6" />
          <Stat label="Delivery Coverage" value="Ghana" />
          <Stat label="Response Type" value="Quote Based" />
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="eyebrow">What We Do</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Reliable supply support for offices, fleets, warehouses, and operations teams.
            </h2>
          </div>
          <p className="text-base leading-8 text-steel">
            XAPN Ghana Company Limited helps businesses source essential products and services
            with a focus on quality, timely delivery, and long-term operational value.
          </p>
        </div>
      </section>

      <section className="bg-mist py-16">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Solutions"
            title="Grouped clearly, so clients find what they need fast."
            body="The website presents solution categories first, then supporting items inside each category."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {solutions.map((solution) => (
              <SolutionCard key={solution.id} solution={solution} navigate={navigate} />
            ))}
          </div>
        </div>
      </section>

      <WhyChoose />

      <section className="section-pad bg-ink text-white">
        <div className="container-x grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow">Nationwide Support</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Supply and delivery support for clients across Ghana.
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/74">
              Tell us what your team needs, the preferred quantity, and delivery location.
              XAPN will respond with availability, pricing, and next steps.
            </p>
          </div>
          <button className="button-primary" onClick={() => navigate("/contact")}>
            Send an Enquiry <MessageCircle size={18} />
          </button>
        </div>
      </section>
    </>
  );
}
