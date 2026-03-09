import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const experiences = [
  {
    title: "Senior Manager - Strategy & Alliance",
    company: "GEON (formerly Battrixx)",
    location: "Mumbai, India",
    period: "03/2025 - Present",
    description: "Creating GTM strategy for 3W L3 channel sales across 5 cities. Initiated EV financing ecosystem for 3W market by engaging 30+ NBFCs. Defined ₹500Cr growth roadmap by launching inverter & aftermarket verticals.",
    skills: ["GTM Strategy", "EV Financing", "Growth Roadmap", "Strategic Alliances"],
    link: "/geon"
  },
  {
    title: "Program Manager - Strategy & Operations (GTM)",
    company: "Ola Electric",
    location: "Bangalore, India",
    period: "05/2021 - 02/2025",
    description: "Devised network expansion strategy driving 10% of overall sales. Enabled onboarding of 1100+ MBO partners. Coordinated the launch of 4,000 stores in one day. Facilitated nationwide expansion of 10K+ fast charging infrastructure.",
    skills: ["Network Expansion", "Sales Operations", "GTM", "International Business"],
    link: "/ola"
  },
  {
    title: "Marketing Intern (Leadership Program)",
    company: "Vodafone Idea Ltd",
    location: "Mumbai, India",
    period: "04/2020 - 06/2020",
    description: "Conceived survey design for 13K+ employees and customers, benchmarking CX practices. Designed a strategic roadmap to enhance brand image and increase market share by ~4%.",
    skills: ["Market Research", "CX Strategy", "Strategic Roadmap"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-zinc-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">Professional Journey</h2>
          <h3 className="text-5xl font-bold text-zinc-900 tracking-tight">5 Years of Impact.</h3>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-[40px] border border-zinc-200 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all group"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 text-zinc-500 text-sm font-medium mb-4">
                    <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {exp.period}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {exp.location}</span>
                  </div>
                  <h4 className="text-3xl font-bold text-zinc-900 mb-2 group-hover:text-emerald-600 transition-colors">{exp.title}</h4>
                  <p className="text-lg font-semibold text-zinc-500 mb-6">{exp.company}</p>
                  <p className="text-zinc-600 max-w-2xl leading-relaxed mb-8">{exp.description}</p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-8">
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, i) => (
                        <span key={i} className="px-4 py-2 rounded-full bg-zinc-100 text-zinc-700 text-xs font-bold uppercase tracking-wider">
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    {exp.link && (
                      <Link 
                        to={exp.link} 
                        className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:gap-3 transition-all"
                      >
                        View Projects <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
                <div className="hidden lg:flex w-24 h-24 rounded-3xl bg-emerald-50 items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  <Briefcase className="w-10 h-10" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
