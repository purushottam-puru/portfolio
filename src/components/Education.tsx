import { motion } from "motion/react";
import { GraduationCap, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">Academic Background</h2>
            <h3 className="text-5xl font-bold text-zinc-900 tracking-tight mb-8">MBA & Beyond.</h3>
            <p className="text-xl text-zinc-600 mb-12 leading-relaxed">
              A solid foundation in business strategy, financial modeling, and leadership. My academic journey has been focused on bridging the gap between theory and real-world application.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6 p-8 rounded-3xl border border-zinc-100 bg-white shadow-sm hover:shadow-md transition-all">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-zinc-900 mb-1">Master of Business Administration (MBA)</h4>
                  <p className="text-zinc-500 font-semibold mb-2">IIM Bangalore</p>
                  <p className="text-zinc-600 text-sm">Focus on practical execution and measurable results. 2019 - 2021.</p>
                </div>
              </div>
              
              <div className="flex gap-6 p-8 rounded-3xl border border-zinc-100 bg-white shadow-sm hover:shadow-md transition-all">
                <div className="w-16 h-16 rounded-2xl bg-zinc-50 flex items-center justify-center text-zinc-600 shrink-0">
                  <BookOpen className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-zinc-900 mb-1">Bachelor of Mass Communication (BMC)</h4>
                  <p className="text-zinc-500 font-semibold mb-2">L. S. College, Muzaffarpur</p>
                  <p className="text-zinc-600 text-sm">Foundational degree in communication and media. 2015 - 2019.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="bg-zinc-50 p-10 rounded-[40px] border border-zinc-100">
              <h4 className="text-2xl font-bold text-zinc-900 mb-8">Professional Certifications</h4>
              <div className="space-y-6">
                {[
                  { title: "Business Strategy Specialization", issuer: "Coursera" },
                  { title: "Analytics for Decision Making", issuer: "Coursera" },
                  { title: "Google Project Management", issuer: "Coursera" }
                ].map((cert, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white border border-zinc-100 hover:border-emerald-200 transition-all shadow-sm">
                    <div className="text-sm font-bold text-emerald-600 mb-1">{cert.issuer}</div>
                    <div className="font-bold text-zinc-900 text-lg">{cert.title}</div>
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
