import { useState, useEffect, useRef } from "react";
import { useTheme } from "../theme/ThemeProvider";

// ─── Icons ─────────────────────────────────────────────────────────────────────
const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const ChevronDown = ({ open }) => (
  <svg
    width="13" height="13" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.22s ease" }}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const MenuIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// ─── Party Logo ────────────────────────────────────────────────────────────────
const PartyLogo = () => (
  <a href="/" className="flex items-center gap-3 flex-shrink-0 no-underline">
    <img src="assets/Logo.jpg" alt="CADA" className="w-10 h-10 rounded-lg" />

  </a>
);

// ─── Nav Links Config ──────────────────────────────────────────────────────────
const NavLinks = [
  { name: "Home", path: "/" },
  { name: "Manifesto", path: "/manifesto" },
  { name: "Ideology", path: "/ideology" },
  {
    name: "Membership",
    path: "/membership",
    sublinks: [
      { name: "Become a Member", path: "/membership" },  
      { name: "Become an Aspirant", path: "/membership/aspirant" },
      { name: "Resignation", path: "/membership/resignation" },
      { name: "Membership Status", path: "/membership/status" },
    ],
  },
  { name: "Events", path: "/events" },
  { name: "Contacts", path: "/contacts" },
];

// ─── Desktop Dropdown ─────────────────────────────────────────────────────────
const DesktopDropdown = ({ sublinks, open }) => (
  <div
    className={`
      absolute top-full left-1/2 -translate-x-1/2 mt-2 w-52 z-50
      bg-white dark:bg-slate-900
      border border-slate-100 dark:border-slate-800
      rounded-xl shadow-xl shadow-slate-200/50 dark:shadow-black/40
      overflow-hidden
      transition-all duration-200 origin-top
      ${open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}
    `}
  >
    <div className="h-0.5 bg-gradient-to-r from-blue-600 to-emerald-500" />
    <div className="py-1.5">
      {sublinks.map((sub) => (
        <a
          key={sub.path}
          href={sub.path}
          className="block px-4 py-2.5 text-sm font-medium no-underline
            text-slate-600 dark:text-slate-300
            hover:text-blue-700 dark:hover:text-blue-400
            hover:bg-blue-50 dark:hover:bg-blue-950/50
            transition-colors duration-150"
        >
          {sub.name}
        </a>
      ))}
    </div>
  </div>
);

// ─── Navbar ────────────────────────────────────────────────────────────────────
const Navbar = () => {
  const { theme, toggle } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const activePath = typeof window !== "undefined" ? window.location.pathname : "/";

  return (
    <nav
      ref={navRef}
      className={`
        fixed top-0 left-0 right-0 z-40
        bg-white/95 dark:bg-slate-950/95 backdrop-blur-md
        border-b border-slate-100 dark:border-slate-800
        transition-shadow duration-300
        ${scrolled ? "shadow-md shadow-slate-200/60 dark:shadow-black/40" : ""}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">

          {/* Logo */}
          <PartyLogo />

          {/* ── Desktop Links ── visible from lg breakpoint ── */}
          <div className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
            {NavLinks.map((link) => {
              const isActive = activePath === link.path;
              const hasDropdown = link.sublinks?.length > 0;
              const isOpen = openDropdown === link.name;

              return (
                <div key={link.name} className="relative">
                  {hasDropdown ? (
                    <button
                      onClick={() => setOpenDropdown(isOpen ? null : link.name)}
                      className={`
                        flex items-center gap-1.5 px-3.5 py-2 rounded-lg
                        text-sm font-semibold tracking-wide
                        border-none cursor-pointer transition-colors duration-150
                        ${isOpen
                          ? "text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50"
                          : "text-slate-600 dark:text-slate-300 bg-transparent hover:text-blue-700 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/70"
                        }
                      `}
                    >
                      {link.name}
                      <ChevronDown open={isOpen} />
                    </button>
                  ) : (
                    <a
                      href={link.path}
                      className={`
                        relative flex items-center px-3.5 py-2 rounded-lg
                        text-sm font-semibold tracking-wide no-underline
                        transition-colors duration-150
                        ${isActive
                          ? "text-blue-700 dark:text-blue-400"
                          : "text-slate-600 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800/70"
                        }
                      `}
                    >
                      {link.name}
                      {isActive && (
                        <span className="absolute bottom-1 left-3.5 right-3.5 h-0.5 rounded-full bg-gradient-to-r from-blue-600 to-emerald-500" />
                      )}
                    </a>
                  )}

                  {hasDropdown && <DesktopDropdown sublinks={link.sublinks} open={isOpen} />}
                </div>
              );
            })}
          </div>

          {/* ── Right Controls ── */}
          <div className="flex items-center gap-2 flex-shrink-0">

            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="
                w-9 h-9 flex items-center justify-center rounded-lg
                bg-transparent border-none cursor-pointer
                text-slate-500 dark:text-slate-400
                hover:text-blue-700 dark:hover:text-blue-400
                hover:bg-slate-100 dark:hover:bg-slate-800
                transition-all duration-150
              "
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>

            {/* Join CTA — desktop */}
            <a
              href="/membership/aspirant"
              className="
                hidden lg:inline-flex items-center
                px-4 py-2 rounded-lg
                text-sm font-bold tracking-wide text-white no-underline
                bg-gradient-to-r from-blue-600 to-emerald-500
                hover:from-blue-700 hover:to-emerald-600
                shadow-sm hover:shadow-md shadow-blue-200 dark:shadow-blue-900/40
                transition-all duration-200 active:scale-95
              "
            >
              Join CADA
            </a>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
              className="
                lg:hidden w-9 h-9 flex items-center justify-center rounded-lg
                bg-transparent border-none cursor-pointer
                text-slate-600 dark:text-slate-300
                hover:bg-slate-100 dark:hover:bg-slate-800
                transition-colors duration-150
              "
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`
          lg:hidden overflow-hidden
          bg-white dark:bg-slate-950
          border-t border-slate-100 dark:border-slate-800
          transition-all duration-300 ease-in-out
          ${mobileOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-4 pt-3 pb-5 flex flex-col gap-0.5">
          {NavLinks.map((link) => {
            const hasDropdown = link.sublinks?.length > 0;
            const isExpanded = mobileExpanded === link.name;
            const isActive = activePath === link.path;

            return (
              <div key={link.name}>
                {hasDropdown ? (
                  <>
                    <button
                      onClick={() => setMobileExpanded(isExpanded ? null : link.name)}
                      className="
                        w-full flex items-center justify-between
                        px-3 py-3 rounded-lg
                        text-sm font-semibold
                        bg-transparent border-none cursor-pointer
                        text-slate-700 dark:text-slate-200
                        hover:bg-slate-50 dark:hover:bg-slate-800/60
                        transition-colors duration-150
                      "
                    >
                      {link.name}
                      <ChevronDown open={isExpanded} />
                    </button>

                    <div className={`overflow-hidden transition-all duration-200 ${isExpanded ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
                      <div className="ml-3 pl-3 mt-0.5 mb-1 border-l-2 border-blue-400/40 flex flex-col gap-0.5">
                        {link.sublinks.map((sub) => (
                          <a
                            key={sub.path}
                            href={sub.path}
                            className="
                              block px-3 py-2.5 rounded-lg
                              text-sm font-medium no-underline
                              text-slate-500 dark:text-slate-400
                              hover:text-blue-700 dark:hover:text-blue-400
                              hover:bg-blue-50 dark:hover:bg-blue-950/30
                              transition-colors duration-150
                            "
                            onClick={() => setMobileOpen(false)}
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <a
                    href={link.path}
                    className={`
                      flex items-center justify-between
                      px-3 py-3 rounded-lg
                      text-sm font-semibold no-underline
                      transition-colors duration-150
                      ${isActive
                        ? "text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40"
                        : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/60"
                      }
                    `}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-600 to-emerald-500" />
                    )}
                  </a>
                )}
              </div>
            );
          })}

          {/* Mobile CTA */}
          <div className="pt-3">
            <a
              href="/membership/aspirant"
              className="
                flex items-center justify-center w-full
                py-3 rounded-xl
                text-sm font-bold tracking-wide text-white no-underline
                bg-gradient-to-r from-blue-600 to-emerald-500
                hover:from-blue-700 hover:to-emerald-600
                shadow-md shadow-blue-200/40 dark:shadow-blue-900/30
                transition-all duration-200 active:scale-95
              "
              onClick={() => setMobileOpen(false)}
            >
              Join CADA
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;