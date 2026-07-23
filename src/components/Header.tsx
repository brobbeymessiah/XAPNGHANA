import { useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { AppLink } from "./AppLink";
import { navItems } from "../data/navigation";
import type { Navigate, Route } from "../types/navigation";

type HeaderProps = {
  route: Route;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  navigate: Navigate;
};

export function Header({ route, menuOpen, setMenuOpen, navigate }: HeaderProps) {
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavigationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const desktopBreakpoint = window.matchMedia("(min-width: 1024px)");
    const closeMenu = () => setMenuOpen(false);

    desktopBreakpoint.addEventListener("change", closeMenu);

    return () => desktopBreakpoint.removeEventListener("change", closeMenu);
  }, [setMenuOpen]);

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

  const closeNavigation = () => setMenuOpen(false);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50 text-white">
        <div className="container-x flex h-20 items-center justify-between">
          <AppLink
            navigate={navigate}
            href="/"
            onNavigate={closeNavigation}
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
            {navItems.map((item) => (
              <AppLink
                key={item.href}
                navigate={navigate}
                href={item.href}
                onNavigate={closeNavigation}
                aria-current={route === item.href ? "page" : undefined}
                className={`rounded-md px-4 py-2 text-sm font-bold transition ${
                  route === item.href
                    ? "text-brand-dark"
                    : "text-brand hover:text-brand-dark"
                }`}
              >
                {item.label}
              </AppLink>
            ))}
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
                {navItems.map((item) => (
                  <AppLink
                    key={item.href}
                    navigate={navigate}
                    href={item.href}
                    onNavigate={closeNavigation}
                    aria-current={route === item.href ? "page" : undefined}
                    className={`rounded-md px-4 py-3 text-left text-sm font-bold transition ${
                      route === item.href
                        ? "bg-brand/15 text-ink"
                        : "text-ink/75 hover:bg-brand/10 hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </AppLink>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
