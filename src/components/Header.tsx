import { Menu, X } from "lucide-react";
import { navItems } from "../data/navigation";
import type { Navigate, Route } from "../types/navigation";

type HeaderProps = {
  route: Route;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  navigate: Navigate;
};

export function Header({ route, menuOpen, setMenuOpen, navigate }: HeaderProps) {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-white/94 backdrop-blur">
        <div className="container-x flex h-20 items-center justify-between">
          <button
            className="flex items-center gap-3 text-left"
            onClick={() => navigate("/")}
            aria-label="Go to home"
          >
            <img
              src="/assets/images/xapn-logo.jpg"
              alt="XAPN Ghana Limited"
              className="h-12 w-auto object-contain"
            />
          </button>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.href}
                className={`rounded-md px-4 py-2 text-sm font-bold transition ${
                  route === item.href
                    ? "bg-ink text-white"
                    : "text-steel hover:bg-mist hover:text-ink"
                }`}
                onClick={() => navigate(item.href)}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className="grid place-items-center p-2 text-ink lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-controls="mobile-navigation-dropdown"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {menuOpen && (
          <nav
            id="mobile-navigation-dropdown"
            className="animate-fade-up absolute inset-x-0 top-full border-t border-ink/10 bg-white px-5 py-4 shadow-soft lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  className={`rounded-md px-4 py-3 text-left text-sm font-bold transition ${
                    route === item.href ? "bg-ink text-white" : "bg-mist text-ink hover:bg-ink/10"
                  }`}
                  onClick={() => navigate(item.href)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </header>
      <div className="h-20" aria-hidden="true" />
    </>
  );
}
