import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Linkedin, Github } from "lucide-react";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = ["About", "Experience", "Education", "Skills", "Contact"];

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

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
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
          <Link to="/capacity" className="text-sm font-medium text-zinc-600 hover:text-emerald-600 transition-colors">Capacity</Link>
          
          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/purushottam-puru"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-zinc-600 hover:text-emerald-600 transition-colors"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/purushottam-puru/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all inline-block"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-zinc-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-zinc-100 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                <Link 
                  key={item} 
                  to={isHome ? `#${item.toLowerCase()}` : `/#${item.toLowerCase()}`}
                  className="text-lg font-bold text-zinc-900"
                >
                  {item}
                </Link>
              ))}
              <div className="h-[1px] bg-zinc-100"></div>
              <Link to="/geon" className="text-lg font-bold text-zinc-900">GEON Projects</Link>
              <Link to="/ola" className="text-lg font-bold text-zinc-900">Ola Projects</Link>
              <Link to="/capacity" className="text-lg font-bold text-zinc-900">Capacity Planner</Link>
              
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="https://github.com/purushottam-puru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-100 text-zinc-900 px-6 py-4 rounded-2xl text-center font-bold flex items-center justify-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/purushottam-puru/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-zinc-900 text-white px-6 py-4 rounded-2xl text-center font-bold flex items-center justify-center gap-2"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
