import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { normalizePath } from "./data/navigation";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { SolutionsPage } from "./pages/SolutionsPage";
import type { Route } from "./types/navigation";

function App() {
  const [route, setRoute] = useState<Route>(() => normalizePath(window.location.pathname));
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handlePopState = () => setRoute(normalizePath(window.location.pathname));
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (href: Route) => {
    window.history.pushState({}, "", href);
    setRoute(href);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
