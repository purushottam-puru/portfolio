import { motion } from "motion/react";
import { Heart } from "lucide-react";

export default function Volunteering() {
  return (
    <section className="py-20 bg-emerald-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-[40px] p-10 md:p-16 border border-emerald-100 shadow-sm flex flex-col md:flex-row items-center gap-12">
          <div className="w-24 h-24 rounded-3xl bg-emerald-600 flex items-center justify-center text-white shrink-0 shadow-lg shadow-emerald-200">
            <Heart className="w-12 h-12" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2">Giving Back</h2>
            <h3 className="text-3xl font-bold text-zinc-900 mb-4">Peer Mentor @ The Spinal Foundation</h3>
            <p className="text-lg text-zinc-600 leading-relaxed max-w-3xl">
              Since 2015, I have been guiding individuals with spinal injuries through one-on-one sessions and organized activities. Collaborating with therapists to support the SCI community and foster resilience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
