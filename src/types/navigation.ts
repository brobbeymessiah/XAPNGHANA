export type Route = "/" | "/about" | "/our-services" | "/contact";

export type NavigateOptions = {
  hash?: string;
};

export type Navigate = (href: Route, options?: NavigateOptions) => void;
