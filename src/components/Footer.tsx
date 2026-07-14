import { Mail, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { contact } from "../data/contact";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink pt-8 pb-[calc(2rem+env(safe-area-inset-bottom))] sm:py-10">
      <div className="container-x grid grid-cols-[5.75rem_minmax(0,1fr)] items-start gap-x-4 gap-y-5 text-left sm:grid-cols-[8rem_minmax(0,1fr)] lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-8">
        <div className="col-start-1 row-start-1 flex justify-start lg:col-auto lg:row-auto">
          <img
            src="/assets/images/xapn-footer.png"
            alt="XAPN Ghana Limited"
            className="h-auto w-24 object-contain sm:w-32 lg:w-40"
          />
        </div>
        <div className="col-start-2 row-start-1 flex w-full min-w-0 flex-col gap-1.5 lg:col-auto lg:row-auto lg:max-w-none lg:items-end lg:gap-3">
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
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-white/10 text-white sm:h-8 sm:w-8 lg:h-10 lg:w-10">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block break-words text-xs font-semibold leading-snug text-white/80 lg:text-sm lg:font-bold">
          {children}
        </span>
      </span>
    </>
  );

  const className =
    "flex w-full min-w-0 items-center gap-2 rounded-md py-0.5 text-left transition sm:gap-2.5 lg:max-w-md lg:gap-3 lg:p-3";

  if (href) {
    return (
      <a href={href} className={className} aria-label={label}>
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}
