import { useState } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { navItems } from "../data/navigation";
import { solutions } from "../data/solutions";
import type { Navigate, Route } from "../types/navigation";

type HeaderProps = {
  route: Route;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  navigate: Navigate;
};

export function Header({ route, menuOpen, setMenuOpen, navigate }: HeaderProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeServiceId, setActiveServiceId] = useState(solutions[0].id);
  const [mobileServiceId, setMobileServiceId] = useState<string | null>(null);
  const isServicesActive = route === "/our-solutions";
  const activeService =
    solutions.find((solution) => solution.id === activeServiceId) ?? solutions[0];

  const handleNavigate = (href: Route) => {
    setServicesOpen(false);
    setMobileServiceId(null);
    navigate(href);
  };

  const handleServiceNavigate = (id: string) => {
    setServicesOpen(false);
    setMobileServiceId(null);
    navigate("/our-solutions", { hash: id });
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 text-white">
        <div className="container-x flex h-20 items-center justify-between">
          <button
            className="flex items-center gap-3 text-left"
            onClick={() => navigate("/")}
            aria-label="Go to home"
          >
            <img
              src="/assets/images/xapn-navbar.png"
              alt="XAPN Ghana Limited"
              className="h-12 w-auto object-contain"
            />
          </button>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navItems.map((item) =>
              item.href === "/our-solutions" ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    type="button"
                    className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-bold transition ${
                      isServicesActive
                        ? "bg-[#F7E5B3]/45 text-ink"
                        : "text-ink/75 hover:bg-[#F7E5B3]/35 hover:text-ink"
                    }`}
                    onClick={() => setServicesOpen((open) => !open)}
                    aria-expanded={servicesOpen}
                    aria-haspopup="menu"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {servicesOpen && (
                    <div className="fixed left-1/2 top-20 z-50 w-[min(72rem,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-lg border border-ink/10 bg-white text-ink shadow-soft">
                      <div className="flex items-center justify-between border-b border-ink/10 px-5 py-3">
                        <p className="text-sm font-black uppercase text-ink">Services</p>
                        <button
                          type="button"
                          className="inline-flex items-center gap-1 text-sm font-bold text-brand-dark transition hover:text-ink"
                          onClick={() => handleNavigate("/our-solutions")}
                        >
                          View all services <ChevronRight size={16} />
                        </button>
                      </div>

                      <div className="grid grid-cols-[15rem_minmax(0,1fr)]">
                        <div className="border-r border-ink/10 bg-mist/60 p-2">
                          {solutions.map((solution) => (
                            <button
                              key={solution.id}
                              type="button"
                              className={`flex w-full items-center justify-between gap-3 rounded-md px-3 py-3 text-left text-sm font-bold leading-5 transition ${
                                activeService.id === solution.id
                                  ? "bg-white text-ink shadow-sm"
                                  : "text-ink/65 hover:bg-white/70 hover:text-ink"
                              }`}
                              onClick={() => setActiveServiceId(solution.id)}
                              onMouseEnter={() => setActiveServiceId(solution.id)}
                              onFocus={() => setActiveServiceId(solution.id)}
                            >
                              <span>{solution.title}</span>
                              <ChevronRight size={16} className="shrink-0" />
                            </button>
                          ))}
                        </div>

                        <div className="min-w-0 p-4">
                          <div className="mb-4 flex items-center justify-between gap-4">
                            <h3 className="text-base font-black text-ink">{activeService.title}</h3>
                            <button
                              type="button"
                              className="shrink-0 text-sm font-bold text-brand-dark transition hover:text-ink"
                              onClick={() => handleServiceNavigate(activeService.id)}
                            >
                              View service
                            </button>
                          </div>

                          <div className="grid grid-cols-5 gap-3" role="menu">
                            {activeService.showcaseItems.map((item) => (
                              <button
                                key={item.title}
                                type="button"
                                role="menuitem"
                                className="group min-w-0 overflow-hidden rounded-md border border-ink/10 bg-white text-left transition hover:border-brand hover:shadow-sm"
                                onClick={() => handleServiceNavigate(activeService.id)}
                              >
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="h-28 w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                                <span className="block min-h-12 px-2 py-2 text-xs font-bold leading-4 text-ink">
                                  {item.title}
                                </span>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item.href}
                  className={`rounded-md px-4 py-2 text-sm font-bold transition ${
                    route === item.href
                      ? "bg-[#F7E5B3]/45 text-ink"
                      : "text-ink/75 hover:bg-[#F7E5B3]/35 hover:text-ink"
                  }`}
                  onClick={() => handleNavigate(item.href)}
                >
                  {item.label}
                </button>
              ),
            )}
          </nav>

          <button
            className="grid place-items-center p-2 text-brand lg:hidden"
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
            className="animate-fade-up absolute inset-x-0 top-full border-t border-ink/10 bg-white/95 px-5 py-4 shadow-soft backdrop-blur lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="mx-auto flex max-h-[calc(100vh-7rem)] max-w-7xl flex-col gap-2 overflow-y-auto">
              {navItems.map((item) =>
                item.href === "/our-solutions" ? (
                  <div key={item.href} className="rounded-md bg-brand/5 p-1">
                    <button
                      type="button"
                      className={`flex w-full items-center justify-between rounded-md px-3 py-3 text-left text-sm font-bold transition ${
                        isServicesActive ? "bg-brand/15 text-ink" : "text-ink/75"
                      }`}
                      onClick={() => setServicesOpen((open) => !open)}
                      aria-expanded={servicesOpen}
                    >
                      {item.label}
                      <ChevronDown
                        size={17}
                        className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {servicesOpen && (
                      <div className="grid gap-2 px-1 pb-1 pt-2">
                        <button
                          type="button"
                          className="rounded-md px-3 py-2 text-left text-sm font-bold text-ink hover:bg-white"
                          onClick={() => handleNavigate("/our-solutions")}
                        >
                          View all services
                        </button>
                        {solutions.map((solution) => {
                          const isOpen = mobileServiceId === solution.id;

                          return (
                            <div key={solution.id} className="overflow-hidden rounded-md border border-ink/10 bg-white">
                              <button
                                type="button"
                                className="flex w-full items-center justify-between gap-3 px-3 py-3 text-left text-sm font-bold text-ink"
                                onClick={() => setMobileServiceId(isOpen ? null : solution.id)}
                                aria-expanded={isOpen}
                              >
                                <span>{solution.title}</span>
                                <ChevronDown
                                  size={16}
                                  className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                                />
                              </button>

                              {isOpen && (
                                <div className="grid grid-cols-2 gap-2 border-t border-ink/10 bg-mist/50 p-2">
                                  {solution.showcaseItems.map((item) => (
                                    <button
                                      key={item.title}
                                      type="button"
                                      className="overflow-hidden rounded-md bg-white text-left shadow-sm"
                                      onClick={() => handleServiceNavigate(solution.id)}
                                    >
                                      <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-24 w-full object-cover"
                                      />
                                      <span className="block px-2 py-2 text-xs font-bold leading-4 text-ink">
                                        {item.title}
                                      </span>
                                    </button>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={item.href}
                    className={`rounded-md px-4 py-3 text-left text-sm font-bold transition ${
                      route === item.href
                        ? "bg-brand/15 text-ink"
                        : "text-ink/75 hover:bg-brand/10 hover:text-ink"
                    }`}
                    onClick={() => handleNavigate(item.href)}
                  >
                    {item.label}
                  </button>
                ),
              )}
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
