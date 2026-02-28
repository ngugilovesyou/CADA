const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Become a Member", href: "/membership/aspirant" },
  { label: "Our Manifesto", href: "/manifesto" },
  { label: "Ideology", href: "/ideology" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Contact Us", href: "/contacts" },
];

const MapPinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.45 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const ArrowUpRight = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-300">

      {/* Main footer content */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* ── Brand column ── */}
        <div className="lg:col-span-2">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-5">
            {/* Replace this div with <img src="/logo.png" alt="CADA" className="w-10 h-10 rounded-xl" /> */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center shadow-md shrink-0">
              <span className="text-white font-black text-sm">C</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-black text-sm tracking-widest uppercase text-blue-700 dark:text-blue-400">CADA</span>
              <span className="text-[9px] tracking-[0.18em] uppercase text-slate-400 dark:text-slate-500 font-medium">Citizen Alliance for Democratic Affairs</span>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 max-w-xs mb-6">
            Building a social, democratic state where every Kenyan has a prosperous life and a voice in governance.
          </p>

          {/* Social links placeholder */}
          <div className="flex gap-2">
            {["X", "FB", "IG", "YT"].map((s) => (
              <a key={s} href="#"
                className="w-8 h-8 flex items-center justify-center rounded-lg
                  border border-slate-200 dark:border-slate-800
                  text-[10px] font-bold text-slate-400 dark:text-slate-500
                  hover:border-blue-300 dark:hover:border-blue-700
                  hover:text-blue-600 dark:hover:text-blue-400
                  transition-all duration-150">
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* ── Contact column ── */}
        <div>
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-900 dark:text-white mb-5 flex items-center gap-2">
            <span className="w-4 h-px bg-gradient-to-r from-blue-600 to-emerald-500" />
            Contact Us
          </p>

          <ul className="space-y-4">
            {/* Address */}
            <li className="flex items-start gap-2.5 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              <MapPinIcon />
              <span>
                <span className="block font-medium text-slate-700 dark:text-slate-300 mb-0.5">Party Headquarters</span>
                Westpark Suites, 1st Floor,<br />
                Ojijo Road, Parklands, Nairobi<br />
                P.O Box 984 – 00618, Nairobi
              </span>
            </li>

            {/* Phone */}
            <li className="flex items-start gap-2.5 text-sm text-slate-500 dark:text-slate-400">
              <PhoneIcon />
              <span>
                <a href="tel:0722443336"
                  className="block hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  0722 443 336
                </a>
                <a href="tel:0734617603"
                  className="block hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  0734 617 603
                </a>
              </span>
            </li>

            {/* Email */}
            <li className="flex items-start gap-2.5 text-sm">
              <span className="text-slate-400 dark:text-slate-500"><MailIcon /></span>
              <a href="mailto:info@cada.co.ke"
                className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                info@cada.co.ke
              </a>
            </li>
          </ul>
        </div>

        {/* ── Popular Links column ── */}
        <div>
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-900 dark:text-white mb-5 flex items-center gap-2">
            <span className="w-4 h-px bg-gradient-to-r from-blue-600 to-emerald-500" />
            Popular Links
          </p>

          <ul className="space-y-1">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}
                  className="group inline-flex items-center gap-1.5 py-1.5
                    text-sm text-slate-500 dark:text-slate-400
                    hover:text-blue-600 dark:hover:text-blue-400
                    transition-colors duration-150">
                  <span className="w-0 group-hover:w-3 overflow-hidden transition-all duration-200">
                    <ArrowUpRight />
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400 dark:text-slate-500">
            © {new Date().getFullYear()} Citizen Alliance for Democratic Affairs. All rights reserved.
          </p>
          <a href="http://www.cada.co.ke"
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline tracking-wide">
            www.cada.co.ke
          </a>
        </div>
      </div>

    </footer>
  );
}