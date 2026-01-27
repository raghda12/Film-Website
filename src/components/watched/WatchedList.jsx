import { motion, AnimatePresence } from "framer-motion";
import WatchedMovie from "./WatchedMovie";

function WatchedList({ watched, onDeleteWatched }) {
  return (
    <ul className="flex flex-col gap-4 p-2 list-none">
      <AnimatePresence initial={false}>
        {watched.map((movie) => (
          <motion.li
            key={movie.imdbID}
            layout
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{
              opacity: 0,
              x: 50,
              backgroundColor: "rgba(239, 68, 68, 0.1)",
              transition: { duration: 0.2 },
            }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="relative"
          >
            <WatchedMovie movie={movie} onDeleteWatched={onDeleteWatched} />
          </motion.li>
        ))}
      </AnimatePresence>

      {watched.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-12 text-slate-500 border-2 border-dashed border-white/5 rounded-3xl"
        >
          <p className="italic text-sm text-center">
            Your watched list is empty. <br /> Start adding some movies!
          </p>
        </motion.div>
      )}
    </ul>
  );
}

export default WatchedList;
