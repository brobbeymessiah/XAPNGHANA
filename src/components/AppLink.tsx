import type { AnchorHTMLAttributes, MouseEvent } from "react";
import type { Navigate, Route } from "../types/navigation";

type AppLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: Route;
  hash?: string;
  navigate: Navigate;
  onNavigate?: () => void;
};

export function AppLink({
  href,
  hash,
  navigate,
  onNavigate,
  onClick,
  ...anchorProps
}: AppLinkProps) {
  const destination = hash ? `${href}#${hash}` : href;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    const isModifiedClick = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
    const opensElsewhere = event.currentTarget.target && event.currentTarget.target !== "_self";

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      isModifiedClick ||
      opensElsewhere ||
      event.currentTarget.hasAttribute("download")
    ) {
      return;
    }

    event.preventDefault();
    onNavigate?.();
    navigate(href, hash ? { hash } : undefined);
  };

  return <a {...anchorProps} href={destination} onClick={handleClick} />;
}
