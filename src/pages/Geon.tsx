import { motion } from "motion/react";
import { ArrowLeft, Zap, Battery, TrendingUp, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "gtm-strategy",
    title: "GTM Strategy & Sales",
    icon: TrendingUp,
    description: "Created GTM strategy for Channel sales & Inverter Battery segment.",
    details: [
      "Defined expansion playbooks leading to 5cr+ sales per month.",
      "Owned sales strategy & P&L for mobility accounts.",
      "Managed IB vertical (6 SKUs) and led CFT across supply chain, production & sales.",
      "Established channel sales structures across key regional clusters."
    ]
  },
  {
    id: "financing",
    title: "EV Financing Ecosystem",
    icon: Handshake,
    description: "Built battery financing ecosystem for 3W market to drive adoption.",
    details: [
      "Engaged 30+ NBFCs on specialized financing structures.",
      "Partnered with BFL to grow secondary sales by ~12%.",
      "Reduced financial barriers for L3 segment customers.",
      "Developed credit assessment models for first-time EV buyers."
    ]
  },
  {
    id: "bom-optimization",
    title: "BOM Cost Optimization",
    icon: Zap,
    description: "Led cross-functional teams to optimize BOM costs by 5%.",
    details: [
      "Drove cost efficiency through strategic sourcing and design optimization.",
      "Enabled competitive pricing in key accounts and bulk deals.",
      "Streamlined procurement processes with R&D and Supply Chain teams.",
      "Identified alternative component suppliers to mitigate supply risks."
    ]
  }
];

export default function Geon() {
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
          GEON <span className="text-emerald-600 block sm:inline">(formerly Battrixx)</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-zinc-600 max-w-3xl leading-relaxed"
        >
          As Senior Manager of Strategy & Alliance, I led critical initiatives to establish GEON as a leader in the EV battery and energy storage space. My focus was on building strategic partnerships and scaling aftermarket operations.
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

    </div>
  );
}
