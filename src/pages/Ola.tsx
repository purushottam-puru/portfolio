import { motion } from "motion/react";
import { ArrowLeft, Globe, Store, Network, Rocket, Map } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "charger",
    title: "Charger Network Expansion",
    icon: Network,
    description: "Scaling the Ola Hypercharger network to ensure seamless mobility for thousands of users.",
    details: [
      "Coordinated the deployment of 10,000+ fast-charging points across 100+ cities.",
      "Optimized site selection using data analytics, improving network utilization by 35%.",
      "Managed cross-functional teams for hardware installation and software integration.",
      "Reduced average downtime of chargers to less than 2% through proactive monitoring."
    ]
  },
  {
    id: "mbo",
    title: "MBO (Multi-Brand Outlet) Strategy",
    icon: Store,
    description: "Expanding reach through strategic partnerships with multi-brand retail outlets.",
    details: [
      "Developed the framework for Ola's entry into the MBO segment.",
      "Onboarded 50+ premium retail partners in Tier 1 and Tier 2 cities.",
      "Designed the training and incentive programs for MBO sales staff.",
      "Achieved a 20% increase in sales volume through the MBO channel within 4 months."
    ]
  },
  {
    id: "store",
    title: "Store Expansion",
    icon: Store,
    description: "Rapid rollout of Ola Experience Centers to provide a physical touchpoint for customers.",
    details: [
      "Led the project management for launching 4,000+ stores across India.",
      "Standardized store design and operations for rapid scalability.",
      "Reduced store setup time by 50% through process optimization.",
      "Ensured consistent brand experience across all physical touchpoints."
    ]
  },
  {
    id: "domestic",
    title: "Domestic Launch & GTM",
    icon: Rocket,
    description: "Executing the Go-To-Market strategy for new product variants in the Indian market.",
    details: [
      "Managed the launch of the Ola S1 Air and S1 Pro Gen 2.",
      "Coordinated marketing, sales, and service readiness for nationwide rollouts.",
      "Achieved 50,000+ pre-bookings within the first 24 hours of launch.",
      "Implemented a real-time feedback loop to address post-launch customer concerns."
    ]
  },
  {
    id: "international",
    title: "International Market Playbook",
    icon: Globe,
    description: "Creating the blueprint for Ola Electric's global expansion.",
    details: [
      "Conducted market entry analysis for Southeast Asia and European markets.",
      "Developed a modular GTM playbook adaptable to different regulatory environments.",
      "Identified potential local partners for distribution and service.",
      "Mapped out the logistics and supply chain requirements for international shipping."
    ]
  }
];

export default function Ola() {
  return (
    <div className="py-20 px-6 max-w-7xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-emerald-600 transition-colors mb-12 group">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Portfolio
      </Link>

      <header className="mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold text-zinc-900 tracking-tight mb-6"
        >
          Ola Electric
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-zinc-600 max-w-3xl leading-relaxed"
        >
          As Program Manager, I was at the forefront of the EV revolution in India. My role involved managing large-scale infrastructure projects and executing complex GTM strategies to scale Ola's presence both domestically and internationally.
        </motion.p>
      </header>

      <div className="space-y-32">
        {projects.map((project, index) => (
          <motion.section 
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          >
            <div>
              <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-8">
                <project.icon className="w-8 h-8" />
              </div>
              <h2 className="text-4xl font-bold text-zinc-900 mb-6">{project.title}</h2>
              <p className="text-xl text-zinc-600 mb-8 leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="bg-zinc-50 p-8 md:p-12 rounded-[40px] border border-zinc-100">
              <h3 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-8">Key Achievements</h3>
              <ul className="space-y-6">
                {project.details.map((detail, i) => (
                  <li key={i} className="flex gap-4 text-zinc-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 shrink-0"></div>
                    <span className="text-lg leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        ))}
      </div>

      <section className="mt-40 p-12 md:p-20 bg-emerald-600 rounded-[60px] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <Map className="w-16 h-16 text-emerald-200 mx-auto mb-8" />
          <h2 className="text-4xl font-bold mb-6">Scaling the Future of Mobility</h2>
          <p className="text-xl text-emerald-50 text-zinc-400 leading-relaxed">
            From launching thousands of stores to mapping out international expansion, my time at Ola was defined by rapid execution and solving complex operational challenges at scale.
          </p>
        </div>
      </section>
    </div>
  );
}
