import { motion } from "motion/react";
import { ArrowRight, Linkedin, Mail, Twitter } from "lucide-react";

export default function Hero() {
  return (
    <section id="about" className="pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for Strategic Roles
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-zinc-900 mb-8 leading-[0.9]">
          Operations, Strategy <br />
            <span className="text-zinc-400">& Growth Expert.</span>
          </h1>
          <p className="text-xl text-zinc-600 max-w-lg mb-10 leading-relaxed">
            IIM Bangalore MBA with experience across the EV ecosystem. Expert in strategy, operations, market expansion, and process optimization to drive growth and efficiency.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 group">
              View Experience
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <div className="flex items-center gap-4 ml-2">
              <a 
                href="https://www.linkedin.com/in/purushottam-puru/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-zinc-50 hover:border-zinc-300 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:purushottam.puru01@gmail.com" 
                className="w-12 h-12 rounded-2xl border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-zinc-50 hover:border-zinc-300 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-[40px] overflow-hidden bg-zinc-100 border border-zinc-200 shadow-2xl">
            <img 
              src="https://picsum.photos/seed/purushottam/800/1000" 
              alt="Purushottam" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl border border-zinc-100 max-w-[200px]">
            <div className="text-3xl font-bold text-zinc-900">EV</div>
            <div className="text-sm text-zinc-500 font-medium">Ecosystem Specialist</div>
          </div>
          <div className="absolute -top-8 -right-8 bg-emerald-600 p-6 rounded-3xl shadow-xl text-white max-w-[200px]">
            <div className="text-3xl font-bold">IIM-B</div>
            <div className="text-sm opacity-80 font-medium">MBA Graduate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
