import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const experiences = [
  {
    title: "Senior Manager - Strategy & Alliance",
    company: "GEON (formerly Battrixx)",
    location: "Pune, MH",
    period: "03/2025 - Present",
    description: "Leading GTM strategy for 3W L3 channel sales & Inverter Battery segment. Initiated EV financing ecosystem by engaging 30+ NBFCs. Optimizing BOM costs by 5% through cross-functional coordination.",
    skills: ["GTM Strategy", "EV Financing", "BOM Optimization", "Strategic Alliances"],
    link: "/geon"
  },
  {
    title: "Program Manager - Strategy & Operations",
    company: "Ola Electric",
    location: "Bangalore, KA",
    period: "05/2021 - 02/2025",
    description: "Led network expansion strategy and MBO project driving 10% of overall sales. Coordinated the launch of 4,000 stores in one day. Executed nationwide expansion of 4K+ fast charging infrastructure.",
    skills: ["Network Expansion", "MBO Strategy", "Infrastructure Scaling", "GTM Strategy"],
    link: "/ola"
  },
  {
    title: "Marketing Intern",
    company: "Vodafone Idea Ltd",
    location: "Mumbai, India",
    period: "2020",
    description: "Designed CX survey for 13K+ stakeholders; analyzed 5.1K+ NPS responses and recommended initiatives to improve brand perception and market share.",
    skills: ["CX Survey", "NPS Analysis", "Market Research"]
  },
  {
    title: "Marketing Intern",
    company: "PatnaBeats",
    location: "Patna, India",
    period: "2018",
    description: "Analyzed customer & social media data to identify target segments; executed digital strategies increasing revenue by 12% and visibility by 18%.",
    skills: ["Digital Strategy", "Data Analysis", "Social Media"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-zinc-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20 text-center">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">Professional Journey</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight">5 Years of Impact.</h3>
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 md:p-10 rounded-[32px] md:rounded-[40px] border border-zinc-200 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all group flex flex-col h-full relative overflow-hidden"
            >
              {/* Decorative background icon for desktop */}
              <div className="absolute -right-4 -top-4 text-zinc-50 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity hidden lg:block">
                <Briefcase className="w-40 h-40" />
              </div>

              <div className="flex flex-col h-full relative z-10">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-zinc-500 text-xs md:text-sm font-medium mb-6">
                    <span className="flex items-center gap-1.5 bg-zinc-50 px-3 py-1 rounded-full"><Calendar className="w-3.5 h-3.5 text-emerald-600" /> {exp.period}</span>
                    <span className="flex items-center gap-1.5 bg-zinc-50 px-3 py-1 rounded-full"><MapPin className="w-3.5 h-3.5 text-emerald-600" /> {exp.location}</span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2 group-hover:text-emerald-600 transition-colors">{exp.title}</h4>
                  <p className="text-base md:text-lg font-semibold text-zinc-500 mb-4 md:mb-6">{exp.company}</p>
                  <p className="text-zinc-600 leading-relaxed mb-8 text-sm md:text-base">{exp.description}</p>
                </div>
                
                <div className="mt-auto pt-8 border-t border-zinc-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-[10px] md:text-xs font-bold uppercase tracking-wider">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {exp.link && (
                    <Link 
                      to={exp.link} 
                      className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:gap-3 transition-all text-sm md:text-base whitespace-nowrap bg-emerald-50 px-4 py-2 rounded-xl"
                    >
                      View Projects <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
