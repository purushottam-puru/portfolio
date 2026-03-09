import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-emerald-600 rounded-[60px] p-12 md:p-24 text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-700 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest mb-6 text-emerald-200">Get in Touch</h2>
              <h3 className="text-5xl md:text-7xl font-bold tracking-tight mb-10 leading-tight">
                Let's build <br /> something great.
              </h3>
              <p className="text-xl text-emerald-100 mb-12 leading-relaxed max-w-md">
                Interested in working together or just want to say hi? I'm always open to discussing new projects and strategic opportunities.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-emerald-200 font-bold uppercase tracking-wider">Email</div>
                    <div className="text-xl font-bold">purushottam.puru01@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-emerald-200 font-bold uppercase tracking-wider">Phone</div>
                    <div className="text-xl font-bold">+91 88638 08811</div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-emerald-200 font-bold uppercase tracking-wider">Location</div>
                    <div className="text-xl font-bold">Bangalore, India</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-[40px] p-10 shadow-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Name</label>
                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-zinc-50 border border-zinc-100 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Email</label>
                    <input type="email" className="w-full px-6 py-4 rounded-2xl bg-zinc-50 border border-zinc-100 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Subject</label>
                  <input type="text" className="w-full px-6 py-4 rounded-2xl bg-zinc-50 border border-zinc-100 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" placeholder="Strategic Partnership" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider">Message</label>
                  <textarea rows={4} className="w-full px-6 py-4 rounded-2xl bg-zinc-50 border border-zinc-100 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none" placeholder="Tell me about your project..."></textarea>
                </div>
                <button className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 group">
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-zinc-100 flex flex-col md:row items-center justify-between gap-6">
          <div className="text-zinc-400 text-sm font-medium">
            © 2026 Purushottam. All rights reserved.
          </div>
          <div className="flex gap-8">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a key={item} href="#" className="text-sm text-zinc-400 hover:text-emerald-600 transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
