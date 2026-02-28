import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// ── Data ───────────────────────────────────────────────────────────────────────
const tabs = [
  { id: "forward", label: "Forward Message" },
  { id: "policy", label: "Policy Areas" },
  { id: "governance", label: "Governance" },
  { id: "education", label: "Education" },
  { id: "health", label: "Health" },
  { id: "rights", label: "Human Rights" },
  { id: "youth", label: "Youth" },
  { id: "cta", label: "Call to Action" },
];

const policyAreas = [
  { icon: "🏛", label: "Democratic Governance" },
  { icon: "📚", label: "Education" },
  { icon: "🏥", label: "Health" },
  { icon: "⚖️", label: "Human Rights & Freedom" },
  { icon: "🌱", label: "Youth Empowerment" },
];

const phases = {
  governance: [
    {
      term: "short",
      label: "Short-Term · 1–2 Years",
      items: [
        "Promote transparency legislation that limits government power and prevents invasion of individual freedoms.",
        "Advocate for electoral reform ensuring fair elections and curtailing state interference in campaigns and party registration.",
        "Promote decentralized decision-making through local community governance.",
      ],
    },
    {
      term: "medium",
      label: "Medium-Term · 3–5 Years",
      items: [
        "Build decentralized municipal and local council systems that reduce the role of the central state.",
        "Push for deregulation of political parties, enabling smaller, independent groups to form freely.",
        "Advocate for governmental transparency tools including public access to government records.",
      ],
    },
    {
      term: "long",
      label: "Long-Term · 5+ Years",
      items: [
        "Shift toward a minimal state that exists solely to protect individual rights, gradually reducing government size, spending, and intervention.",
        "Promote direct democracy mechanisms — referenda and citizen initiatives — reducing dependence on representative governance.",
        "Privatize services that can be handled more effectively by the private sector.",
      ],
    },
  ],
  education: [
    {
      term: "short",
      label: "Short-Term · 1–2 Years",
      items: [
        "Promote school choice policies — vouchers, charter schools, and private school options.",
        "Encourage online learning platforms and home-schooling to expand family freedom.",
        "Decentralize curriculum decisions to local communities and individual schools.",
      ],
    },
    {
      term: "medium",
      label: "Medium-Term · 3–5 Years",
      items: [
        "Introduce education tax credits and subsidies enabling parents to choose private or alternative paths.",
        "Reduce government control and encourage more private, online, and community-based education models.",
        "Advocate for privatization of public universities and greater student flexibility in higher education.",
      ],
    },
    {
      term: "long",
      label: "Long-Term · 5+ Years",
      items: [
        "Move toward a fully privatized education system based on need and preference.",
        "Allow market competition among providers to drive quality improvements and lower costs.",
        "Encourage lifelong learning and skills development through voluntary, market-driven education options.",
      ],
    },
  ],
  health: [
    {
      term: "short",
      label: "Short-Term · 1–2 Years",
      items: [
        "Reduce government regulations and allow a variety of healthcare providers to emerge in the market.",
        "Expand Health Savings Accounts (HSAs) so individuals control their own healthcare spending.",
        "Deregulate the healthcare market by reducing licensing and approval barriers for new treatments and services.",
      ],
    },
    {
      term: "medium",
      label: "Medium-Term · 3–5 Years",
      items: [
        "Establish market-based healthcare solutions through private insurance and employer-provided plans.",
        "Promote telemedicine and digital health services for affordable, accessible care.",
        "Gradually shift away from publicly funded healthcare to empower individuals in health decision-making.",
      ],
    },
    {
      term: "long",
      label: "Long-Term · 5+ Years",
      items: [
        "Transition to a fully privatized healthcare system with direct provider choice.",
        "Decentralize health policy to local or regional governments aligned with community preferences.",
        "Emphasize preventive care through education and voluntary health initiatives that empower individuals.",
      ],
    },
  ],
  rights: [
    {
      term: "short",
      label: "Short-Term · 1–2 Years",
      items: [
        "Advocate for constitutional reforms explicitly protecting individual rights and freedom of speech.",
        "Support decriminalization of victimless crimes such as personal drug use, where no one else is harmed.",
        "Promote civil liberties education so citizens are aware of their rights in a democratic society.",
      ],
    },
    {
      term: "medium",
      label: "Medium-Term · 3–5 Years",
      items: [
        "Deregulate areas where government imposes undue restrictions, such as business licensing or speech.",
        "Push for anti-discrimination laws protecting individuals from private rights violations.",
        "Strengthen data protection laws and fight against excessive government surveillance.",
      ],
    },
    {
      term: "long",
      label: "Long-Term · 5+ Years",
      items: [
        "Abolish laws that infringe on basic human rights — freedom of expression, privacy, and self-defense.",
        "Reduce government power in criminal justice, labor laws, and personal freedoms.",
        "Support international recognition of individual rights and global norms that resist authoritarian control.",
      ],
    },
  ],
  youth: [
    {
      term: "short",
      label: "Short-Term · 1–2 Years",
      items: [
        "Organize workshops and social media campaigns promoting individual liberty, entrepreneurship, and economic freedom.",
        "Partner with businesses to offer internships in technology, entrepreneurship, marketing, and creative industries.",
        "Create youth councils and policy think tanks for political engagement and grassroots participation.",
        "Introduce youth entrepreneurship grants and connect founders with investors, incubators, and mentors.",
      ],
    },
    {
      term: "medium",
      label: "Medium-Term · 3–5 Years",
      items: [
        "Advocate for school choice, curriculum reform, and financial literacy in public schools.",
        "Empower youth-led initiatives addressing economic freedom, digital access, and personal rights.",
        "Establish youth employment programs with on-the-job training and career development resources.",
        "Create youth advisory councils within the party giving young people formal policy input.",
      ],
    },
    {
      term: "long",
      label: "Long-Term · 5+ Years",
      items: [
        "Establish fully youth-led entrepreneurship incubators and innovation hubs with capital, mentorship, and expertise.",
        "Implement tax incentives supporting youth entrepreneurship and reducing barriers to entry.",
        "Create permanent youth advisory boards at all government levels ensuring youth voice in legislation.",
        "Foster public-private partnerships for international exchange programs and career path mentorships.",
      ],
    },
  ],
};

const panelIntros = {
  governance:
    "At the heart of our vision is Democratic Governance where power is distributed among the people — transparent, accountable, and truly representative. We will decentralize power, promote free elections, and increase political freedoms.",
  education:
    "We believe in an education system based on choice, diversity, and competition — not central authority control. Every parent should choose what's best for their child; every student should have the opportunity to shine.",
  health:
    "Everyone should have the right to make health decisions without state interference. We propose a model based on choice and competition to reduce costs, improve quality, and restore individual freedom in healthcare.",
  rights:
    "A just and prosperous society is built on human rights and freedoms. Every citizen has the right to freedom of speech, privacy, self-determination, and the pursuit of happiness — individual liberty must always precede state control.",
  youth:
    "Young people are the engine of our nation's future. CADA will invest in education, entrepreneurship, skills, and civic engagement — creating a generation that leads with freedom, innovation, and responsibility.",
};

// ── Sub-components ─────────────────────────────────────────────────────────────

const SectionLabel = ({ children }) => (
  <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-400 dark:text-slate-500 mb-5">
    {children}
  </p>
);

const PhaseBlock = ({ term, label, items }) => {
  const styles = {
    short: {
      dot: "bg-emerald-400",
      border: "border-emerald-400/30",
      label: "text-emerald-500 dark:text-emerald-400",
    },
    medium: {
      dot: "bg-blue-400",
      border: "border-blue-400/30",
      label: "text-blue-500 dark:text-blue-400",
    },
    long: {
      dot: "bg-teal-500 dark:bg-teal-400",
      border: "border-teal-500/30",
      label: "text-teal-600 dark:text-teal-400",
    },
  }[term];

  return (
    <div className={`relative border-l-2 pl-5 ${styles.border}`}>
      {/* dot */}
      <span className={`absolute -left-[5px] top-1 w-2 h-2 rounded-full ${styles.dot}`} />
      <p className={`text-[11px] font-semibold tracking-[0.15em] uppercase mb-3 ${styles.label}`}>
        {label}
      </p>
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            <span className="mt-0.5 shrink-0 text-slate-300 dark:text-slate-600 text-xs">→</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

const PolicyPanel = ({ sectionKey, title }) => (
  <div>
    <SectionLabel>{title}</SectionLabel>
    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 mb-7">
      {panelIntros[sectionKey]}
    </p>
    <div className="space-y-6">
      {phases[sectionKey].map((phase) => (
        <PhaseBlock key={phase.term} {...phase} />
      ))}
    </div>
  </div>
);

// ── Main Component ─────────────────────────────────────────────────────────────
export default function CADAManifesto() {
  const [activeTab, setActiveTab] = useState("forward");
  

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16 mt-6">
      
        {/* ── Header ── */}
        <header className="text-center mb-10">
          <span className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase
            text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800
            px-4 py-1.5 rounded-full mb-5">
            Official Document · 2024
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-3
            text-slate-900 dark:text-white">
            Citizen Alliance for<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
              Democratic Affairs
            </span>
          </h1>
          <p className="text-sm tracking-[0.15em] uppercase text-slate-400 dark:text-slate-500 mb-5">
            CADA — Party Manifesto
          </p>
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-600 to-emerald-500 mx-auto rounded-full" />
        </header>

        {/* ── HQ Banner ── */}
        <div className="flex items-start gap-3 border border-slate-200 dark:border-slate-800 rounded-xl p-4 mb-8 text-sm text-slate-500 dark:text-slate-400">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center shrink-0 text-base">
            🏛
          </div>
          <p>
            <span className="font-semibold text-slate-700 dark:text-slate-300">Party Headquarters:</span>{" "}
            Westpark Suites, 1st Floor, Ojijo Road, Parklands, Nairobi — P.O Box 984–00618 ·{" "}
            <a href="http://www.cada.co.ke"
              className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium">
              www.cada.co.ke
            </a>
          </p>
        </div>

        {/* ── Tab Nav ── */}
        <div className="flex gap-1.5 overflow-x-auto pb-1 mb-8 scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`shrink-0 px-4 py-2 rounded-full text-[13px] font-medium
                border transition-all duration-200 cursor-pointer whitespace-nowrap
                ${activeTab === tab.id
                  ? "border-transparent text-white bg-gradient-to-r from-blue-600 to-emerald-500"
                  : "border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 bg-transparent hover:border-slate-300 dark:hover:border-slate-700 hover:text-slate-700 dark:hover:text-slate-200"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Panels ── */}
        <div key={activeTab} className="animate-fadeUp">

          {/* Forward Message */}
          {activeTab === "forward" && (
            <div>
              <SectionLabel>Forward Message from Party Leader</SectionLabel>
              <div className="relative border border-slate-200 dark:border-slate-800 rounded-2xl p-7 sm:p-9 overflow-hidden">
                {/* decorative quote mark */}
                <span className="absolute -top-3 left-6 text-8xl font-black text-blue-100 dark:text-blue-950 leading-none select-none pointer-events-none">
                  "
                </span>
                <div className="relative space-y-4 text-sm leading-[1.9] text-slate-600 dark:text-slate-400">
                  <p>
                    It is with great pride and unwavering commitment to our shared future that I present to you the manifesto of the Citizen Alliance for Democratic Affairs (CADA). This document reflects our party's core values and our vision for a free, fair and prosperous society.
                  </p>
                  <p>
                    In this manifesto we have outlined our policy preferences in four key areas that will shape our nation's future —{" "}
                    <strong className="font-semibold text-slate-800 dark:text-slate-200">
                      Democratic Governance, Education, Health, Youth Empowerment and Human Rights and Freedom
                    </strong>{" "}
                    — the pillars of our belief in individual liberty, personal responsibility and the power of the people to shape their own destiny.
                  </p>
                  <p>
                    As a party that believes in libertarian values, we think less government intervention, more individual choice and accountability is the key to every citizen's potential. Our policies are not theoretical but practical solutions to empower you — the citizens — and bring a society that truly values freedom, opportunity and justice for all.
                  </p>
                </div>
                <div className="mt-7 pt-5 border-t border-slate-100 dark:border-slate-800 text-sm italic text-slate-400 dark:text-slate-500">
                  Yours in liberty and service,<br />
                  <span className="font-semibold not-italic text-slate-600 dark:text-slate-400">
                    Leader, Citizen Alliance for Democratic Affairs (CADA)
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Policy Areas */}
          {activeTab === "policy" && (
            <div>
              <SectionLabel>2.0 Policy Preference Areas & Implementation Framework</SectionLabel>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
                {policyAreas.map((area) => (
                  <div key={area.label}
                    className="flex items-center gap-3 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300">
                    <span className="text-lg">{area.icon}</span>
                    {area.label}
                  </div>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                All policy areas will be implemented within the legal and constitutional framework of Kenya. The party draws on the{" "}
                <strong className="font-semibold text-slate-800 dark:text-slate-200">Constitution of Kenya</strong>,
                relevant Acts of Parliament,{" "}
                <strong className="font-semibold text-slate-800 dark:text-slate-200">Vision 2030</strong>, and{" "}
                <strong className="font-semibold text-slate-800 dark:text-slate-200">Agenda 2063</strong>.
                Implementation is structured across short, medium, and long-term horizons to ensure sustainable and lawful delivery of programs.
              </p>
            </div>
          )}

          {/* Policy panels */}
          {activeTab === "governance" && <PolicyPanel sectionKey="governance" title="Democratic Governance" />}
          {activeTab === "education" && <PolicyPanel sectionKey="education" title="Education" />}
          {activeTab === "health" && <PolicyPanel sectionKey="health" title="Health" />}
          {activeTab === "rights" && <PolicyPanel sectionKey="rights" title="Human Rights & Freedom" />}
          {activeTab === "youth" && <PolicyPanel sectionKey="youth" title="Youth Empowerment" />}

          {/* Call to Action */}
          {activeTab === "cta" && (
            <div>
              <SectionLabel>Call to Action</SectionLabel>
              <div className="border border-slate-200 dark:border-slate-800 rounded-2xl p-8 sm:p-12 text-center">
                <h2 className="text-3xl font-black tracking-tight mb-5
                  text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
                  A Call to Action
                </h2>
                <div className="space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-8">
                  <p>
                    This manifesto is not merely a policy blueprint — it is a call to every freedom-loving citizen who believes in a society governed by individual responsibility, equal opportunity, and the belief that every individual has the right to shape their own life.
                  </p>
                  <p>
                    The journey forward will not be simple. Change requires courage, vision, and the determination to confront entrenched powers. But together, we can build a nation where liberty, prosperity, and justice are not ideals — they are realities.
                  </p>
                  <p className="italic text-slate-400 dark:text-slate-500">
                    Join us in this movement as we strive for a future where government exists only to defend your rights and empower you — not to control you.
                  </p>
                </div>
                <a
                  href="http://www.cada.co.ke"
                  className="inline-block px-8 py-3 rounded-full text-sm font-bold text-white
                    bg-gradient-to-r from-blue-600 to-emerald-500
                    hover:from-blue-700 hover:to-emerald-600
                    transition-all duration-200 active:scale-95 shadow-sm"
                >
                  Join CADA Today
                </a>
              </div>
            </div>
          )}
        </div>

      </div>
      <Footer />
    </div>
  );
}