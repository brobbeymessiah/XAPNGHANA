export type Route = "/" | "/about" | "/services" | "/contact";

export type NavigateOptions = {
  hash?: string;
};

export type Navigate = (href: Route, options?: NavigateOptions) => void;
