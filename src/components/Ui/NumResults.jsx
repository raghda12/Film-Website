import { motion } from "framer-motion";

function NumResults({ movies }) {
  const count = movies?.length || 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="hidden md:flex items-center gap-2 px-4 py-1.5 bg-[#1a1d21]/50 border border-white/5 rounded-full shadow-inner"
    >
      <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">
        Found
      </span>

      <span className="flex items-center justify-center min-w-[24px] px-1 text-sm font-black text-yellow-400 font-mono">
        {count}
      </span>

      <span className="text-slate-400 text-xs font-bold uppercase tracking-widest">
        Results
      </span>

      <div className="relative flex h-2 w-2 ml-1">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </div>
    </motion.div>
  );
}

export default NumResults;
