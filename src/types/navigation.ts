export type Route = "/" | "/about" | "/services" | "/products" | "/contact";

export type NavigateOptions = {
  hash?: string;
};

export type Navigate = (href: Route, options?: NavigateOptions) => void;
