import { motion } from "motion/react";
import { GraduationCap, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">Academic Background</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight mb-8">MBA & Beyond.</h3>
            <p className="text-lg md:text-xl text-zinc-600 mb-12 leading-relaxed">
              Strong management foundation from IIM Bangalore, with a focus on practical execution and measurable results.
            </p>
            
            <div className="space-y-6 md:space-y-8">
              <div className="flex flex-col sm:flex-row gap-6 p-6 md:p-8 rounded-3xl border border-zinc-100 bg-white shadow-sm hover:shadow-md transition-all">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                  <GraduationCap className="w-7 h-7 md:w-8 md:h-8" />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-zinc-900 mb-1">Master of Business Administration</h4>
                  <p className="text-zinc-500 font-semibold mb-1 text-sm md:text-base">Indian Institute of Management Bangalore | IIMB</p>
                  <p className="text-emerald-600 font-bold text-xs md:text-sm mb-3 uppercase tracking-wider">06/2019 - 04/2021</p>
                  <div className="space-y-4">
                    <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
                      Specialized in <span className="text-emerald-600 font-bold">Strategy and Operations</span>. This degree fundamentally shifted my approach from purely execution-focused to strategic decision-making, leveraging data-driven frameworks to solve complex business problems.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 p-6 md:p-8 rounded-3xl border border-zinc-100 bg-white shadow-sm hover:shadow-md transition-all">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-zinc-50 flex items-center justify-center text-zinc-600 shrink-0">
                  <BookOpen className="w-7 h-7 md:w-8 md:h-8" />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-zinc-900 mb-1">Bachelor of Mass Communication</h4>
                  <p className="text-zinc-500 font-semibold mb-1 text-sm md:text-base">L. S. College, Muzaffarpur</p>
                  <p className="text-emerald-600 font-bold text-xs md:text-sm mb-2 uppercase tracking-wider">07/2015 - 04/2019</p>
                  <p className="text-zinc-600 text-xs md:text-sm">Foundational degree in mass communication.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="bg-zinc-50 p-6 md:p-10 rounded-[32px] md:rounded-[40px] border border-zinc-100">
              <h4 className="text-xl md:text-2xl font-bold text-zinc-900 mb-8">Professional Certifications</h4>
              <div className="space-y-4 md:space-y-6">
                {[
                  { title: "Business Strategy Specialization", issuer: "Coursera" },
                  { title: "Analytics for Decision Making", issuer: "Coursera" },
                  { title: "Google Project Management", issuer: "Coursera" }
                ].map((cert, i) => (
                  <div key={i} className="p-5 md:p-6 rounded-2xl bg-white border border-zinc-100 hover:border-emerald-200 transition-all shadow-sm">
                    <div className="text-[10px] md:text-sm font-bold text-emerald-600 mb-1">{cert.issuer}</div>
                    <div className="font-bold text-zinc-900 text-base md:text-lg leading-tight">{cert.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
