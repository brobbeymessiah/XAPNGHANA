export function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="card-motion animate-scale-in rounded-lg border border-ink/10 bg-mist p-4">
      <span className="block text-xs font-bold uppercase tracking-[0.16em] text-steel">{label}</span>
      <span className="mt-1 block font-display text-xl font-bold">{value}</span>
    </div>
  );
}
