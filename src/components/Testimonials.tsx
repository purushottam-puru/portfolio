import { motion } from "motion/react";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20 text-center">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">Recognition</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight">Manager Recommendations.</h3>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-50 p-8 md:p-16 rounded-[40px] border border-zinc-100 relative"
          >
            <Quote className="w-12 h-12 text-emerald-100 absolute top-8 left-8 md:top-12 md:left-12" />
            
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-zinc-700 leading-relaxed italic mb-10">
                "Purushottam is a highly strategic and execution-focused leader. His ability to navigate complex operational challenges while maintaining a clear focus on growth and efficiency was instrumental during our pan-India expansion. He possesses a rare blend of analytical depth and practical leadership that delivers measurable impact."
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
                  M
                </div>
                <div>
                  <div className="font-bold text-zinc-900">Manager Recommendation</div>
                  <div className="text-sm text-zinc-500">LinkedIn Recommendation</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
