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
    <article className="card-motion animate-scale-in overflow-hidden rounded-lg border border-ink/10 bg-white shadow-sm">
      <img src={service.image} alt={service.title} className="h-56 w-full object-cover" />
      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-black">{service.title}</h3>
        <p className="mt-3 text-sm leading-7 text-black/75">{service.summary}</p>
        <AppLink
          navigate={navigate}
          href="/our-services"
          hash={service.id}
          className="button-outline mt-5"
        >
          View Details <ArrowRight size={16} />
        </AppLink>
      </div>
    </article>
  );
}
