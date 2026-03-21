import { motion } from "motion/react";

const skillCategories = [
  {
    category: "Strategic",
    skills: ["GTM Strategy", "Business Model Design", "Zero-Based Budgeting", "Market Sizing & TAM Analysis", "Market Expansion"]
  },
  {
    category: "Analytical",
    skills: ["Data Analytics", "Power BI", "Tableau", "SQL", "Google Sheets", "JIRA", "MIS"]
  },
  {
    category: "Operational",
    skills: ["Program Management", "Process Optimization", "Process Excellence", "Agile/Scrum", "BOM Optimization"]
  },
  {
    category: "Leadership",
    skills: ["Conflict Resolution", "Executive Presentation", "CFTs", "Vendor Negotiation", "Stakeholder Alignment"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-zinc-900 text-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20">
          <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-4">Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight">Core Competencies.</h3>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="text-lg md:text-xl font-bold mb-6 md:mb-8 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-emerald-500"></span>
                {cat.category}
              </h4>
              <ul className="space-y-3 md:space-y-4">
                {cat.skills.map((skill, i) => (
                  <li key={i} className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group text-sm md:text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 md:mt-32 pt-12 md:pt-20 border-t border-zinc-800 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Years Experience", value: "5+" },
            { label: "Partners Onboarded", value: "1,100+" },
            { label: "Inverter Business", value: "₹4 Cr+" },
            { label: "Process Optimizations", value: "10+" }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl md:text-4xl font-bold text-emerald-500 mb-2">{stat.value}</div>
              <div className="text-[10px] md:text-sm text-zinc-500 uppercase tracking-widest font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
