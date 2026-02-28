import { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

// ─── Content Data ──────────────────────────────────────────────────────────────

const ideologySections = [
  {
    id: "history",
    label: "History & Justification",
    icon: "🕰",
    content: {
      type: "history",
    },
  },
  {
    id: "ideology",
    label: "Statement of Ideology",
    icon: "📜",
    content: { type: "ideology" },
  },
  {
    id: "features",
    label: "Salient Features",
    icon: "⚡",
    content: { type: "features" },
  },
  {
    id: "goals",
    label: "Ideological Goals",
    icon: "🎯",
    content: { type: "goals" },
  },
  {
    id: "vision",
    label: "Vision & Mission",
    icon: "🌍",
    content: { type: "vision" },
  },
  {
    id: "objectives",
    label: "Aims & Objectives",
    icon: "📋",
    content: { type: "objectives" },
  },
  {
    id: "values",
    label: "Principles & Values",
    icon: "⚖️",
    content: { type: "values" },
  },
  {
    id: "connection",
    label: "Values & Ideology Link",
    icon: "🔗",
    content: { type: "connection" },
  },
  {
    id: "symbols",
    label: "Party Symbols",
    icon: "🦚",
    content: { type: "symbols" },
  },
  {
    id: "policy",
    label: "Policy Areas",
    icon: "🗂",
    content: { type: "policy" },
  },
  {
    id: "comms",
    label: "Communication Strategy",
    icon: "📡",
    content: { type: "comms" },
  },
  {
    id: "me",
    label: "M&E Framework",
    icon: "📊",
    content: { type: "me" },
  },
  {
    id: "review",
    label: "Ideology Review",
    icon: "🔄",
    content: { type: "review" },
  },
];

const justifications = [
  {
    num: "01",
    title: "Response to Growing Government Overreach",
    text: "Across the world, particularly during the pandemic, governments enacted widespread interventions that affected personal freedoms  lockdowns, mandatory vaccinations, and stringent travel restrictions. CADA responded by advocating for a political alternative that limits government power and protects individual rights.",
  },
  {
    num: "02",
    title: "Bridging Democracy and Liberty",
    text: "Many democracies became more centralized and interventionist over time. CADA was created to reinvigorate democracy by empowering citizens and ensuring that the state could not trample on their rights, building a new democratic infrastructure that upholds liberty in practice.",
  },
  {
    num: "03",
    title: "A New Political Voice",
    text: "Traditional parties  left or right  often failed those dissatisfied with the status quo. CADA offered a voice for those who believe in a truly libertarian society where personal and economic freedoms are safeguarded and democratic governance is direct and transparent.",
  },
  {
    num: "04",
    title: "Technological and Social Change",
    text: "The digital age brought new challenges  government surveillance and control over personal data. CADA took a strong stance on data privacy, freedom of speech online, and protecting individuals from digital overreach.",
  },
  {
    num: "05",
    title: "A Better Future Through Voluntary Collaboration",
    text: "Many citizens were being forced into cooperation with state policies they did not agree with. CADA embraces the idea that voluntary cooperation among individuals  rather than coercion by government  is the best path forward for a just society.",
  },
];

const features = [
  {
    num: "1",
    title: "Individual Liberty",
    text: "Kenyans should have the right to make decisions about their own lives without interference from the State  whether in personal relationships, lifestyle, or self-expression. The State's role is only to protect individuals from force, fraud, or coercion.",
  },
  {
    num: "2",
    title: "Limited Government",
    text: "Government should be as small and non-intrusive as possible  limited to protecting citizens' rights, maintaining public order, and providing for national defence.",
  },
  {
    num: "3",
    title: "Private Property",
    text: "Individual Kenyans have the right to own, control, and use property as they see fit  including the right to freely trade, sell, or transfer property.",
  },
  {
    num: "4",
    title: "Free Markets",
    text: "CADA supports free-market capitalism with little government intervention or subsidies. Markets should operate by supply and demand, ensuring fair competition and voluntary exchange. Competition and innovation are the best ways to improve quality of life.",
  },
  {
    num: "5",
    title: "Non-Aggression Principle (NAP)",
    text: "The initiation of force or coercion  whether by individuals, groups, or government  against others is inherently wrong. The only legitimate use of force is in defence against aggression or harm. This extends to government actions like excessive taxation or unnecessary military interventions.",
  },
  {
    num: "6",
    title: "Voluntary Cooperation",
    text: "Society should be based on voluntary cooperation rather than coercive relationships  whether social, economic, or political.",
  },
  {
    num: "7",
    title: "Peace and Non-Interventionism",
    text: "CADA opposes government intervention in foreign conflicts, advocating for diplomacy, trade, and cultural exchange rather than war and military alliances. Government should refrain from interfering in affairs of other nations unless absolutely necessary for national defence.",
  },
];

const goals = [
  { icon: "📉", text: "Reduce government size: Reduce taxes, abolish welfare programs, merge state corporations, reduce the size of the civil service." },
  { icon: "🛡", text: "Protect civil liberties: Defend freedom of speech, religion, association, and other civil rights from state overreach." },
  { icon: "🏭", text: "Deregulate businesses: Remove government regulations that prevent fair competition, allowing market forces to regulate the economy." },
];

const objectives = [
  "Establish a democratic system of governance free of corruption, dishonesty and incompetence.",
  "Establish a government conscious of its people's needs with policies focused on job creation and growth of the private sector.",
  "Introduce policies leading to revitalized performance in industrial, agricultural, tourist, livestock and fisheries sectors.",
  "Promote investment and maintenance of fundamental infrastructure for national development.",
  "Eliminate all forms of discrimination against women, youth, PWDs and the marginalized.",
  "Promote freedom, peace, security, stability, democracy, sanctity of life and justice for all.",
  "Promote principles of democratic governance based on grassroots participation, democratic values and human rights.",
  "Uphold the rule of law and guarantee civil liberties, rights and privileges.",
  "Promote African Socialism ideals and fight for respect of national heritage, history, culture and sovereignty.",
  "Involve specialized groups  women, youth, NGOs and religious organizations  in the affairs of the Party.",
  "Work with and support African movements to consolidate Africa's political sovereignty and economic integration.",
  "Manage and conserve the environment, natural resources, national monuments and historical sites.",
  "Preserve and defend national sovereignty against negative foreign penetration and domination.",
  "Co-operate with county, national, regional and international organizations to promote the Party's aims and objectives.",
  "Fight for gender equality and the empowerment of women and rights of minority and marginalized Kenyans.",
];

const values = [
  "Supremacy of Party members",
  "Social and Economic justice",
  "Respect for constitutionalism and the rule of law",
  "Respect for individual and people's rights and freedom of speech",
  "Democratic governance and people's participation in all government projects",
  "Freedom with responsibility within the law and constitution of Kenya",
  "Empowerment of the marginalized groups or sections of society",
  "Sustainable use of the environment",
  "Positive and mutually beneficial international relations",
  "Equal opportunity irrespective of gender, race, tribe, religion, physical abilities",
];

const valueConnections = [
  {
    value: "Supremacy of Party Members",
    link: "Libertarianism emphasizes individual autonomy and minimal centralized authority. It favors decentralized power and autonomy for individuals within any organization  including political parties.",
  },
  {
    value: "Social and Economic Justice",
    link: "Free markets enable individuals to thrive based on merit. Social justice means ensuring equal opportunities and protecting property rights  fairness without coercion by the state.",
  },
  {
    value: "Constitutionalism and Rule of Law",
    link: "Libertarianism insists that a constitution should constrain government power to prevent infringements on personal freedoms  the law protects liberty, not restricts it.",
  },
  {
    value: "Individual Rights and Freedom of Speech",
    link: "A perfect alignment: libertarianism places the strongest emphasis on free speech, private property, and personal freedom  individuals free to think and speak without state censorship.",
  },
  {
    value: "Democratic Governance",
    link: "Libertarian democracy is about empowering individuals to make decisions in their personal and economic lives, rather than being dictated to by the state.",
  },
  {
    value: "Freedom with Responsibility",
    link: "Freedom is fundamental, but balanced by personal responsibility. Individuals are free to make choices but must be accountable for those choices  especially if they affect others' rights.",
  },
];

const symbols = [
  {
    symbol: "📛 Party Name",
    title: "Citizens Alliance for Democratic Affairs",
    text: "\"Citizen\" emphasizes the central role of individuals in shaping society. \"Alliance\" suggests voluntary association  fitting libertarianism's view of free individuals coming together willingly. \"Democratic Affairs\" aligns with support for democratic governance protecting individual freedoms.",
  },
  {
    symbol: "🗣 Party Slogan",
    title: "Siasa Za Maendeleo (Politics of Development)",
    text: "Development driven by individual initiative and free-market principles  progress through individual freedom and minimal government control. Development should stem from the private sector and voluntary actions rather than state-driven programs.",
  },
  {
    symbol: "🎨 Party Colors",
    title: "Green, Blue, and White",
    text: "Green: sustainable development and individual environmental responsibility. Blue: personal freedoms, political stability, and rule of law. White: peace, clarity, and equality  every citizen equal under the law.",
  },
  {
    symbol: "🦚 Party Symbol",
    title: "The Peacock",
    text: "Beauty, freedom, and pride  the individual as central to libertarianism. The peacock's vibrant colors represent diversity in a free society. Its independence symbolizes self-reliance and personal responsibility  free to pursue dreams without undue interference.",
  },
];

const policyAreas = [
  { icon: "📚", title: "Education & Training", id: "edu" },
  { icon: "🏭", title: "Trade Development", id: "trade" },
  { icon: "💧", title: "Water & Sanitation", id: "water" },
  { icon: "🚗", title: "Transport & Infrastructure", id: "transport" },
  { icon: "🏥", title: "Health & Social Protection", id: "health" },
  { icon: "🌾", title: "Agriculture & Food Security", id: "agri" },
  { icon: "🌳", title: "Environment & Climate", id: "env" },
  { icon: "⚖️", title: "Courts & Justice", id: "justice" },
  { icon: "🏛", title: "Governance & Administration", id: "gov" },
  { icon: "💰", title: "Finance & Economic Growth", id: "finance" },
  { icon: "💻", title: "Digital Transformation", id: "digital" },
];

const commsPillars = [
  {
    icon: "🤝",
    title: "Community-Based Engagement",
    text: "County-based public forums, town halls, civic dialogues, and regular barazas. Every engagement includes youth, women, elders, and marginalized groups.",
  },
  {
    icon: "📻",
    title: "Traditional & Vernacular Media",
    text: "Political talk shows, policy explainer series with regional media, and vernacular radio and religious broadcasters for rural and peri-urban reach.",
  },
  {
    icon: "📱",
    title: "Digital & Social Media",
    text: "Multimedia on X, Facebook, Instagram, TikTok, YouTube, and WhatsApp. Live sessions, policy Q&As, webinars, the CADA Dialogue Podcast, and real-time polls.",
  },
  {
    icon: "🎓",
    title: "Educational Partnerships",
    text: "Academic lectures, research symposia, political education seminars, leadership fellowships, and civic education campaigns with universities and civil society.",
  },
  {
    icon: "📄",
    title: "Publications & Grassroots Literature",
    text: "Monthly issue briefs, People's Manifesto Digest, ideological handbooks, civic education toolkits  all translated into local languages.",
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

const Eyebrow = ({ children }) => (
  <p className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.22em] uppercase text-blue-600 dark:text-blue-400 mb-4">
    <span className="w-5 h-px bg-blue-600 dark:bg-blue-400" />
    {children}
  </p>
);

const SectionTitle = ({ children }) => (
  <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white mb-8 leading-tight">
    {children}
  </h2>
);

const PhaseTimeline = ({ phases }) => (
  <div className="space-y-5 mt-4">
    {phases.map((ph) => {
      const styles = {
        short: { dot: "bg-emerald-400", border: "border-emerald-400/30", lbl: "text-emerald-600 dark:text-emerald-400" },
        medium: { dot: "bg-blue-400", border: "border-blue-400/30", lbl: "text-blue-600 dark:text-blue-400" },
        long: { dot: "bg-teal-500", border: "border-teal-400/30", lbl: "text-teal-600 dark:text-teal-400" },
      }[ph.term];
      return (
        <div key={ph.term} className={`relative border-l-2 pl-5 ${styles.border}`}>
          <span className={`absolute -left-[5px] top-1 w-2 h-2 rounded-full ${styles.dot}`} />
          <p className={`text-[10px] font-semibold tracking-[0.18em] uppercase mb-2 ${styles.lbl}`}>{ph.label}</p>
          <ul className="space-y-1.5">
            {ph.items.map((item, i) => (
              <li key={i} className="flex gap-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                <span className="shrink-0 text-slate-300 dark:text-slate-600 text-xs mt-0.5">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      );
    })}
  </div>
);

const PolicyAccordion = ({ title, icon, areas }) => {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-3">
      {areas.map((area, i) => (
        <div key={i}
          className="border border-slate-100 dark:border-slate-800 rounded-xl overflow-hidden
            hover:border-blue-100 dark:hover:border-blue-900 transition-colors duration-200">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-3 p-4 bg-transparent border-none cursor-pointer text-left">
            <div className="flex items-center gap-3">
              <span className="text-lg">{area.icon}</span>
              <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{area.title}</span>
            </div>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
              className="shrink-0 text-slate-400"
              style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.22s ease" }}>
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          {open === i && (
            <div className="px-4 pb-4 border-t border-slate-100 dark:border-slate-800 pt-4">
              <PhaseTimeline phases={area.phases} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

// ─── Section Content Renderers ─────────────────────────────────────────────────

function HistorySection() {
  return (
    <div>
      <Eyebrow>Founded 2021</Eyebrow>
      <SectionTitle>History &amp; Justification</SectionTitle>
      <p className="text-base leading-relaxed text-slate-500 dark:text-slate-400 mb-10 max-w-2xl">
        The idea for CADA was conceived in 2021, amidst a rapidly changing global landscape. Citizens worldwide grew increasingly discontent with traditional parties that cared more about party loyalty than democratic governance and individual freedom. CADA emerged as a bottom-up movement premised on libertarianism  to defend personal freedoms, advance limited government, and improve democratic principles.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {justifications.map((j) => (
          <div key={j.num}
            className="border border-slate-100 dark:border-slate-800 rounded-2xl p-6
              hover:border-blue-100 dark:hover:border-blue-900 transition-colors duration-200">
            <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 block mb-3">
              {j.num}
            </span>
            <p className="text-sm font-bold text-slate-900 dark:text-white mb-2 leading-snug">{j.title}</p>
            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{j.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function IdeologySection() {
  return (
    <div>
      <Eyebrow>Core Philosophy</Eyebrow>
      <SectionTitle>Statement of Ideology</SectionTitle>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="border border-slate-100 dark:border-slate-800 rounded-2xl p-7">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Libertarianism</h3>
          <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 mb-4">
            CADA's ideological political philosophy is <strong className="text-slate-700 dark:text-slate-300">Libertarianism</strong>  emphasizing individual liberty, autonomy, and minimal government intervention in both personal and economic matters.
          </p>
          <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            The core belief: individuals should have the freedom to live their lives as they see fit, as long as their actions do not infringe upon the rights and freedoms of others.
          </p>
        </div>
        <div className="border border-slate-100 dark:border-slate-800 rounded-2xl p-7">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Ideological Spectrum</h3>
          <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400 mb-4">
            Libertarianism generally falls on the <strong className="text-slate-700 dark:text-slate-300">right-wing</strong> side of the political spectrum in terms of economic ideology  emphasizing free markets, limited government, and private property rights.
          </p>
          <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
            However, it also shares left-wing values on personal freedoms  supporting civil liberties, free speech, and decriminalization. It incorporates aspects of both liberal and conservative thought depending on context.
          </p>
          <div className="mt-5 flex items-center gap-2">
            <div className="flex-1 h-2 rounded-full bg-gradient-to-r from-blue-200 to-blue-500 dark:from-blue-900 dark:to-blue-600" />
            <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-400">Economic Right</span>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <div className="flex-1 h-2 rounded-full bg-gradient-to-r from-emerald-200 to-emerald-500 dark:from-emerald-900 dark:to-emerald-600" />
            <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-400">Social Liberal</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturesSection() {
  const [open, setOpen] = useState(0);
  return (
    <div>
      <Eyebrow>Core Beliefs</Eyebrow>
      <SectionTitle>Salient Features</SectionTitle>
      <div className="space-y-3">
        {features.map((f, i) => (
          <div key={i}
            className={`border rounded-xl overflow-hidden transition-all duration-200
              ${open === i ? "border-blue-200 dark:border-blue-800" : "border-slate-100 dark:border-slate-800 hover:border-blue-100 dark:hover:border-blue-900"}`}>
            <button
              onClick={() => setOpen(open === i ? -1 : i)}
              className="w-full flex items-center justify-between gap-4 p-5 bg-transparent border-none cursor-pointer text-left">
              <div className="flex items-center gap-4">
                <span className={`text-sm font-black w-7 shrink-0
                  ${open === i ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500" : "text-slate-300 dark:text-slate-600"}`}>
                  {f.num}
                </span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">{f.title}</span>
              </div>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
                className="shrink-0 text-slate-400"
                style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.22s ease" }}>
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            {open === i && (
              <div className="px-5 pb-5 border-t border-blue-50 dark:border-blue-900/50">
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 pt-4">{f.text}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function GoalsSection() {
  return (
    <div>
      <Eyebrow>What We Stand For</Eyebrow>
      <SectionTitle>Ideological Goals</SectionTitle>
      <div className="space-y-4">
        {goals.map((g, i) => (
          <div key={i}
            className="flex items-start gap-4 border border-slate-100 dark:border-slate-800 rounded-xl p-5
              hover:border-blue-100 dark:hover:border-blue-900 transition-colors duration-200">
            <span className="text-2xl shrink-0">{g.icon}</span>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{g.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function VisionSection() {
  return (
    <div>
      <Eyebrow>Direction</Eyebrow>
      <SectionTitle>Vision &amp; Mission</SectionTitle>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="relative border border-slate-100 dark:border-slate-800 rounded-2xl p-8 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-emerald-500" />
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400 mb-3">3.0 Party Vision</p>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            To establish a prosperous nation where every citizen enjoys social, economic, and democratic rights.
          </p>
        </div>
        <div className="relative border border-slate-100 dark:border-slate-800 rounded-2xl p-8 overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-teal-500" />
          <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-emerald-600 dark:text-emerald-400 mb-3">4.0 Mission Statement</p>
          <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            To build a social, democratic state and society in which all Kenyans will have a prosperous life and feel at home as individuals and cultural, marginalized communities and people living with disabilities.
          </p>
        </div>
      </div>
    </div>
  );
}

function ObjectivesSection() {
  return (
    <div>
      <Eyebrow>5.0 Aims & Objectives</Eyebrow>
      <SectionTitle>What CADA Aims to Achieve</SectionTitle>
      <div className="space-y-2">
        {objectives.map((obj, i) => (
          <div key={i} className="flex gap-4 py-3 border-b border-slate-50 dark:border-slate-900 last:border-0">
            <span className="shrink-0 text-[11px] font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500 w-6 mt-0.5">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{obj}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ValuesSection() {
  return (
    <div>
      <Eyebrow>6.0 Core Values</Eyebrow>
      <SectionTitle>Principles &amp; Values</SectionTitle>
      <div className="grid sm:grid-cols-2 gap-3">
        {values.map((v, i) => (
          <div key={i}
            className="flex items-center gap-3 border border-slate-100 dark:border-slate-800 rounded-xl px-4 py-3
              hover:border-blue-100 dark:hover:border-blue-900 transition-colors duration-200">
            <span className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center shrink-0">
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
            </span>
            <p className="text-sm text-slate-700 dark:text-slate-300 font-medium">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConnectionSection() {
  return (
    <div>
      <Eyebrow>7.0 The Link</Eyebrow>
      <SectionTitle>Values &amp; Ideology Connection</SectionTitle>
      <div className="space-y-4">
        {valueConnections.map((vc, i) => (
          <div key={i}
            className="border border-slate-100 dark:border-slate-800 rounded-xl p-5
              hover:border-blue-100 dark:hover:border-blue-900 transition-colors duration-200">
            <p className="text-sm font-bold text-slate-900 dark:text-white mb-2">{vc.value}</p>
            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{vc.link}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SymbolsSection() {
  return (
    <div>
      <Eyebrow>8.0 Party Identity</Eyebrow>
      <SectionTitle>Party Symbols &amp; Their Meaning</SectionTitle>
      <div className="grid sm:grid-cols-2 gap-5">
        {symbols.map((s, i) => (
          <div key={i}
            className="border border-slate-100 dark:border-slate-800 rounded-2xl p-6
              hover:border-blue-100 dark:hover:border-blue-900 transition-colors duration-200">
            <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-slate-400 dark:text-slate-500 mb-2">{s.symbol}</p>
            <p className="text-base font-bold text-slate-900 dark:text-white mb-3">{s.title}</p>
            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PolicySection() {
  const policyData = {
    edu: {
      icon: "📚", title: "Education & Training",
      phases: [
        { term: "short", label: "Short-Term · 0–2 Years", items: ["Review and rationalize CBC subjects, focusing on literacy, numeracy, digital and life skills.", "Construct 15,000 new classrooms to address infrastructure deficits.", "Double funding to Free Primary and Free Secondary Education programs.", "Launch a National Digital Literacy Enhancement Program targeting Grade 3–9."] },
        { term: "medium", label: "Medium-Term · 3–5 Years", items: ["Achieve 100% transition from primary to secondary across all counties.", "Equip all Junior Secondary Schools with science labs and computer hubs.", "Implement a Teacher Skills Development Institute for 21st-century pedagogy."] },
        { term: "long", label: "Long-Term · 6–10 Years", items: ["Institutionalize community-managed schools with performance-linked grants.", "Integrate civic education and innovation skills into national outcomes.", "Full solarization of public schools under the Green Education Initiative."] },
      ],
    },
    trade: {
      icon: "🏭", title: "Trade Development",
      phases: [
        { term: "short", label: "Short-Term · 0–2 Years", items: ["Establish MSME Export Accelerator Program supporting 10,000 small businesses by 2027.", "Waive export registration fees for MSMEs for their first three years.", "Operationalize 10 Agro-Industrial Parks and 5 Textile Industrial Hubs."] },
        { term: "medium", label: "Medium-Term · 3–5 Years", items: ["Develop County Trade Facilitation Centers for packaging, standardization, and certification.", "Develop a National Value Addition Strategy for coffee, tea, avocado, macadamia, beef, and fish."] },
        { term: "long", label: "Long-Term · 6–10 Years", items: ["Ensure MSMEs account for 30% of Kenya's non-traditional exports by 2035.", "Grow manufacturing sector's contribution to GDP to 15% by 2035.", "Make Kenya the leading light manufacturing hub for Eastern and Central Africa."] },
      ],
    },
    water: {
      icon: "💧", title: "Water & Sanitation",
      phases: [
        { term: "short", label: "Short-Term · 0–2 Years", items: ["Build 1,000 new community boreholes and solar-powered water schemes.", "Rehabilitate 2,000 broken rural water supply systems.", "Provide tax exemptions on domestic rainwater harvesting systems."] },
        { term: "medium", label: "Medium-Term · 3–5 Years", items: ["Develop 10 major multipurpose dams for domestic and industrial water supply.", "Develop 1 million new household-level water harvesting systems, especially in ASAL regions."] },
        { term: "long", label: "Long-Term · 6–10 Years", items: ["Attain 100% safe water access for all Kenyans by 2035.", "Declare Kenya Open Defecation Free (ODF) by 2035.", "Achieve full sanitation coverage in all urban and peri-urban areas."] },
      ],
    },
    transport: {
      icon: "🚗", title: "Transport & Infrastructure",
      phases: [
        { term: "short", label: "Short-Term · 0–2 Years", items: ["Launch CADA Rural Roads Program: upgrade 20,000 km of rural roads to all-weather standards.", "Operationalize Nairobi Commuter Rail and extend to satellite towns.", "Launch Urban Transport Plan focusing on Bus Rapid Transit (BRT) systems."] },
        { term: "medium", label: "Medium-Term · 3–5 Years", items: ["Dual and rehabilitate 5,000 km of major national highways.", "Extend SGR from Naivasha to Kisumu and Malaba through PPPs."] },
        { term: "long", label: "Long-Term · 6–10 Years", items: ["Achieve 100% paved connectivity for all county headquarters by 2035.", "Position Mombasa Port among the top 3 most efficient ports in Africa.", "Make Kenya the leading country in climate-resilient and sustainable infrastructure."] },
      ],
    },
    health: {
      icon: "🏥", title: "Health & Social Protection",
      phases: [
        { term: "short", label: "Short-Term · 0–2 Years", items: ["Nationwide SHA mass registration to enroll 85% of households by 2027.", "Deploy 30,000 Community Health Promoters in rural and urban settlements.", "Upgrade 5,000 dispensaries with modern equipment and telemedicine."] },
        { term: "medium", label: "Medium-Term · 3–5 Years", items: ["Expand SHA to include outpatient chronic disease management.", "Establish 24-hour operational capacity in all Level II and III facilities.", "Establish disability-friendly wards in 50% of public hospitals."] },
        { term: "long", label: "Long-Term · 6–10 Years", items: ["80% of health needs addressed at community level.", "Build one specialized rehabilitation and prosthetics center per region.", "Make Kenya a global leader in mobile and digital health services."] },
      ],
    },
    agri: {
      icon: "🌾", title: "Agriculture & Food Security",
      phases: [
        { term: "short", label: "Short-Term · 0–2 Years", items: ["Launch National Soil Health Program with soil testing and fertilizer subsidies.", "Provide subsidized climate-resilient seeds and drought-tolerant varieties.", "Launch 'Youths in Agribusiness Challenge Fund'  seed grants for youth-led start-ups."] },
        { term: "medium", label: "Medium-Term · 3–5 Years", items: ["Establish County Food Reserves to stabilize food prices.", "Build community-managed irrigation dams targeting 200,000 hectares.", "Promote contract farming linking smallholders to agribusinesses."] },
        { term: "long", label: "Long-Term · 6–10 Years", items: ["National self-sufficiency in key staples through expanded irrigation.", "At least 30% youth participation in agri-value chains.", "Make agriculture the largest contributor to Kenya's exports by value."] },
      ],
    },
    env: {
      icon: "🌳", title: "Environment & Climate",
      phases: [
        { term: "short", label: "Short-Term · 0–2 Years", items: ["Plant 1 billion trees by 2027 through CADA Green Kenya Campaign.", "Roll out National Climate Early Warning System using digital technology.", "Provide tax exemptions on solar panels, biogas and other renewable technologies."] },
        { term: "medium", label: "Medium-Term · 3–5 Years", items: ["Establish County Forest Management Authorities with citizen representation.", "Launch Green Energy for Industries Program.", "Develop regional landfill sites and recycling hubs."] },
        { term: "long", label: "Long-Term · 6–10 Years", items: ["Increase forest cover to 15% by 2035.", "Increase renewable energy share from 73% to 90% of total generation by 2035.", "Transition to a fully circular economy with 60% of urban solid waste recycled."] },
      ],
    },
    justice: {
      icon: "⚖️", title: "Courts & Justice",
      phases: [
        { term: "short", label: "Short-Term · 0–2 Years", items: ["Construct 100 new court stations in underserved counties.", "Deploy 50 fully equipped Mobile Courts serving remote areas.", "Recruit 3,000 new judicial officers focused on backlog clearance."] },
        { term: "medium", label: "Medium-Term · 3–5 Years", items: ["Introduce Community Justice Centers providing legal aid at sub-county levels.", "Mandate pre-trial case conferencing and compulsory mediation for civil disputes.", "Establish County ADR Centers linked to the Judiciary."] },
        { term: "long", label: "Long-Term · 6–10 Years", items: ["No Kenyan travels more than 30 km to reach a court.", "80% of civil and criminal cases resolved within one year of filing.", "Achieve global top-50 ranking for Kenya on judicial independence indexes."] },
      ],
    },
    gov: {
      icon: "🏛", title: "Governance & Administration",
      phases: [
        { term: "short", label: "Short-Term · 0–2 Years", items: ["Conduct Comprehensive Public Sector Audit to eliminate overlapping mandates.", "Revamp Performance Contracting with real rewards and penalties.", "Enforce lifestyle audits for all senior public officers."] },
        { term: "medium", label: "Medium-Term · 3–5 Years", items: ["Rationalize and merge agencies with overlapping functions, reducing costs by 20%.", "Build County Capacity Building Centers for technical training.", "Create Civic Innovation Labs where citizens and officials co-create solutions."] },
        { term: "long", label: "Long-Term · 6–10 Years", items: ["Kenyan public sector among top three most efficient in Africa.", "Make counties self-sustaining through local revenue mobilization.", "Build a culture of zero tolerance to corruption."] },
      ],
    },
    finance: {
      icon: "💰", title: "Finance & Economic Growth",
      phases: [
        { term: "short", label: "Short-Term · 0–2 Years", items: ["Implement zero-based budgeting to eliminate wasteful spending.", "Operationalize CADA MSME Fund providing affordable single-digit interest credit.", "Undertake forensic audit of all major SACCOs."] },
        { term: "medium", label: "Medium-Term · 3–5 Years", items: ["Introduce Public Debt Ceiling Act to impose statutory limits on new borrowing.", "Establish Partial Credit Guarantee Scheme for small enterprises.", "Create Export Processing Clusters for agri-processing, leather, textiles, and ICT."] },
        { term: "long", label: "Long-Term · 6–10 Years", items: ["Build Sovereign Wealth Fund using proceeds from natural resources.", "Increase MSME contribution to GDP from 33% to 50% by 2035.", "Make Kenya the #1 African destination for digital outsourcing and tech entrepreneurship."] },
      ],
    },
    digital: {
      icon: "💻", title: "Digital Transformation",
      phases: [
        { term: "short", label: "Short-Term · 0–2 Years", items: ["Roll out broadband infrastructure in 5,000 rural schools and 1,000 health centers.", "Launch CADA Digital Literacy Program for schools, youth groups, and women's organizations.", "Digitize 80% of all government services via National E-Government Portal."] },
        { term: "medium", label: "Medium-Term · 3–5 Years", items: ["Achieve 90% 4G coverage and begin 5G rollout.", "Train at least 500,000 youth in market-relevant digital skills annually.", "Establish a National Open Data Platform for public transparency."] },
        { term: "long", label: "Long-Term · 6–10 Years", items: ["Ensure 100% internet penetration nationwide.", "Deliver 100% of government services digitally, reducing time by 70%.", "Position Kenya among Africa's top three in cybersecurity resilience."] },
      ],
    },
  };

  return (
    <div>
      <Eyebrow>9.0 Policy Areas</Eyebrow>
      <SectionTitle>Policy Implementation Plans</SectionTitle>
      <PolicyAccordion areas={policyAreas.map((a) => ({ ...a, ...policyData[a.id] }))} />
    </div>
  );
}

function CommsSection() {
  return (
    <div>
      <Eyebrow>13.0 Strategy</Eyebrow>
      <SectionTitle>Communication &amp; Dissemination</SectionTitle>
      <p className="text-base leading-relaxed text-slate-500 dark:text-slate-400 mb-8 max-w-2xl">
        CADA operationalizes a multi-channel communication strategy that educates, mobilizes, and engages citizens from all walks of life  positioning ideology at the center of political messaging to transform discourse from personality-centered debates to value-based engagement.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {commsPillars.map((c, i) => (
          <div key={i}
            className="border border-slate-100 dark:border-slate-800 rounded-2xl p-6
              hover:border-blue-100 dark:hover:border-blue-900 transition-colors duration-200">
            <span className="text-2xl block mb-4">{c.icon}</span>
            <p className="text-sm font-bold text-slate-900 dark:text-white mb-2">{c.title}</p>
            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{c.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function MESection() {
  const meItems = [
    { title: "Health & Well-being", text: "Access to quality healthcare, service coverage, patient satisfaction, and improvements in health outcomes." },
    { title: "Education & Human Capital", text: "Enrollment and retention rates, equitable access, quality of learning outcomes, and bridging regional disparities." },
    { title: "Youth Employment", text: "Job creation rates, entrepreneurship uptake, access to vocational and digital skills training." },
    { title: "Governance & Transparency", text: "Corruption perception indices, public service responsiveness, and citizen trust levels." },
    { title: "Social Inclusion", text: "Gender parity, inclusion of marginalized populations, civic engagement levels." },
    { title: "Digital Transformation", text: "Digital service uptake, technology penetration, digital literacy rates." },
    { title: "Environmental Sustainability", text: "Conservation efforts, sustainable practices adoption, and climate adaptation progress." },
    { title: "Devolution & Regional Equity", text: "Effectiveness of devolved governance, equitable resource distribution, and citizen satisfaction." },
  ];
  return (
    <div>
      <Eyebrow>14.0 Accountability</Eyebrow>
      <SectionTitle>Monitoring &amp; Evaluation Framework</SectionTitle>
      <p className="text-base leading-relaxed text-slate-500 dark:text-slate-400 mb-8 max-w-2xl">
        A robust M&E framework to promote transparency, accountability, adaptive learning, and continuous improvement. It tracks progress against ideological commitments, assesses policy impact, and facilitates evidence-based decision-making.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {meItems.map((item, i) => (
          <div key={i}
            className="flex gap-4 border border-slate-100 dark:border-slate-800 rounded-xl p-4
              hover:border-blue-100 dark:hover:border-blue-900 transition-colors duration-200">
            <span className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-0.5">{item.title}</p>
              <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReviewSection() {
  const triggers = [
    { title: "Post-Election Evaluation", text: "After each general election to assess ideological alignment with electoral mandate and policy delivery." },
    { title: "Contextual Shifts", text: "In response to major national reforms, constitutional amendments, or significant socio-political shifts." },
    { title: "Scheduled Review Cycle", text: "At least once every five years as part of a strategic governance review process." },
    { title: "Emerging Circumstances", text: "Academic critique, think tank recommendations, or significant international developments may also prompt review." },
  ];
  return (
    <div>
      <Eyebrow>15.0 Staying Relevant</Eyebrow>
      <SectionTitle>Framework for Reviewing the Ideology</SectionTitle>
      <p className="text-base leading-relaxed text-slate-500 dark:text-slate-400 mb-8 max-w-2xl">
        A political ideology must remain dynamic, responsive, and aligned with evolving national priorities, constitutional changes, and global trends. This framework ensures continued relevance, integrity, and democratic legitimacy.
      </p>
      <div className="grid sm:grid-cols-2 gap-5 mb-8">
        {triggers.map((t, i) => (
          <div key={i}
            className="border border-slate-100 dark:border-slate-800 rounded-xl p-5
              hover:border-blue-100 dark:hover:border-blue-900 transition-colors duration-200">
            <p className="text-sm font-bold text-slate-900 dark:text-white mb-2">{t.title}</p>
            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{t.text}</p>
          </div>
        ))}
      </div>
      <div className="border border-slate-100 dark:border-slate-800 rounded-2xl p-7">
        <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-blue-600 dark:text-blue-400 mb-4">Review Process Steps</p>
        <div className="space-y-4">
          {[
            "Trigger Identification & Assessment by Policy and Strategy Directorate",
            "Approval by the National Executive Council (NEC)",
            "Official Declaration and Statement of Intent published",
            "Appointment of multi-stakeholder Review Committee",
            "Public Notification  call for citizen participation issued",
            "County-Level Dialogues and digital participation tools deployed",
            "30-day Public Comment Period on draft revisions",
            "Final ratification at National Delegates Conference",
          ].map((step, i) => (
            <div key={i} className="flex gap-4 items-start">
              <span className="shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center text-white font-black text-[10px]">
                {i + 1}
              </span>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400 pt-0.5">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const sectionRenderers = {
  history: HistorySection,
  ideology: IdeologySection,
  features: FeaturesSection,
  goals: GoalsSection,
  vision: VisionSection,
  objectives: ObjectivesSection,
  values: ValuesSection,
  connection: ConnectionSection,
  symbols: SymbolsSection,
  policy: PolicySection,
  comms: CommsSection,
  me: MESection,
  review: ReviewSection,
};

// ─── Main Component ────────────────────────────────────────────────────────────
export default function Ideology() {
  const [active, setActive] = useState("history");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const ActiveSection = sectionRenderers[active];
  const activeSection = ideologySections.find((s) => s.id === active);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
<Navbar />
      {/* ── Page Header ── */}
      <div className="border-b border-slate-100 dark:border-slate-800 pt-16 pb-12 mt-5">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.22em] uppercase text-blue-600 dark:text-blue-400 mb-5">
            <span className="w-5 h-px bg-blue-600 dark:bg-blue-400" />
            CADA
          </span>
          <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-tight text-slate-900 dark:text-white mb-4">
            Party<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-500">
              Ideology
            </span>
          </h1>
          <p className="text-base text-slate-500 dark:text-slate-400 max-w-md leading-relaxed">
            A comprehensive guide to CADA's libertarian philosophy, values, policy commitments, and democratic vision for Kenya.
          </p>
        </div>
      </div>

      {/* ── Mobile Nav Toggle ── */}
      <div className="lg:hidden border-b border-slate-100 dark:border-slate-800 px-5 py-3">
        <button
          onClick={() => setMobileNavOpen((o) => !o)}
          className="flex items-center justify-between w-full text-sm font-semibold text-slate-700 dark:text-slate-300 bg-transparent border-none cursor-pointer p-0">
          <span className="flex items-center gap-2">
            <span>{activeSection?.icon}</span>
            {activeSection?.label}
          </span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
            style={{ transform: mobileNavOpen ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.22s" }}>
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
        {mobileNavOpen && (
          <div className="mt-3 space-y-0.5">
            {ideologySections.map((s) => (
              <button key={s.id}
                onClick={() => { setActive(s.id); setMobileNavOpen(false); }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-left bg-transparent border-none cursor-pointer transition-colors
                  ${active === s.id ? "text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50" : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/60"}`}>
                <span>{s.icon}</span>{s.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* ── Main Layout ── */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 flex gap-10">

        {/* ── Sticky Sidebar ── */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="sticky top-6 space-y-0.5">
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-slate-400 dark:text-slate-500 px-3 mb-3">Sections</p>
            {ideologySections.map((s) => (
              <button key={s.id}
                onClick={() => setActive(s.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-left bg-transparent border-none cursor-pointer transition-all duration-150
                  ${active === s.id
                    ? "text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50"
                  }`}>
                <span className="text-base">{s.icon}</span>
                <span className="leading-snug">{s.label}</span>
                {active === s.id && (
                  <span className="ml-auto w-1 h-4 rounded-full bg-gradient-to-b from-blue-600 to-emerald-500" />
                )}
              </button>
            ))}
          </div>
        </aside>

        {/* ── Content ── */}
        <main className="flex-1 min-w-0">
          <div key={active}>
            {ActiveSection && <ActiveSection />}
          </div>
        </main>
      </div>
   <Footer />
    </div>
  );
}