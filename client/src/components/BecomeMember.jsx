import Footer from "./Footer";
import Navbar from "./Navbar";
import { Helmet } from "react-helmet-async";
const tiers = [
  {
    name: "Whisper",
    contribution: 20,
    audience: "Students / Entry-level / Supporters",
    theme: "A quiet beginning where awareness starts",
  },
  {
    name: "Echo",
    contribution: 50,
    audience: "Emerging voices in the movement",
    theme: "Amplifying the first signal of support",
  },
  {
    name: "Pulse",
    contribution: 100,
    audience: "Active observers and sharers",
    theme: "A steady rhythm of growing engagement",
  },
  {
    name: "Rise",
    contribution: 250,
    audience: "Community supporters / Mobilizers",
    theme: "The stage where support gains momentum",
  },
  {
    name: "Orbit",
    contribution: 1000,
    audience: "Professionals, Diaspora, High-level Backers",
    theme: "A force moving others around the cause",
  },
  {
    name: "Nova",
    contribution: 5000,
    audience: "Visionaries, Founders, Major Donors",
    theme: "A burst of brilliance, leaders of change",
  },
];

export default function BecomeMember() {
  return (
    <section className="border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 mt-5">
     
  
        {/* ── Header ── */}
        <div className="max-w-2xl mb-14">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="w-4 h-px bg-gradient-to-r from-blue-600 to-emerald-500" />
            Membership
          </p>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-5">
            Become a Member of CADA
          </h2>

          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
            CADA Party offers a six-tier membership model designed to accommodate
            different levels of engagement and support — from awareness to
            strategic leadership.
          </p>
        </div>

        {/* ── Tiers Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="group relative rounded-2xl p-6 border
                border-slate-200 dark:border-slate-800
                bg-white dark:bg-slate-900
                hover:border-blue-300 dark:hover:border-blue-700
                transition-all duration-200"
            >
              {/* Gradient Accent */}
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-blue-600 to-emerald-500" />

              <div className="mb-4">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {tier.name}
                </h3>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                  KES {tier.contribution.toLocaleString()}
                </p>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  Target:
                </span>{" "}
                {tier.audience}
              </p>

              <p className="text-sm italic text-slate-500 dark:text-slate-500">
                {tier.theme}
              </p>
            </div>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="mt-16 flex justify-center">
          <a
            href="/membership/register"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl
              bg-gradient-to-r from-blue-600 to-emerald-500
              text-white font-semibold text-sm tracking-wide
              shadow-md hover:shadow-lg
              hover:scale-[1.02] active:scale-[0.98]
              transition-all duration-200"
          >
            Become a Member
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </div>
      </div>
      <Footer />
    </section>
  );
}