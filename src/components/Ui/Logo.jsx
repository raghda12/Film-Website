import { Popcorn } from "lucide-react";
import { motion } from "framer-motion";

function Logo() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-3 cursor-pointer group"
    >
      <div className="relative">
        <div className="bg-yellow-400 p-2.5 rounded-2xl shadow-lg shadow-yellow-400/20 group-hover:rotate-12 transition-transform duration-300">
          <Popcorn className="text-[#1a1d21]" size={28} strokeWidth={2.5} />
        </div>

        <div className="absolute inset-0 bg-yellow-400/30 blur-xl rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      <h1 className="text-2xl font-black text-white tracking-tighter uppercase italic flex items-center">
        use
        <span className="text-yellow-400">Popcorn</span>
      </h1>
    </motion.div>
  );
}

export default Logo;
