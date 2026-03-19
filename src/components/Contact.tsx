import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-emerald-600 rounded-[32px] md:rounded-[60px] p-8 md:p-24 text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-emerald-500 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-emerald-700 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20">
            <div>
              <h2 className="text-xs md:text-sm font-bold uppercase tracking-widest mb-4 md:mb-6 text-emerald-200">Get in Touch</h2>
              <h3 className="text-4xl md:text-7xl font-bold tracking-tight mb-8 md:mb-10 leading-tight">
                Let's build <br /> something great.
              </h3>
              <p className="text-lg md:text-xl text-emerald-100 mb-8 md:mb-12 leading-relaxed max-w-md">
                Interested in working together or just want to say hi? I'm always open to discussing new projects and strategic opportunities.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-emerald-500 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[10px] md:text-sm text-emerald-200 font-bold uppercase tracking-wider">Email</div>
                    <div className="text-base md:text-xl font-bold truncate">purushottam.puru01@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-emerald-500 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] md:text-sm text-emerald-200 font-bold uppercase tracking-wider">Phone</div>
                    <div className="text-base md:text-xl font-bold">+91 88638 08811</div>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-emerald-500 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] md:text-sm text-emerald-200 font-bold uppercase tracking-wider">Location</div>
                    <div className="text-base md:text-xl font-bold">Pune, India</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-[32px] md:rounded-[40px] p-6 md:p-10 shadow-2xl">
              <form className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] md:text-sm font-bold text-zinc-900 uppercase tracking-wider">Name</label>
                    <input type="text" className="w-full px-5 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl bg-zinc-50 border border-zinc-100 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-sm md:text-base" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] md:text-sm font-bold text-zinc-900 uppercase tracking-wider">Email</label>
                    <input type="email" className="w-full px-5 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl bg-zinc-50 border border-zinc-100 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-sm md:text-base" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] md:text-sm font-bold text-zinc-900 uppercase tracking-wider">Subject</label>
                  <input type="text" className="w-full px-5 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl bg-zinc-50 border border-zinc-100 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-sm md:text-base" placeholder="Strategic Partnership" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] md:text-sm font-bold text-zinc-900 uppercase tracking-wider">Message</label>
                  <textarea rows={4} className="w-full px-5 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl bg-zinc-50 border border-zinc-100 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none text-sm md:text-base" placeholder="Tell me about your project..."></textarea>
                </div>
                <button className="w-full bg-emerald-600 text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 group text-sm md:text-base">
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-12 md:mt-20 pt-10 border-t border-zinc-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-zinc-400 text-xs md:text-sm font-medium text-center md:text-left">
            © 2026 Purushottam. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a key={item} href="#" className="text-xs md:text-sm text-zinc-400 hover:text-emerald-600 transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
