import { motion } from "motion/react";
import { ArrowLeft, Zap, Battery, TrendingUp, Handshake, Quote } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "gtm-strategy",
    title: "GTM Strategy & Sales",
    icon: TrendingUp,
    description: "Owned GTM strategy & expansion for channel sales & inverter battery segment.",
    details: [
      "Built entry playbook driving ₹4Cr+ monthly revenue.",
      "Led P&L strategy for key mobility accounts, aligning supply chain, production, & sales to improve margins.",
      "Built & scaled strategic partnerships with channel partners (₹20L+/month sales via financing support).",
      "Led cross-functional cost optimization initiatives, reducing BOM costs by 5%."
    ]
  },
  {
    id: "financing",
    title: "EV Financing Ecosystem",
    icon: Handshake,
    description: "Built battery financing ecosystem for 3W market to drive adoption.",
    details: [
      "Engaged 30+ NBFCs on specialized financing structures.",
      "Partnered with Bajaj Finance to increase secondary sales by ~12%.",
      "Reduced financial barriers for L3 segment customers.",
      "Developed credit assessment models for first-time EV buyers."
    ]
  },
  {
    id: "partnerships",
    title: "Strategic Partnerships",
    icon: Battery,
    description: "Built & scaled strategic partnerships with recyclers and channel partners.",
    details: [
      "Established ₹1Cr+ business through recycler partnerships.",
      "Liaised with 5+ verticals to lay groundwork for new business expansion.",
      "Improved pricing competitiveness in enterprise deals through strategic alliances.",
      "Managed IB vertical (6 SKUs) and led CFT across supply chain, production & sales."
    ]
  }
];

const recommendation = {
  text: "I had the opportunity to supervise Purushottam and was consistently impressed by his proactive approach and strong analytical abilities. He brings clarity to complex problems and contributes meaningfully to strategic decisions that drive business outcomes. He led the sales strategy and planning for Geon and made a key contribution in developing and sharping the process.\n\nPurushottam is also an excellent collaborator who manages stakeholder relationships effectively and ensures that work moves forward smoothly. He takes ownership of responsibilities and delivers with reliability. He further led strategic partnerships with charging players, recyclers and several other partners which had a key impact on the growth of Geon.\n\nI would gladly recommend him as a capable, astute and dependable professional.",
  author: "Arnab Saha",
  title: "Senior Vice President, Strategy & Business Operations at Geon Energy",
  link: "https://www.linkedin.com/in/purushottam-puru/"
};

export default function Geon() {
  return (
    <div className="py-12 md:py-20 px-6 max-w-7xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-emerald-600 transition-colors mb-8 md:mb-12 group text-sm md:text-base">
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        Back to Portfolio
      </Link>

      <header className="mb-12 md:mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-7xl font-bold text-zinc-900 tracking-tight mb-6 leading-tight"
        >
          GEON <span className="text-emerald-600 block sm:inline">(formerly Battrixx)</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-zinc-600 max-w-3xl leading-relaxed"
        >
          As Senior Manager of Strategy & Alliance, I led critical initiatives to establish GEON as a leader in the EV battery and energy storage space. My focus was on building strategic partnerships and scaling aftermarket operations.
        </motion.p>
      </header>

      <div className="space-y-20 md:space-y-32 mb-20 md:mb-32">
        {projects.map((project, index) => (
          <motion.section 
            key={project.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start"
          >
            <div>
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6 md:mb-8">
                <project.icon className="w-7 h-7 md:w-8 md:h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-4 md:mb-6">{project.title}</h2>
              <p className="text-lg md:text-xl text-zinc-600 mb-8 leading-relaxed">
                {project.description}
              </p>
            </div>
            
            <div className="bg-zinc-50 p-6 md:p-12 rounded-[32px] md:rounded-[40px] border border-zinc-100">
              <h3 className="text-xs md:text-sm font-bold text-emerald-600 uppercase tracking-widest mb-6 md:mb-8">Key Achievements</h3>
              <ul className="space-y-4 md:space-y-6">
                {project.details.map((detail, i) => (
                  <li key={i} className="flex gap-3 md:gap-4 text-zinc-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 md:mt-2.5 shrink-0"></div>
                    <span className="text-base md:text-lg leading-relaxed">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        ))}
      </div>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-zinc-900 rounded-[32px] md:rounded-[48px] p-8 md:p-16 text-white relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 mb-6 md:mb-8">
            <Quote className="w-6 h-6 md:w-7 md:h-7 fill-current" />
          </div>
          
          <h2 className="text-[10px] md:text-xs font-bold text-emerald-400 uppercase tracking-[0.2em] mb-6 md:mb-8">Manager Recommendation</h2>
          
          <blockquote className="text-lg md:text-xl font-medium leading-relaxed mb-10 md:mb-12 italic text-zinc-200">
            "{recommendation.text}"
          </blockquote>
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-lg">
                {recommendation.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="text-base md:text-lg font-bold text-white">{recommendation.author}</div>
                <div className="text-xs md:text-sm text-zinc-400 font-medium">{recommendation.title}</div>
              </div>
            </div>
            <a 
              href={recommendation.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-400 font-bold hover:text-emerald-300 transition-colors text-sm md:text-base"
            >
              View on LinkedIn
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </a>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
