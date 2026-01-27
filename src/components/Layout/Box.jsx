import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus } from "lucide-react";

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative flex-1 bg-[#24282d] rounded-3xl shadow-2xl overflow-hidden min-h-[500px] border border-white/5 transition-all duration-300">
      <button
        className="absolute top-4 right-4 z-20 p-2 bg-[#1a1d21] rounded-xl text-yellow-500 hover:scale-110 active:scale-95 transition-all shadow-lg border border-white/5"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? (
          <Minus size={18} strokeWidth={3} />
        ) : (
          <Plus size={18} strokeWidth={3} />
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-full"
          >
            <div className="p-4 h-full">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Box;
