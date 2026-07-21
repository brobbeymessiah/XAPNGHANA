import { useEffect, useRef, useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { normalizePath } from "./data/navigation";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import type { NavigateOptions, Route } from "./types/navigation";

const routeTitles: Record<Route, string> = {
  "/": "XAPN Ghana Limited | Industrial Services & Supplies",
  "/about": "About Us | XAPN Ghana Limited",
  "/services": "Services | XAPN Ghana Limited",
  "/contact": "Contact Us | XAPN Ghana Limited",
};

function scrollToPageTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function scrollToLocation() {
  const hash = decodeURIComponent(window.location.hash.slice(1));

  if (hash) {
    document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  scrollToPageTop();
}

function focusNavigationHeading() {
  const hash = decodeURIComponent(window.location.hash.slice(1));
  const hashTarget = hash ? document.getElementById(hash) : null;
  const hashHeading = hashTarget?.matches("h1, h2, h3")
    ? hashTarget
    : hashTarget?.querySelector<HTMLElement>("h1, h2, h3");
  const heading = hashHeading ?? document.querySelector<HTMLElement>("main h1");

  heading?.focus({ preventScroll: true });
}

function App() {
  const [route, setRoute] = useState<Route>(() => normalizePath(window.location.pathname));
  const [menuOpen, setMenuOpen] = useState(false);
  const currentRouteRef = useRef<Route>(route);
  const shouldFocusHeadingRef = useRef(false);

  currentRouteRef.current = route;

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    const handlePopState = () => {
      const nextRoute = normalizePath(window.location.pathname);
      const routeWillChange = nextRoute !== currentRouteRef.current;

      shouldFocusHeadingRef.current = true;
      setRoute(nextRoute);
      setMenuOpen(false);

      if (!routeWillChange) {
        window.requestAnimationFrame(() => {
          scrollToLocation();
          focusNavigationHeading();
          shouldFocusHeadingRef.current = false;
        });
      }
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    document.title = routeTitles[route];

    const frame = window.requestAnimationFrame(() => {
      scrollToLocation();

      if (shouldFocusHeadingRef.current) {
        focusNavigationHeading();
        shouldFocusHeadingRef.current = false;
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [route]);

  const navigate = (href: Route, options?: NavigateOptions) => {
    const destination = options?.hash ? `${href}#${options.hash}` : href;
    const currentLocation = `${window.location.pathname}${window.location.hash}`;
    const routeWillChange = href !== currentRouteRef.current;

    if (destination !== currentLocation) {
      window.history.pushState({}, "", destination);
    }

    shouldFocusHeadingRef.current = true;
    setRoute(href);
    setMenuOpen(false);

    if (!routeWillChange) {
      window.requestAnimationFrame(() => {
        scrollToLocation();
        focusNavigationHeading();
        shouldFocusHeadingRef.current = false;
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-ink">
      <Header route={route} menuOpen={menuOpen} setMenuOpen={setMenuOpen} navigate={navigate} />
      <main>
        {route === "/" && <HomePage navigate={navigate} />}
        {route === "/about" && <AboutPage navigate={navigate} />}
        {route === "/services" && <ServicesPage navigate={navigate} />}
        {route === "/contact" && <ContactPage />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
