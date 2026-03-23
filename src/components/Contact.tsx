import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Prepare data for Formspree
    const formspreeData = new FormData();
    formspreeData.append("name", String(data.name));
    formspreeData.append("email", String(data.email));
    formspreeData.append("subject", String(data.subject));
    formspreeData.append("message", String(data.message));
    formspreeData.append("_subject", `New Message from ${data.name}: ${data.subject}`);
    formspreeData.append("_replyto", String(data.email));

    try {
      // 1. Save to local database (ONLY if running in AI Studio dev environment)
      if (window.location.hostname.includes("run.app") || window.location.hostname.includes("localhost")) {
        await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
        }).catch(err => console.error("Local API error:", err));
      }

      // 2. Send via Formspree for email notification
      // Using the /f/ prefix which is the modern standard for Formspree
      const response = await fetch("https://formspree.io/f/purushottam.puru01@gmail.com", {
        method: "POST",
        body: formspreeData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        const result = await response.json();
        if (result.error && result.error.includes("not set up")) {
          setErrorMessage("Formspree needs confirmation. Please check purushottam.puru01@gmail.com for a confirmation email from Formspree and click 'Confirm'.");
        } else {
          setErrorMessage(result.error || "Something went wrong. Please try again.");
        }
        setStatus("error");
      }
    } catch (error) {
      setErrorMessage("Failed to connect to the server. Your message was saved locally, but email notification failed.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-emerald-600 rounded-[32px] md:rounded-[60px] p-8 md:p-24 text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-emerald-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
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
              {status === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-zinc-900 mb-4">Message Received!</h4>
                  <p className="text-zinc-600 mb-4">Your message has been saved locally.</p>
                  <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100 mb-8 max-w-md">
                    <p className="text-emerald-800 text-sm font-medium leading-relaxed">
                      <strong>Important:</strong> To receive email notifications, please check your inbox (<strong>purushottam.puru01@gmail.com</strong>) for a confirmation email from Formspree and click "Confirm".
                    </p>
                  </div>
                  <button 
                    onClick={() => setStatus("idle")}
                    className="text-emerald-600 font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] md:text-sm font-bold text-zinc-900 uppercase tracking-wider">Name</label>
                      <input 
                        required
                        name="name"
                        type="text" 
                        className="w-full px-5 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl bg-zinc-50 border border-zinc-100 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-sm md:text-base" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] md:text-sm font-bold text-zinc-900 uppercase tracking-wider">Email</label>
                      <input 
                        required
                        name="email"
                        type="email" 
                        className="w-full px-5 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl bg-zinc-50 border border-zinc-100 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-sm md:text-base" 
                        placeholder="john@example.com" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] md:text-sm font-bold text-zinc-900 uppercase tracking-wider">Subject</label>
                    <input 
                      required
                      name="subject"
                      type="text" 
                      className="w-full px-5 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl bg-zinc-50 border border-zinc-100 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all text-sm md:text-base" 
                      placeholder="Strategic Partnership" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] md:text-sm font-bold text-zinc-900 uppercase tracking-wider">Message</label>
                    <textarea 
                      required
                      name="message"
                      rows={4} 
                      className="w-full px-5 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl bg-zinc-50 border border-zinc-100 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none text-sm md:text-base" 
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-600 text-sm font-medium bg-red-50 p-4 rounded-xl">
                      <AlertCircle className="w-4 h-4" />
                      {errorMessage}
                    </div>
                  )}

                  <button 
                    disabled={status === "submitting"}
                    className="w-full bg-emerald-600 text-white py-4 md:py-5 rounded-xl md:rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 group text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Sending..." : "Send Message"}
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              )}
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
