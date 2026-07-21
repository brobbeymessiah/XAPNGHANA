import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { AppLink } from "./AppLink";
import { navItems } from "../data/navigation";
import { services } from "../data/services";
import type { Navigate, Route } from "../types/navigation";

type HeaderProps = {
  route: Route;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  navigate: Navigate;
};

export function Header({ route, menuOpen, setMenuOpen, navigate }: HeaderProps) {
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileServiceId, setMobileServiceId] = useState<string | null>(null);
  const [activeServiceId, setActiveServiceId] = useState(services[0].id);
  const desktopServicesRef = useRef<HTMLDivElement>(null);
  const mobileServicesRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavigationRef = useRef<HTMLDivElement>(null);
  const isServicesActive = route === "/services";
  const isDesktopServicesHighlighted = isServicesActive || desktopServicesOpen;
  const isMobileServicesHighlighted = isServicesActive || mobileServicesOpen;
  const activeService =
    services.find((service) => service.id === activeServiceId) ?? services[0];

  useEffect(() => {
    const handleOutsideMouseDown = (event: MouseEvent) => {
      const target = event.target;

      if (!(target instanceof Node)) return;

      if (!desktopServicesRef.current?.contains(target)) {
        setDesktopServicesOpen(false);
      }

      if (!mobileServicesRef.current?.contains(target)) {
        setMobileServicesOpen(false);
        setMobileServiceId(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideMouseDown);

    return () => document.removeEventListener("mousedown", handleOutsideMouseDown);
  }, []);

  useEffect(() => {
    const desktopBreakpoint = window.matchMedia("(min-width: 1024px)");
    const closeServicesMenus = () => {
      setDesktopServicesOpen(false);
      setMobileServicesOpen(false);
      setMobileServiceId(null);
      setMenuOpen(false);
    };

    desktopBreakpoint.addEventListener("change", closeServicesMenus);

    return () => desktopBreakpoint.removeEventListener("change", closeServicesMenus);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      setMobileServicesOpen(false);
      setMobileServiceId(null);
    }
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const getFocusableElements = () => {
      return Array.from(
        mobileNavigationRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      ).filter((element) => element.getClientRects().length > 0);
    };

    const focusFrame = window.requestAnimationFrame(() => {
      mobileNavigationRef.current?.querySelector<HTMLElement>("a[href]")?.focus();
    });

    const handleMenuKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMenuOpen(false);
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = getFocusableElements();
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) return;

      if (!focusableElements.includes(document.activeElement as HTMLElement)) {
        event.preventDefault();
        (event.shiftKey ? lastElement : firstElement).focus();
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleMenuKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleMenuKeyDown);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;

      if (mobileMenuButtonRef.current?.getClientRects().length) {
        mobileMenuButtonRef.current.focus();
      }
    };
  }, [menuOpen, setMenuOpen]);

  const closeServicesForNavigation = () => {
    setDesktopServicesOpen(false);
    setMobileServicesOpen(false);
    setMobileServiceId(null);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 text-white">
        <div className="container-x flex h-20 items-center justify-between">
          <AppLink
            navigate={navigate}
            href="/"
            onNavigate={closeServicesForNavigation}
            className="flex items-center gap-3 text-left"
            aria-label="Go to home"
          >
            <img
              src="/assets/images/xapn-navbar.png"
              alt="XAPN Ghana Limited"
              className="h-12 w-auto object-contain"
            />
          </AppLink>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
            {navItems.map((item) =>
              item.href === "/services" ? (
                <div
                  key={item.href}
                  ref={desktopServicesRef}
                  className="relative"
                  onKeyDown={(event) => {
                    if (event.key === "Escape") {
                      setDesktopServicesOpen(false);
                    }
                  }}
                >
                  <button
                    type="button"
                    className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-bold transition ${
                      isDesktopServicesHighlighted
                        ? "text-brand-dark"
                        : "text-brand hover:text-brand-dark"
                    }`}
                    onClick={() => setDesktopServicesOpen((open) => !open)}
                    aria-expanded={desktopServicesOpen}
                    aria-haspopup="menu"
                    aria-controls="desktop-services-menu"
                  >
                    {item.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${desktopServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {desktopServicesOpen && (
                    <div
                      id="desktop-services-menu"
                      className="fixed left-1/2 top-20 z-50 w-[min(72rem,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-lg border border-ink/10 bg-white text-ink shadow-soft"
                    >
                      <div className="flex items-center justify-between border-b border-ink/10 px-5 py-3">
                        <p className="text-sm font-black uppercase text-ink">Services</p>
                        <AppLink
                          navigate={navigate}
                          href="/services"
                          onNavigate={closeServicesForNavigation}
                          className="inline-flex items-center gap-1 text-sm font-bold text-brand-dark transition hover:text-ink"
                        >
                          View all services <ChevronRight size={16} />
                        </AppLink>
                      </div>

                      <div className="grid grid-cols-[15rem_minmax(0,1fr)]">
                        <div className="border-r border-ink/10 bg-mist/60 p-2">
                          {services.map((service) => (
                            <button
                              key={service.id}
                              type="button"
                              className={`flex w-full items-center justify-between gap-3 rounded-md px-3 py-3 text-left text-sm font-bold leading-5 transition ${
                                activeService.id === service.id
                                  ? "bg-white text-ink shadow-sm"
                                  : "text-ink/65 hover:bg-white/70 hover:text-ink"
                              }`}
                              onClick={() => setActiveServiceId(service.id)}
                              onMouseEnter={() => setActiveServiceId(service.id)}
                              onFocus={() => setActiveServiceId(service.id)}
                            >
                              <span>{service.title}</span>
                              <ChevronRight size={16} className="shrink-0" />
                            </button>
                          ))}
                        </div>

                        <div className="min-w-0 p-4">
                          <div className="mb-4 flex items-center justify-between gap-4">
                            <h3 className="text-base font-black text-ink">{activeService.title}</h3>
                            <AppLink
                              navigate={navigate}
                              href="/services"
                              hash={activeService.id}
                              onNavigate={closeServicesForNavigation}
                              className="shrink-0 text-sm font-bold text-brand-dark transition hover:text-ink"
                            >
                              View service
                            </AppLink>
                          </div>

                          <div className="grid gap-4 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                            <AppLink
                              navigate={navigate}
                              href="/services"
                              hash={activeService.id}
                              onNavigate={closeServicesForNavigation}
                              className="group overflow-hidden rounded-md border border-ink/10 bg-mist"
                            >
                              <img
                                src={activeService.image}
                                alt={activeService.title}
                                className="aspect-[16/10] w-full object-cover object-center transition duration-500 group-hover:scale-105"
                              />
                            </AppLink>
                            <div className="min-w-0">
                              <p className="text-sm leading-6 text-ink/70">{activeService.summary}</p>
                              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                                {activeService.items.slice(0, 6).map((item) => (
                                  <li key={item} className="flex gap-2 text-xs font-bold leading-5 text-ink">
                                    <ChevronRight size={14} className="mt-0.5 shrink-0 text-brand-dark" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <AppLink
                  key={item.href}
                  navigate={navigate}
                  href={item.href}
                  onNavigate={closeServicesForNavigation}
                  aria-current={route === item.href ? "page" : undefined}
                  className={`rounded-md px-4 py-2 text-sm font-bold transition ${
                    route === item.href && !desktopServicesOpen
                      ? "text-brand-dark"
                      : "text-brand hover:text-brand-dark"
                  }`}
                >
                  {item.label}
                </AppLink>
              ),
            )}
          </nav>

          <button
            ref={mobileMenuButtonRef}
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
          <div className="fixed inset-x-0 bottom-0 top-20 z-40 lg:hidden">
            <div
              className="absolute inset-0 bg-ink/45 backdrop-blur-sm"
              aria-hidden="true"
              onClick={() => setMenuOpen(false)}
            />
            <div
              ref={mobileNavigationRef}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="animate-fade-up absolute right-0 top-0 max-h-[calc(100vh-5rem)] w-full max-w-sm overflow-y-auto rounded-bl-lg border-t border-ink/10 bg-white p-5 text-ink shadow-soft"
            >
              <nav id="mobile-navigation-dropdown" className="flex flex-col gap-2" aria-label="Mobile navigation">
                {navItems.map((item) =>
                  item.href === "/services" ? (
                    <div key={item.href} ref={mobileServicesRef} className="rounded-md bg-brand/5 p-1">
                      <div className="flex items-center gap-1">
                        <AppLink
                          navigate={navigate}
                          href="/services"
                          onNavigate={closeServicesForNavigation}
                          aria-current={isServicesActive ? "page" : undefined}
                          className={`min-w-0 flex-1 rounded-md px-3 py-3 text-left text-sm font-bold transition ${
                            isMobileServicesHighlighted ? "bg-brand/15 text-ink" : "text-ink/75"
                          }`}
                        >
                          {item.label}
                        </AppLink>
                        <button
                          type="button"
                          className="grid h-11 w-11 shrink-0 place-items-center rounded-md text-ink/75 transition hover:bg-brand/10 hover:text-ink"
                          onClick={() => setMobileServicesOpen((open) => !open)}
                          aria-label={mobileServicesOpen ? "Hide service preview" : "Show service preview"}
                          aria-expanded={mobileServicesOpen}
                          aria-controls="mobile-services-preview"
                        >
                          <ChevronDown
                            size={18}
                            className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                      </div>

                      {mobileServicesOpen && (
                        <div id="mobile-services-preview" className="grid gap-2 px-1 pb-1 pt-2">
                          <AppLink
                            navigate={navigate}
                            href="/services"
                            onNavigate={closeServicesForNavigation}
                            className="rounded-md px-3 py-2 text-left text-sm font-bold text-ink transition hover:bg-white"
                          >
                            View all services
                          </AppLink>
                          {services.map((service) => {
                            const isOpen = mobileServiceId === service.id;

                            return (
                              <div key={service.id} className="overflow-hidden rounded-md border border-ink/10 bg-white">
                                <button
                                  type="button"
                                  className="flex w-full items-center justify-between gap-3 px-3 py-3 text-left text-sm font-bold text-ink"
                                  onClick={() => setMobileServiceId(isOpen ? null : service.id)}
                                  aria-expanded={isOpen}
                                >
                                  <span>{service.title}</span>
                                  <ChevronDown
                                    size={16}
                                    className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                                  />
                                </button>

                                {isOpen && (
                                  <div className="border-t border-ink/10 bg-mist/50 p-2">
                                    <img
                                      src={service.image}
                                      alt={service.title}
                                      className="aspect-[16/10] w-full rounded-md object-cover object-center"
                                    />
                                    <p className="px-1 pt-3 text-xs leading-5 text-ink/70">
                                      {service.summary}
                                    </p>
                                    <AppLink
                                      navigate={navigate}
                                      href="/services"
                                      hash={service.id}
                                      onNavigate={closeServicesForNavigation}
                                      className="mt-2 inline-flex items-center gap-1 rounded-md px-1 py-2 text-xs font-black text-brand-dark"
                                    >
                                      View service <ChevronRight size={14} />
                                    </AppLink>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <AppLink
                      key={item.href}
                      navigate={navigate}
                      href={item.href}
                      onNavigate={closeServicesForNavigation}
                      aria-current={route === item.href ? "page" : undefined}
                      className={`rounded-md px-4 py-3 text-left text-sm font-bold transition ${
                        route === item.href
                          ? "bg-brand/15 text-ink"
                          : "text-ink/75 hover:bg-brand/10 hover:text-ink"
                      }`}
                    >
                      {item.label}
                    </AppLink>
                  ),
                )}
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
