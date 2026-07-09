import { MessageCircle, ShieldCheck, Truck } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const whyChooseItems = [
  {
    icon: <Truck size={24} />,
    title: "Timely Delivery",
    body: "Consistent supply support for operational schedules.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Quality Assurance",
    body: "Products sourced with reliability and performance in mind.",
  },
  {
    icon: <MessageCircle size={24} />,
    title: "Client Focus",
    body: "Quote-based support tailored to the specific need.",
  },
];

export function WhyChoose() {
  return (
    <section className="section-pad bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Choose XAPN"
          title="A practical partner for business continuity."
          body="The website keeps the pitch focused on reliability, quality, and fast enquiry action."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {whyChooseItems.map((item) => (
            <Reveal key={item.title} direction="up" className="h-full">
              <div className="card-motion h-full rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
                <span className="grid h-12 w-12 place-items-center rounded-md bg-brand/15 text-brand-dark">
                  {item.icon}
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-black/75">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
