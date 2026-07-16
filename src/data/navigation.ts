import type { Route } from "../types/navigation";

export const navItems: { label: string; href: Route }[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/our-services" },
  { label: "Contact", href: "/contact" },
];

export function normalizePath(pathname: string): Route {
  const normalizedPath = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;

  if (normalizedPath === "/") return "/";
  if (normalizedPath === "/about") return "/about";
  if (normalizedPath === "/our-services") return "/our-services";
  if (normalizedPath === "/contact") return "/contact";
  return "/";
}
