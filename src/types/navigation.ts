export type Route = "/" | "/about" | "/our-solutions" | "/contact";

export type Navigate = (href: Route) => void;
