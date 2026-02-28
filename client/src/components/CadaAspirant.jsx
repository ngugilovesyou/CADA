import Footer from "./Footer";
import Navbar from "./Navbar";

export default function CADA_Aspirant() {
  return (
    <section className="min-h-screen border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navbar />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-20 mt-5">
   
        {/* ── Header ── */}
        <div className="max-w-2xl mb-14">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="w-4 h-px bg-gradient-to-r from-blue-600 to-emerald-500" />
            Leadership Path
          </p>

          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-5">
            CADA Aspirant
          </h2>

          <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
            Step forward and take part in shaping leadership within the Citizen Alliance for Democratic Affairs.
          </p>
        </div>

        {/* ── Why Join Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            "Participate in party elections and leadership processes",
            "Help shape party policies and national development agenda",
            "Gain access to exclusive member resources",
          ].map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl p-6 border
                border-slate-200 dark:border-slate-800
                bg-white dark:bg-slate-900
                hover:border-blue-300 dark:hover:border-blue-700
                transition-all duration-200"
            >
              {/* Gradient Accent */}
              <div className="absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r from-blue-600 to-emerald-500" />

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item}
              </p>
            </div>
          ))}

        </div>

        {/* ── CTA ── */}
        <div className="mt-16 flex justify-center">
          <a
            href="https://cada.co.ke/CADA%20ASPIRANT%20FORM.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl
              bg-gradient-to-r from-blue-600 to-emerald-500
              text-white font-semibold text-sm tracking-wide
              shadow-md hover:shadow-lg
              hover:scale-[1.02] active:scale-[0.98]
              transition-all duration-200"
          >
            CADA Aspirant Form
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