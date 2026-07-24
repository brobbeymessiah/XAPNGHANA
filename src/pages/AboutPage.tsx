import { CheckCircle2 } from "lucide-react";
import { InfoPanel } from "../components/InfoPanel";
import { PageHero } from "../components/PageHero";
import { Reveal } from "../components/Reveal";
import { SectionHeading } from "../components/SectionHeading";
import type { Navigate } from "../types/navigation";

const values = [
  ["Reliability", "Consistent response and timely supply support."],
  ["Quality Assurance", "Products sourced with care from trusted channels."],
  ["Safety & Compliance", "Responsible support shaped around site and operational requirements."],
  ["Operational Understanding", "A practical view of uptime, delivery, safety, and continuity."],
];

export function AboutPage({ navigate }: { navigate: Navigate }) {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A dependable partner for industrial and mining operations across Ghana."
        body="XAPN Ghana Limited supports industry, production facilities, commercial operations and mining companies with reliable  product sourcing, expert technical services,and practical operational support."
      />

      <section className="section-pad bg-white">
        <div className="container-x grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-start">
          <Reveal direction="up">
            <div>
              <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                Company Overview
              </h2>
            </div>
          </Reveal>
          <Reveal direction="up">
            <div className="space-y-5 text-base leading-8 text-black/75">
              <p>
                XAPN Ghana Limited provides integrated solutions for industry, mining, and
                commercial operations.
              </p>
              <p>
                We combine reliable product supply with engineering, maintenance, and operational
                support services to deliver continuity, safety, and performance for our clients
                across Ghana.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-16">
        <div className="container-x grid gap-5 md:grid-cols-2">
          <Reveal direction="up" className="h-full">
            <InfoPanel title="Our Mission">
              To deliver high-quality products and services that enhance operational efficiency,
              support business growth, and create lasting value for clients.
            </InfoPanel>
          </Reveal>
          <Reveal direction="up" className="h-full">
            <InfoPanel title="Our Vision">
              To become a leading provider of industrial and operational services in Ghana,
              recognized for excellence, innovation, and customer satisfaction.
            </InfoPanel>
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Core Values"
            title="The standards behind every client relationship."
            body="Practical service, responsible delivery, and long-term value guide how XAPN supports every operation."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map(([title, body]) => (
              <Reveal key={title} direction="up" className="h-full">
                <div className="card-motion h-full rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
                  <CheckCircle2 className="text-brand-dark" size={24} />
                  <h3 className="mt-4 font-display text-lg font-bold text-black">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-black/75">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
