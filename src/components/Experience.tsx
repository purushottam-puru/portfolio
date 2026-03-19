import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const fullTime = [
  {
    title: "Senior Manager - Strategy and Operations",
    company: "GEON Energy (Formerly Battrixx)",
    location: "Pune, India",
    period: "03/2025 - Present",
    description: "Creating GTM strategy for Channel sales & Inverter Battery segment; defined expansion playbooks leading to 5cr+ sales / month. Managing IB vertical (6 SKUs) and building financing ecosystem with 30+ NBFCs. Leading cross-functional teams to optimize BOM costs by 5%, driving cost efficiency and enabling competitive pricing in key accounts.",
    skills: ["GTM Strategy", "P&L Management", "BOM Optimization", "Financing Ecosystem"],
    link: "/geon"
  },
  {
    title: "Manager - Strategy and Operations",
    company: "Ola Electric Technologies",
    location: "Bangalore, India",
    period: "05/2021 - 02/2025",
    description: (
      <div className="space-y-4">
        <p>Spearheaded pan-India launch of 4,000 stores and achieved 100% on-time launch of 207 stores in 2 months for RJ region. Executed MBO project contributing 10% of overall sales.</p>
        <p>
          Spearheaded nationwide rollout of 4K+ fast chargers in 4 months for last-mile fleet. Built real-time dashboards tracking 5+ KPIs to maximize charger utilization.
          <Link to="/capacity" className="inline-flex items-center gap-1 text-emerald-600 font-bold hover:underline ml-2">
            [View Capacity Planner]
          </Link>
        </p>
        <p>Drove operational transformation by automating lead management and payment processes, onboarding 1,100+ MBO partners in record 2 months. Built dashboards for 900+ COCO stores to improve sales process visibility.</p>
      </div>
    ),
    skills: ["Program Management", "Network Expansion", "Operational Transformation", "GTM Strategy"],
    link: "/ola"
  }
];

const recommendation = {
  text: "Purushottam is a highly driven and results-oriented professional. His ability to lead cross-functional teams and execute complex strategies at scale was instrumental in our growth at Ola Electric.",
  author: "Manager, Ola Electric",
  link: "https://www.linkedin.com/in/purushottam-puru/"
};

const internships = [
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
          <h3 className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight">Full-Time Impact.</h3>
        </div>
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-20">
          {fullTime.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 md:p-10 rounded-[32px] md:rounded-[40px] border border-zinc-200 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all group flex flex-col h-full relative overflow-hidden"
            >
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
                  <div className="text-zinc-600 leading-relaxed mb-8 text-sm md:text-base">{exp.description}</div>
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

        {/* Recommendation Section */}
        <div className="mt-20 md:mt-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-emerald-600 p-10 md:p-16 rounded-[40px] md:rounded-[60px] text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <div className="text-4xl md:text-6xl font-serif italic mb-8 opacity-50">"</div>
              <p className="text-xl md:text-3xl font-medium leading-relaxed mb-10">
                {recommendation.text}
              </p>
              <div className="flex flex-col items-center gap-4">
                <div className="font-bold text-lg md:text-xl">{recommendation.author}</div>
                <a 
                  href={recommendation.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-100 hover:text-white transition-colors text-sm md:text-base underline underline-offset-4"
                >
                  View on LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Internships Section */}
        <div className="mt-20">
          <div className="mb-12">
            <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2">Early Career</h4>
            <h3 className="text-2xl md:text-3xl font-bold text-zinc-900">Internships</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internships.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/50 p-6 rounded-3xl border border-zinc-200 hover:border-emerald-200 transition-all group"
              >
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-zinc-400 text-[10px] md:text-xs font-medium mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {exp.period}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {exp.location}</span>
                </div>
                <h5 className="text-lg md:text-xl font-bold text-zinc-900 mb-1">{exp.title}</h5>
                <p className="text-sm md:text-base font-semibold text-zinc-500 mb-3">{exp.company}</p>
                <p className="text-zinc-600 text-xs md:text-sm leading-relaxed mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="px-2 py-1 rounded-md bg-zinc-100 text-zinc-500 text-[9px] md:text-[10px] font-bold uppercase tracking-wider">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
