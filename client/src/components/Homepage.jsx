import { useState, useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

// ── Team Data ───────────────────────────────────────────────────────────────
const team = [
  {
    name: "Dr. George Kiongera",
    role: "Party Leader",
    image: "https://imgs.search.brave.com/tfsEpf-gdQXi9VwnUfbYbSn2uzb3ndUV55FMFM1eJmg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAxLzg4LzM2LzQ1/LzM2MF9GXzE4ODM2/NDUzOV9hOXltblFu/VU9JdmlvN3Bpc29Z/ZGFYOXlRVGRaQnVD/Yi5qcGc",
    accent: "from-blue-600 to-blue-400",
  },
  {
    name: "Boniface Mutwiri",
    role: "Secretary General",
    image: "BM",
    accent: "from-emerald-600 to-emerald-400",
  },
  {
    name: "Innocent Opondo",
    role: "Chairperson",
    image: "IO",
    accent: "from-blue-700 to-emerald-500",
  },
  {
    name: "M(s) Ann Njeri",
    role: "Treasurer",
    image: "AN",
    accent: "from-teal-600 to-blue-500",
  },
];

// ── Section wrapper ─────────────────────────────────────────────────────────
const Section = ({ id, className = "", children }) => (
  <section id={id} className={`py-20 sm:py-28 ${className}`}>
    {children}
  </section>
);

const Container = ({ children, className = "" }) => (
  <div className={`max-w-6xl mx-auto px-5 sm:px-8 ${className}`}>{children}</div>
);

const Eyebrow = ({ children }) => (
  <p className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.22em] uppercase
    text-blue-600 dark:text-blue-400 mb-4">
    <span className="w-5 h-px bg-blue-600 dark:bg-blue-400" />
    {children}
  </p>
);

// ── Homepage ───────────────────────────────────────────────────────────────
export default function Homepage() {
  const [donating, setDonating] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300 mt-10">
    <Navbar />
      {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-[92vh] flex items-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('https://imgs.search.brave.com/JSu5dfTF4WCfVVgZfgoKNL72MdoPPWbUHmKG1B2DTYs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg0/MjcyNDUzNy9waG90/by92ZXJvbmljYS13/YW5kaWtpLWhvbGRz/LWEta2VueWFuLWZs/YWctZHVyaW5nLXRo/ZS1jZWxlYnJhdGlv/bnMtb2Yta2VueWFz/LTYwdGgtaW5kZXBl/bmRlbmNlLWRheS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/bjVHTGt5ZEFOQi13/MXBLMlMyYzRxQkp3/V0JhZ1dUMWtXemZl/M1RZVHRrQT0')` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/25 dark:bg-black/50"></div>

        {/* Subtle grid texture */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />

        {/* Right-side accent blob */}
        <div className="absolute right-0 top-1/4 w-[500px] h-[500px] rounded-full
          bg-gradient-to-br from-blue-100 to-emerald-50 dark:from-blue-950/40 dark:to-emerald-950/30
          blur-3xl opacity-60 pointer-events-none translate-x-1/3" />

        <Container className="relative z-10 text-center py-24">
  {/* Main Title */}
  <h1
    className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold 
      text-white mb-4 leading-tight
      transition-all duration-1000 ease-out
      ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}
      drop-shadow-lg`}
    style={{ backgroundImage: "linear-gradient(90deg, #3b82f6, #10b981)", WebkitBackgroundClip: "text", color: "transparent" }}
  >
    Citizens Alliance <br /> for Democratic Affairs
  </h1>

  {/* Subtitle */}
  <h3
    className={`text-lg sm:text-xl md:text-2xl italic text-white/90 mb-10 font-light
      transition-all duration-1200 ease-out
      ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}
      drop-shadow-md`}
  >
    Siasa za Maendeleo
  </h3>

  {/* Buttons */}
  <div
    className={`flex flex-wrap justify-center gap-4 transition-all duration-1400 ease-out
      ${heroVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}
  >
    <a
      href="/membership/aspirant"
      className="inline-flex items-center gap-2 px-8 py-4 rounded-full
        text-sm sm:text-base font-bold text-white
        bg-gradient-to-r from-blue-600 to-emerald-500
        hover:from-blue-700 hover:to-emerald-600
        shadow-xl shadow-blue-200 dark:shadow-blue-950
        transition-all duration-200 active:scale-95"
    >
      Become a Member
    </a>
    <a
      href="#donate"
      className="inline-flex items-center gap-2 px-8 py-4 rounded-full
        text-sm sm:text-base font-bold
        border border-white/50 dark:border-white/30
        text-white/90 dark:text-white/80
        hover:border-blue-300 dark:hover:border-blue-700
        hover:text-blue-200 dark:hover:text-blue-400
        transition-all duration-200"
    >
      Donate Now
    </a>
  </div>
</Container>
      </section>

      {/* ══ MISSION ═══════════════════════════════════════════════════════════ */}
      <Section id="mission">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Eyebrow>Our Mission</Eyebrow>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-6
                text-slate-900 dark:text-white">
                Built for every<br />Kenyan to thrive.
              </h2>
              <p className="text-base leading-relaxed text-slate-500 dark:text-slate-400 mb-8">
                To build a social, democratic state and society in which all Kenyans will have a prosperous life and feel at home as individuals and cultural, marginalized communities and people living with disabilities.
              </p>
              <a href="/manifesto"
                className="inline-flex items-center gap-2 text-sm font-semibold
                  text-blue-600 dark:text-blue-400
                  hover:gap-3 transition-all duration-200">
                Read our Manifesto
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
              </a>
            </div>

            <div className="space-y-4">
              <Eyebrow>Why CADA?</Eyebrow>
              <p className="text-base leading-relaxed text-slate-500 dark:text-slate-400 mb-6">
                We are redefining political participation for the digital age. From grassroots to governance, every Kenyan counts.
              </p>
              {[
                { icon: "🗳", title: "Transparent Governance", desc: "Open records, accountable officials, democratic processes." },
                { icon: "🤝", title: "Inclusive Politics", desc: "Every voice matters — from marginalized communities to urban centres." },
                { icon: "⚡", title: "Digital-First Engagement", desc: "Bringing citizens into governance through modern platforms." },
              ].map((item) => (
                <div key={item.title}
                  className="flex gap-4 p-4 rounded-xl border border-slate-100 dark:border-slate-800
                    hover:border-blue-100 dark:hover:border-blue-900 transition-colors duration-200">
                  <div>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-0.5">{item.title}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* ══ LEADERSHIP ═══════════════════════════════════════════════════════ */}
      <Section id="leadership" className="border-t border-slate-100 dark:border-slate-800">
        <Container>
          <div className="text-center mb-14">
            <Eyebrow>Party Leadership</Eyebrow>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              Those who lead the way.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={index}
                className="group relative border border-slate-100 dark:border-slate-800
                  bg-white dark:bg-slate-900
                  rounded-2xl overflow-hidden text-center
                  hover:border-blue-100 dark:hover:border-blue-900
                  hover:shadow-xl hover:shadow-slate-100/80 dark:hover:shadow-slate-900/60
                  transition-all duration-300"
              >
                <div className="h-56 w-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="h-0.5 w-full bg-gradient-to-r from-blue-600 to-emerald-500
                  scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="p-5">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5 leading-snug">{member.name}</h3>
                  <span className="inline-block text-[11px] font-semibold tracking-[0.15em] uppercase
                    text-blue-600 dark:text-blue-400
                    bg-blue-50 dark:bg-blue-950/60
                    px-3 py-1 rounded-full">
                    {member.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ══ HISTORY ═══════════════════════════════════════════════════════════ */}
      <Section id="history" className="border-t border-slate-100 dark:border-slate-800">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <Eyebrow>Our History</Eyebrow>
              <h2 className="text-4xl font-black tracking-tight leading-tight text-slate-900 dark:text-white">
                Born from the<br />people's will.
              </h2>
            </div>
            <div className="lg:col-span-8">
              <div className="relative pl-8 border-l-2 border-slate-100 dark:border-slate-800">
                {[
                  {
                    year: "2021",
                    title: "The Idea Takes Root",
                    text: "Amidst global disillusionment with traditional parties, CADA was conceived as citizens grew impatient with government repression, loss of civil liberties, and growing cronyism. A bottom-up movement was born.",
                    dot: "bg-blue-600",
                  },
                  {
                    year: "The Vision",
                    title: "A Libertarian Alternative",
                    text: "CADA emerged to defend and expand personal freedoms, advance limited government, and strengthen democratic principles — offering a fresh perspective that prioritized individual autonomy and free markets.",
                    dot: "bg-emerald-500",
                  },
                  {
                    year: "Today",
                    title: "Building a New Kenya",
                    text: "CADA's core objective remains to advocate for reducing state intervention in personal and economic spheres, while championing participatory democracy and equal opportunity for every Kenyan.",
                    dot: "bg-gradient-to-b from-blue-600 to-emerald-500",
                  },
                ].map((item, i) => (
                  <div key={i} className="relative mb-10 last:mb-0">
                    <span className={`absolute -left-[41px] top-1 w-4 h-4 rounded-full border-2 border-white dark:border-slate-950 ${item.dot}`} />
                    <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-400 dark:text-slate-500 mb-1.5">
                      {item.year}
                    </p>
                    <p className="text-base font-bold text-slate-900 dark:text-white mb-2">{item.title}</p>
                    <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* ══ DONATE ════════════════════════════════════════════════════════════ */}
      <Section id="donate" className="border-t border-slate-100 dark:border-slate-800">
        <Container>
          <div className="relative rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 p-10 sm:p-16 text-center">
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(37,99,235,0.06) 0%, transparent 60%)" }} />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 rounded-full
              bg-emerald-100/50 dark:bg-emerald-950/30 blur-3xl pointer-events-none" />

            <div className="relative">
              <Eyebrow>Support Our Cause</Eyebrow>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-5">
                Help us build<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
                  a better Kenya.
                </span>
              </h2>
              <p className="text-base text-slate-500 dark:text-slate-400 max-w-md mx-auto mb-10 leading-relaxed">
                Your donation helps us continue our work towards a better Kenya. Support CADA today using M-Pesa.
              </p>

              {!donating ? (
                <button
                  onClick={() => setDonating(true)}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full
                    text-sm font-bold text-white
                    bg-gradient-to-r from-blue-600 to-emerald-500
                    hover:from-blue-700 hover:to-emerald-600
                    shadow-xl shadow-blue-200 dark:shadow-blue-950
                    transition-all duration-200 active:scale-95 cursor-pointer border-none">
                  Make a Donation
                </button>
              ) : (
                <div className="max-w-sm mx-auto border border-slate-200 dark:border-slate-800 rounded-2xl p-7 text-left">
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-1">M-Pesa Paybill</p>
                  <p className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 mb-4 tracking-tight">
                    Coming Soon
                  </p>
                  <p className="text-xs text-slate-400 dark:text-slate-500">
                    M-Pesa payment details will be available shortly. Follow us on social media for updates.
                  </p>
                  <button onClick={() => setDonating(false)}
                    className="mt-5 text-xs font-medium text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors cursor-pointer bg-transparent border-none">
                    ← Go back
                  </button>
                </div>
              )}
            </div>
          </div>
        </Container>
      </Section>

      <Footer />
    </div>
  );
}