import { motion } from "motion/react";
import { ArrowLeft, Globe, Store, Network, Rocket, Map } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "network",
    title: "Network Expansion & MBO",
    icon: Network,
    description: "Led expansion strategy and executed Multi-Brand Outlet (MBO) project.",
    details: [
      "Managed due diligence, commissions, and logistics for MBO partners.",
      "Drove 10% of overall sales through the MBO channel.",
      "Onboarded 1100+ MBO partners in record 2 months by automating lead management.",
      "Improved lead-to-onboarding conversion by ~20% and boosted efficiency by ~50%."
    ]
  },
  {
    id: "store-launch",
    title: "Mega Store Rollout",
    icon: Store,
    description: "Coordinated the massive scale launch of physical experience centers.",
    details: [
      "Launched 4,000 stores in a single day through cross-functional alignment.",
      "Achieved 100% on-time readiness for RJ region (207 stores in 2 months).",
      "Built real-time dashboards for 900+ COCO stores to track KPIs and test rides.",
      "Standardized workflow design and risk mitigation for rapid scaling."
    ]
  },
  {
    id: "charging",
    title: "Charging Infrastructure",
    icon: Map,
    description: "Nationwide expansion of fast charging infrastructure for fleet operations.",
    details: [
      "Executed rollout of 4K+ fast chargers in 4 months for last-mile fleets.",
      "Improved ops efficiency via real-time dashboards with 5+ critical KPIs.",
      "Enhanced features to boost charger utilization and uptime.",
      "Conducted demand density analysis for strategic site selection."
    ]
  },
  {
    id: "domestic-gtm",
    title: "Domestic GTM Strategy",
    icon: Rocket,
    description: "Contributed to industry-first D2C model and product launches.",
    details: [
      "Drove ₹80 Cr GMV in 2 months across 3,600 pin codes via consumer insights.",
      "Structured and executed 25+ end-to-end BRDs & SOPs for customer journeys.",
      "Achieved 100% compliance in <6 days during critical launch phases.",
      "Increased test ride fulfilment to 82% from 65%, delivering ₹2 Cr annual savings."
    ]
  },
  {
    id: "international",
    title: "International Playbook",
    icon: Globe,
    description: "Developed market entry blueprints for global expansion.",
    details: [
      "Oversaw Nepal launch, creating 5+ BRDs and pricing simulations.",
      "Developed market entry playbook for future international launches from scratch.",
      "Shortlisted 200+ cities across 15+ countries (EU, UK, ANZ, ASEAN) for EV entry.",
      "Handled 500+ potential partners across 40+ countries for brand localization."
    ]
  }
];

export default function Ola() {
  return (
    <div className="py-12 md:py-20 px-6 max-w-7xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-emerald-600 transition-colors mb-8 md:mb-12 group text-sm md:text-base">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Portfolio
      </Link>

      <header className="mb-12 md:mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-bold text-zinc-900 tracking-tight mb-6 leading-tight"
        >
          Ola Electric
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-zinc-600 max-w-3xl leading-relaxed"
        >
          As Program Manager, I was at the forefront of the EV revolution in India. My role involved managing large-scale infrastructure projects and executing complex GTM strategies to scale Ola's presence both domestically and internationally.
        </motion.p>
      </header>

      <div className="space-y-20 md:space-y-32">
        {projects.map((project, index) => (
          <motion.section 
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start"
          >
            <div>
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6 md:mb-8">
                <project.icon className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 md:mb-6">{project.title}</h2>
              <p className="text-lg md:text-xl text-zinc-600 mb-8 leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="bg-zinc-50 p-6 md:p-12 rounded-[32px] md:rounded-[40px] border border-zinc-100">
              <h3 className="text-xs md:text-sm font-bold text-emerald-600 uppercase tracking-widest mb-6 md:mb-8">Key Achievements</h3>
              <ul className="space-y-4 md:space-y-6">
                {project.details.map((detail, i) => (
                  <li key={i} className="flex gap-3 md:gap-4 text-zinc-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 md:mt-2.5 shrink-0"></div>
                    <span className="text-base md:text-lg leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        ))}
      </div>

      <section className="mt-20 md:mt-40 p-10 md:p-20 bg-emerald-600 rounded-[40px] md:rounded-[60px] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-emerald-500 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <Map className="w-12 h-12 md:w-16 md:h-16 text-emerald-200 mx-auto mb-6 md:mb-8" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Scaling the Future of Mobility</h2>
          <p className="text-lg md:text-xl text-emerald-50 leading-relaxed">
            From launching thousands of stores to mapping out international expansion, my time at Ola was defined by rapid execution and solving complex operational challenges at scale.
          </p>
        </div>
      </section>
    </div>
  );
}
