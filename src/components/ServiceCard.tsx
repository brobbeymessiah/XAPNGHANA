import { ArrowRight } from "lucide-react";
import { AppLink } from "./AppLink";
import type { Service } from "../data/services";
import type { Navigate } from "../types/navigation";

type ServiceCardProps = {
  service: Service;
  navigate: Navigate;
};

export function ServiceCard({ service, navigate }: ServiceCardProps) {
  return (
    <article className="card-motion animate-scale-in flex h-full flex-col overflow-hidden rounded-lg border border-ink/10 bg-white shadow-sm">
      <div className="aspect-[16/10] overflow-hidden bg-ink/5">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-lg font-bold text-black">{service.title}</h3>
        <p className="mt-3 text-sm leading-7 text-black/75">{service.summary}</p>
        <div className="mt-auto pt-5">
          <AppLink
            navigate={navigate}
            href="/services"
            hash={service.id}
            className="group inline-flex items-center gap-2 text-sm font-bold text-brand-dark underline-offset-4 transition hover:text-ink hover:underline focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2"
          >
            View Details
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </AppLink>
        </div>
      </div>
    </article>
  );
}
