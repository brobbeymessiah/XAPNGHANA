import { ArrowRight } from "lucide-react";
import type { Solution } from "../data/solutions";
import type { Navigate } from "../types/navigation";

type SolutionCardProps = {
  solution: Solution;
  navigate: Navigate;
};

export function SolutionCard({ solution, navigate }: SolutionCardProps) {
  return (
    <article className="card-motion animate-scale-in overflow-hidden rounded-lg border border-ink/10 bg-white shadow-sm">
      <img src={solution.image} alt={solution.title} className="h-56 w-full object-cover" />
      <div className="p-5">
        <h3 className="font-display text-lg font-bold text-black">{solution.title}</h3>
        <p className="mt-3 text-sm leading-7 text-black/75">{solution.summary}</p>
        <button className="button-outline mt-5" onClick={() => navigate("/our-solutions")}>
          View Details <ArrowRight size={16} />
        </button>
      </div>
    </article>
  );
}
