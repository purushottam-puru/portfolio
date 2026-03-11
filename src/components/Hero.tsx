import { motion } from "motion/react";
import { ArrowRight, Linkedin, Mail, Twitter } from "lucide-react";

export default function Hero() {
  return (
    <section id="about" className="pt-32 md:pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-[10px] md:text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for Strategic Roles
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight text-zinc-900 mb-8 leading-[1.1] md:leading-[1]">
            Purushottam<span className="text-emerald-600">.</span>
            <br />
            <span className="text-zinc-400 text-3xl sm:text-5xl md:text-6xl block mt-2">Operations, Strategy & Growth Expert</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mb-10 leading-relaxed mx-auto lg:mx-0">
            IIM Bangalore MBA with 5+ years of experience across the EV ecosystem. Expert in strategy, operations, market expansion, and process optimization to drive high-impact growth.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <a 
              href="#experience"
              className="w-full sm:w-auto bg-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 group"
            >
              View Experience
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-4">
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
          className="lg:col-span-5 relative max-w-md mx-auto lg:max-w-none order-1 lg:order-2"
        >
          <div className="aspect-[4/5] rounded-[32px] md:rounded-[40px] overflow-hidden bg-zinc-100 border border-zinc-200 shadow-2xl relative group">
            <img 
              src="https://picsum.photos/seed/purushottam/800/1000" 
              alt="Purushottam" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </div>
          <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 bg-white p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl border border-zinc-100 max-w-[140px] md:max-w-[200px] z-20">
            <div className="text-xl md:text-3xl font-bold text-zinc-900">EV</div>
            <div className="text-[10px] md:text-sm text-zinc-500 font-medium leading-tight">Ecosystem Specialist</div>
          </div>
          <div className="absolute -top-4 -right-4 md:-top-8 md:-right-8 bg-emerald-600 p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-xl text-white max-w-[140px] md:max-w-[200px] z-20">
            <div className="text-xl md:text-3xl font-bold">IIM-B</div>
            <div className="text-[10px] md:text-sm opacity-80 font-medium leading-tight">MBA Graduate</div>
          </div>
          
          {/* Desktop Decorative Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-emerald-50 rounded-full blur-3xl -z-10 opacity-50 hidden lg:block"></div>
        </motion.div>
      </div>
    </section>
  );
}
