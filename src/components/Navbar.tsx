import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tighter text-zinc-900 uppercase">
          PURUSHOTTAM<span className="text-emerald-600">.</span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {["About", "Experience", "Education", "Skills", "Contact"].map((item) => (
            <Link 
              key={item} 
              to={isHome ? `#${item.toLowerCase()}` : `/#${item.toLowerCase()}`}
              className="text-sm font-medium text-zinc-600 hover:text-emerald-600 transition-colors"
            >
              {item}
            </Link>
          ))}
          <div className="h-4 w-[1px] bg-zinc-200"></div>
          <Link to="/geon" className="text-sm font-medium text-zinc-600 hover:text-emerald-600 transition-colors">GEON</Link>
          <Link to="/ola" className="text-sm font-medium text-zinc-600 hover:text-emerald-600 transition-colors">Ola</Link>
          <a 
            href="https://www.linkedin.com/in/purushottam-puru/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all inline-block"
          >
            View LinkedIn
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
