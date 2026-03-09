import { motion, useScroll, useSpring } from "motion/react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-emerald-600 z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main className="pt-20">
        <Outlet />
      </main>

      {/* Background Decorative Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-3xl opacity-30 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-zinc-50 rounded-full blur-3xl opacity-50 translate-y-1/2"></div>
      </div>
    </div>
  );
}
