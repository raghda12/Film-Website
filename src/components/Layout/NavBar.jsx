import Logo from "../Ui/Logo";
import { motion } from "framer-motion";

function NavBar({ children }) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 
                 bg-[#24282d]/80 backdrop-blur-md border-b border-white/5 
                 shadow-lg shadow-black/20"
    >
      <div className="flex shrink-0">
        <Logo />
      </div>

      <div className="flex flex-1 items-center justify-end gap-8 ml-8">
        {children}
      </div>
    </motion.nav>
  );
}

export default NavBar;
