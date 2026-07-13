import type { Route } from "../types/navigation";

export const navItems: { label: string; href: Route }[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/our-solutions" },
  { label: "Contact", href: "/contact" },
];

export function normalizePath(pathname: string): Route {
  if (pathname === "/about") return "/about";
  if (pathname === "/our-solutions") return "/our-solutions";
  if (pathname === "/contact") return "/contact";
  return "/";
}
