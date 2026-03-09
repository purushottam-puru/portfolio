import { motion } from "motion/react";
import { ArrowLeft, Zap, Battery, TrendingUp, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "financing",
    title: "Financing Tie-up",
    icon: Handshake,
    description: "Strategic collaboration with financial institutions to enable easy credit for EV adoption.",
    details: [
      "Secured partnerships with 5+ leading NBFCs and banks.",
      "Reduced processing time for loan approvals by 40%.",
      "Enabled flexible EMI options for e-rickshaw drivers, increasing sales conversion by 25%.",
      "Developed a risk assessment framework for EV asset financing."
    ]
  },
  {
    id: "aftermarket",
    title: "Aftermarket Launch & Growth",
    icon: Zap,
    description: "Launch and expansion of high-performance inverter and e-rickshaw batteries.",
    details: [
      "Spearheaded the GTM strategy for the new range of inverter batteries.",
      "Established a distribution network of 200+ dealers within the first 6 months.",
      "Achieved 15% market share in the target regional clusters.",
      "Implemented a digital warranty tracking system for improved customer trust."
    ]
  },
  {
    id: "e-rickshaw",
    title: "E-Rickshaw Battery Growth",
    icon: Battery,
    description: "Scaling the e-rickshaw battery segment through product innovation and service excellence.",
    details: [
      "Optimized the supply chain to ensure 98% product availability across key hubs.",
      "Launched a 'Battery Health Check' program that reduced warranty claims by 12%.",
      "Collaborated with R&D to improve cycle life by 20% based on field feedback.",
      "Designed a loyalty program for fleet operators."
    ]
  }
];

export default function Geon() {
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
          GEON <span className="text-emerald-600">(formerly Battrixx)</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-zinc-600 max-w-3xl leading-relaxed"
        >
          As Senior Manager of Strategy & Alliance, I led critical initiatives to establish GEON as a leader in the EV battery and energy storage space. My focus was on building strategic partnerships and scaling aftermarket operations.
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

      <section className="mt-40 p-12 md:p-20 bg-zinc-900 rounded-[60px] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <TrendingUp className="w-16 h-16 text-emerald-500 mx-auto mb-8" />
          <h2 className="text-4xl font-bold mb-6">Driving Growth & Innovation</h2>
          <p className="text-xl text-zinc-400 leading-relaxed">
            The initiatives at GEON resulted in a 30% increase in overall market reach and established a robust foundation for the company's long-term strategy in the green energy sector.
          </p>
        </div>
      </section>
    </div>
  );
}
