import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Craft", href: "/craft" },
  { label: "Technology", href: "/technology" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Layout({ children, fillContent = true }: { children: React.ReactNode; fillContent?: boolean }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, navigate] = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const update = () => {
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          "--navbar-height",
          `${headerRef.current.offsetHeight}px`
        );
      }
    };
    update();
    const ro = new ResizeObserver(update);
    if (headerRef.current) ro.observe(headerRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-[var(--brass)] selection:text-black">
      <header ref={headerRef} className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <nav className="relative mx-auto flex max-w-[1500px] items-center px-5 py-5 md:px-10">
          <a href="/" className="group inline-flex items-center gap-3" aria-label="TT Marble home" onClick={(e) => { e.preventDefault(); navigate("/"); }}>
            <span className="flex h-10 w-10 items-center justify-center border border-[var(--brass)]/60 bg-white/5 font-serif text-lg text-[var(--ivory)] transition duration-500 group-hover:bg-[var(--brass)] group-hover:text-black">
              TT
            </span>
            <span className="leading-none">
              <span className="block font-serif text-lg tracking-[0.2em] text-[var(--ivory)]">MARBLE</span>
              <span className="mt-1 block text-[0.62rem] uppercase tracking-[0.45em] text-[var(--brass)]">Fabrication Atelier</span>
            </span>
          </a>

          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-7 text-[0.72rem] uppercase tracking-[0.28em] text-white/70 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); navigate(item.href); }}
                className={`nav-link${location === item.href ? " !text-[var(--brass)]" : ""}`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-3">
            <a
              href="/contact"
              onClick={(e) => { e.preventDefault(); navigate("/contact"); }}
              className="hidden border border-[var(--brass)]/70 px-5 py-3 text-[0.68rem] uppercase tracking-[0.28em] text-[var(--ivory)] transition duration-500 hover:bg-[var(--brass)] hover:text-black lg:inline-flex"
            >
              Enquire
            </a>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="inline-flex h-11 w-11 items-center justify-center border border-[var(--brass)]/65 bg-black/20 text-[var(--ivory)] transition duration-500 hover:bg-[var(--brass)] hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--brass)] lg:hidden"
              aria-label="Open mobile navigation"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="fixed inset-0 z-[70] overflow-hidden bg-[#090806] text-[var(--ivory)] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <div className="absolute inset-0 marble-line-field opacity-30" />
            <div className="absolute -right-20 top-0 h-full w-44 bg-[var(--brass)]/18 blur-2xl" />
            <div className="relative flex min-h-screen flex-col">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
                <a
                  href="/"
                  onClick={(e) => { e.preventDefault(); closeMobileMenu(); navigate("/"); }}
                  className="group inline-flex items-center gap-3"
                  aria-label="TT Marble home"
                >
                  <span className="flex h-10 w-10 items-center justify-center border border-[var(--brass)]/60 bg-white/5 font-serif text-lg text-[var(--ivory)] transition duration-500 group-hover:bg-[var(--brass)] group-hover:text-black">
                    TT
                  </span>
                  <span className="leading-none">
                    <span className="block font-serif text-lg tracking-[0.2em] text-[var(--ivory)]">MARBLE</span>
                    <span className="mt-1 block text-[0.62rem] uppercase tracking-[0.45em] text-[var(--brass)]">Fabrication Atelier</span>
                  </span>
                </a>
                <button
                  type="button"
                  onClick={closeMobileMenu}
                  className="inline-flex h-11 w-11 items-center justify-center border border-[var(--brass)]/65 bg-black/20 text-[var(--ivory)] transition duration-500 hover:bg-[var(--brass)] hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--brass)]"
                  aria-label="Close mobile navigation"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="relative z-10 flex flex-1 flex-col justify-center px-8 py-10" aria-label="Mobile primary navigation">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); closeMobileMenu(); navigate(item.href); }}
                    className="group flex items-center justify-between border-t border-white/10 py-5 font-serif text-[clamp(2.2rem,11vw,4rem)] leading-none tracking-[-0.07em] text-[var(--ivory)] transition-colors duration-500 last:border-b hover:text-[var(--brass)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--brass)]"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.05 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="h-6 w-6 text-[var(--brass)] transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </motion.a>
                ))}
              </nav>

              <div className="relative z-10 px-5 pb-8">
                <a
                  href="/contact"
                  onClick={(e) => { e.preventDefault(); closeMobileMenu(); navigate("/contact"); }}
                  className="inline-flex w-full items-center justify-center border border-[var(--brass)]/75 px-7 py-5 text-xs uppercase tracking-[0.3em] text-[var(--brass)] transition duration-500 hover:bg-[var(--brass)] hover:text-black focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--brass)]"
                >
                  Start an enquiry
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={fillContent ? "flex min-h-0 flex-1 flex-col" : undefined} style={{ paddingTop: "var(--navbar-height, 80px)" }}>{children}</div>

      <footer className="border-t border-white/10 bg-black">
        <div className="mx-auto flex max-w-[1500px] items-start justify-between gap-4 px-5 py-4 text-sm text-white/48 md:px-10">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border border-[var(--brass)]/60 bg-white/5 font-serif text-lg text-[var(--ivory)]">
              TT
            </span>
            <p className="hidden text-[0.62rem] uppercase tracking-[0.45em] text-[var(--brass)] lg:block">Luxury marble — sourced, crafted &amp; installed.</p>
          </div>
          <div className="ml-auto flex flex-col items-end gap-1 text-right">
            <p className="text-[0.62rem] uppercase tracking-[0.45em] text-[var(--brass)]">Mobile: +61 402 775 678</p>
            <p className="text-[0.62rem] uppercase tracking-[0.45em] text-[var(--brass)]">Email: TBC</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
