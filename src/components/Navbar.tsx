import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const desktopViewport = window.matchMedia("(min-width: 768px)");

    const closeMenuOnDesktop = () => {
      if (desktopViewport.matches) {
        setMenuOpen(false);
      }
    };

    const closeMenuOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    closeMenuOnDesktop();
    desktopViewport.addEventListener("change", closeMenuOnDesktop);
    window.addEventListener("keydown", closeMenuOnEscape);

    return () => {
      desktopViewport.removeEventListener("change", closeMenuOnDesktop);
      window.removeEventListener("keydown", closeMenuOnEscape);
    };
  }, []);

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-[var(--gold)]/25 bg-[var(--ink)]/92 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-16"
        aria-label="Primary navigation"
      >
        <a
          href="#top"
          className="font-serif text-xl tracking-[0.18em] text-[var(--gold)] transition-colors hover:text-[var(--ivory)] sm:text-2xl sm:tracking-[0.24em]"
          onClick={() => setMenuOpen(false)}
        >
          PARIHA PEDDA
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link text-sm text-[var(--ivory)]/80"
            >
              {item.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center text-[var(--ivory)] md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {menuOpen ? (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full min-h-[calc(100dvh-5rem)] overflow-y-auto border-b border-[var(--gold)]/25 bg-[var(--ink)] px-6 shadow-2xl md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex min-h-full flex-col justify-between py-12">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-white/10 py-5 font-serif text-5xl text-[var(--ivory)] transition-colors hover:text-[var(--gold)]"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <p className="text-sm leading-relaxed text-[var(--ivory)]/50">
              Fashion design · Art direction · Styling
            </p>
          </div>
        </div>
      ) : null}
    </header>
  );
};
