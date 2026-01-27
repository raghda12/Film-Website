import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

function Movies({ movie, handleSelectMovie }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      onClick={() => handleSelectMovie(movie.imdbID)}
      className="group flex items-center gap-6 p-4 bg-[#2b3035]/40 hover:bg-[#343a40] border border-white/5 rounded-2xl cursor-pointer transition-all duration-300 shadow-lg hover:shadow-2xl"
    >
      <div className="relative shrink-0">
        <img
          src={movie.Poster}
          alt={`${movie.Title} poster`}
          className="w-16 h-24 object-cover rounded-xl shadow-md border border-white/10 group-hover:border-yellow-500/50 transition-colors duration-300"
        />

        <div className="absolute inset-0 bg-yellow-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold text-slate-100 group-hover:text-yellow-400 transition-colors duration-300 leading-tight">
          {movie.Title}
        </h3>

        <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
          <Calendar size={14} className="text-yellow-500/70" />
          <span>{movie.Year}</span>
        </div>
      </div>

      <div className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-yellow-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </div>
    </motion.li>
  );
}

export default Movies;
