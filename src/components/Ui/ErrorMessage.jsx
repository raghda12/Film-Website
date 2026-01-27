import { AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

function ErrorMessage({ message }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex items-center gap-4 p-6 m-4 bg-red-500/10 border border-red-500/20 rounded-2xl shadow-lg"
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-red-500/20 text-red-500 shrink-0">
        <AlertCircle size={28} />
      </div>

      <div className="flex flex-col gap-1">
        <h4 className="font-bold text-red-500 uppercase tracking-wider text-xs">
          Error Detected
        </h4>
        <p className="text-slate-200 font-medium leading-relaxed">{message}</p>
      </div>
    </motion.div>
  );
}

export default ErrorMessage;
