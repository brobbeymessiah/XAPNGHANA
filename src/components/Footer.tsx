import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { contact } from "../data/contact";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-10">
      <div className="container-x grid gap-8 lg:grid-cols-[0.8fr_auto_1.2fr] lg:items-start">
        <div>
          <img
            src="/assets/images/xapn-footer.png"
            alt="XAPN Ghana Limited"
            className="h-auto w-40 object-contain"
          />
        </div>

        <div className="flex flex-col gap-2 lg:items-center" aria-label="Social media links">
          <SocialLink label="Facebook" href="#">
            <Facebook size={18} />
          </SocialLink>
          <SocialLink label="Instagram" href="#">
            <Instagram size={18} />
          </SocialLink>
          <SocialLink label="LinkedIn" href="#">
            <Linkedin size={18} />
          </SocialLink>
          <SocialLink label="TikTok" href="#">
            <TikTokIcon />
          </SocialLink>
        </div>

        <div className="flex flex-col gap-3 lg:items-end">
          <FooterContact icon={<Phone size={18} />} label="Phone" href={contact.phoneHref}>
            {contact.phone}
          </FooterContact>
          <FooterContact icon={<Mail size={18} />} label="Email" href={contact.emailHref}>
            {contact.email}
          </FooterContact>
          <FooterContact icon={<MapPin size={18} />} label="Location">
            {contact.location}
          </FooterContact>
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

function FooterContact({
  icon,
  label,
  href,
  children,
}: {
  icon: ReactNode;
  label: string;
  href?: string;
  children: ReactNode;
}) {
  const content = (
    <>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-white/10 text-white">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block break-words text-sm font-bold leading-snug text-white/80">
          {children}
        </span>
      </span>
    </>
  );

  const className =
    "flex w-full min-w-0 gap-3 rounded-md p-3 transition lg:max-w-md";

  if (href) {
    return (
      <a href={href} className={className} aria-label={label}>
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}

function TikTokIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-[18px] w-[18px]"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M14 4v10.5a4.5 4.5 0 1 1-4.5-4.5" />
      <path d="M14 4c1.1 3.1 3.1 5 6 5" />
    </svg>
  );
}
