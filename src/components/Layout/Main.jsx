import { motion } from "framer-motion";

function Main({ children }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row gap-8 p-4 md:p-8 max-w-7xl mx-auto min-h-[calc(100vh-80px)]"
    >
      {children}
    </motion.main>
  );
}

export default Main;
