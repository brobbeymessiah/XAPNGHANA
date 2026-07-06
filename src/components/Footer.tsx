import { Facebook, Instagram, Linkedin } from "lucide-react";
import type { ReactNode } from "react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-7">
      <div className="container-x flex items-center justify-between gap-4">
        <p className="text-sm font-bold text-white/75">XAPNGHANA.All rights reserved.</p>
        <div className="flex gap-2" aria-label="Social media links">
          <SocialLink label="Facebook" href="#">
            <Facebook size={18} />
          </SocialLink>
          <SocialLink label="Instagram" href="#">
            <Instagram size={18} />
          </SocialLink>
          <SocialLink label="LinkedIn" href="#">
            <Linkedin size={18} />
          </SocialLink>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ label, href, children }: { label: string; href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-md border border-white/15 text-white transition hover:-translate-y-0.5 hover:border-white/35 hover:text-white"
    >
      {children}
    </a>
  );
}
