import type { ReactNode } from "react";

export function InfoPanel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="card-motion animate-scale-in rounded-lg border border-ink/10 bg-white p-7 shadow-sm">
      <h3 className="font-display text-2xl font-bold">{title}</h3>
      <p className="mt-4 text-base leading-8 text-steel">{children}</p>
    </div>
  );
}
