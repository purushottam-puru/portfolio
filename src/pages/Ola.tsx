import { motion } from "motion/react";
import { ArrowLeft, Globe, Store, Network, Rocket, Map } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "network",
    title: "Network Expansion & MBO",
    icon: Network,
    description: "Executed pan-India rollout of 4,000 stores and Multi-Brand Outlet (MBO) strategy.",
    details: [
      "Launched 207 stores in 2 months with 100% on-time delivery for Rajasthan region.",
      "Designed multi-brand outlet expansion contributing ~10% of total sales.",
      "Built automated lead management & payment systems; onboarded 1,100+ partners in 2 months.",
      "Improved lead-to-onboarding conversion by ~20% through process automation."
    ]
  },
  {
    id: "charging",
    title: "Charging Infrastructure",
    icon: Map,
    description: "Led deployment strategy for 4K+ fast chargers nationwide for fleet business.",
    details: [
      "Managed vendors, infra readiness, and operational KPIs for nationwide rollout.",
      "Developed real-time dashboards tracking utilization, uptime, & operational metrics.",
      "Improved network efficiency and reduced downtime through data-driven monitoring.",
      "Spearheaded nationwide rollout of 4K+ fast chargers in 4 months for last-mile fleet. [View Capacity Planner](/capacity)"
    ]
  },
  {
    id: "international",
    title: "International GTM Strategy",
    icon: Globe,
    description: "Developed international GTM and market entry strategy across EU, ANZ, ASEAN, & SAARC regions.",
    details: [
      "Defined pricing, margin, and distribution models for international markets.",
      "Built data-backed expansion roadmap with ~1M unit sales potential over 3 years.",
      "Shortlisted 200+ cities across 15+ countries leveraging TAM/SAM & unit economics.",
      "Evaluated 500+ potential partners across 40+ countries assessing strategic alignment.",
      "Represented Ola at EICMA (Milan) & NADA (Nepal) to lay groundwork for entry."
    ]
  },
  {
    id: "domestic-gtm",
    title: "Domestic GTM Strategy",
    icon: Rocket,
    description: "Launched industry-first D2C sales model and domestic product strategies.",
    details: [
      "Enabled ₹80Cr GMV in the first 2 months across 3,600+ pin codes.",
      "Designed end-to-end operating model across digital, field ops, service, & CX support.",
      "Slashed 10K+ ticket backlog by 50% within a week by syncing 5 workstreams.",
      "Redesigned allocation logic in SAP, improving test ride fulfilment from 65% → 82% and saving ₹2Cr annually."
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
                {project.details.map((detail, i) => {
                  const linkMatch = typeof detail === 'string' ? detail.match(/\[(.*?)\]\((.*?)\)/) : null;
                  return (
                    <li key={i} className="flex gap-3 md:gap-4 text-zinc-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 md:mt-2.5 shrink-0"></div>
                      <span className="text-base md:text-lg leading-relaxed">
                        {linkMatch ? (
                          <>
                            {detail.split(linkMatch[0])[0]}
                            <Link to={linkMatch[2]} className="text-emerald-600 font-bold hover:underline">
                              {linkMatch[1]}
                            </Link>
                            {detail.split(linkMatch[0])[1]}
                          </>
                        ) : detail}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
