import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { normalizePath } from "./data/navigation";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { SolutionsPage } from "./pages/SolutionsPage";
import type { NavigateOptions, Route } from "./types/navigation";

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

function App() {
  const [route, setRoute] = useState<Route>(() => normalizePath(window.location.pathname));
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    const handlePopState = () => {
      setRoute(normalizePath(window.location.pathname));
      window.requestAnimationFrame(scrollToLocation);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(scrollToLocation);
    return () => window.cancelAnimationFrame(frame);
  }, [route]);

  const navigate = (href: Route, options?: NavigateOptions) => {
    const destination = options?.hash ? `${href}#${options.hash}` : href;
    const currentLocation = `${window.location.pathname}${window.location.hash}`;

    if (destination !== currentLocation) {
      window.history.pushState({}, "", destination);
    }
    setRoute(href);
    setMenuOpen(false);
    window.requestAnimationFrame(scrollToLocation);
  };

  return (
    <div className="min-h-screen bg-white text-ink">
      <Header route={route} menuOpen={menuOpen} setMenuOpen={setMenuOpen} navigate={navigate} />
      <main>
        {route === "/" && <HomePage navigate={navigate} />}
        {route === "/about" && <AboutPage navigate={navigate} />}
        {route === "/our-solutions" && <SolutionsPage navigate={navigate} />}
        {route === "/contact" && <ContactPage />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
