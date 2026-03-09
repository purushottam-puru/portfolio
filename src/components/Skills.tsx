import { motion } from "motion/react";

const skillCategories = [
  {
    category: "Strategy",
    skills: ["Market Research", "Business Strategy", "Growth Strategy", "Competitive Benchmarking", "Market Expansion"]
  },
  {
    category: "Operations",
    skills: ["Process Optimisation", "Operations Management", "Program Management", "Lead Management", "Cross-functional Alignment"]
  },
  {
    category: "Analytics",
    skills: ["Data Analytics", "Statistical Analysis", "Google Analytics", "Tableau", "Decision Modeling"]
  },
  {
    category: "Leadership",
    skills: ["Team Leadership", "Collaboration", "Strategic Alliances", "Stakeholder Engagement", "CX Culture"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 bg-zinc-900 text-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-4">Expertise</h2>
          <h3 className="text-5xl font-bold tracking-tight">Core Competencies.</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h4 className="text-xl font-bold mb-8 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-emerald-500"></span>
                {cat.category}
              </h4>
              <ul className="space-y-4">
                {cat.skills.map((skill, i) => (
                  <li key={i} className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-32 pt-20 border-t border-zinc-800 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Years Experience", value: "5+" },
            { label: "Major Projects", value: "12+" },
            { label: "Sales Growth", value: "10%" },
            { label: "Stores Launched", value: "4K+" }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl font-bold text-emerald-500 mb-2">{stat.value}</div>
              <div className="text-sm text-zinc-500 uppercase tracking-widest font-bold">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
