import { Star, Trophy, Clock, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

function WatchedMovie({ movie, onDeleteWatched }) {
  return (
    <div className="group relative flex items-center gap-4 p-3 bg-[#1a1d21]/40 border border-white/5 rounded-2xl hover:bg-[#1a1d21]/60 transition-all duration-300">
      <img
        src={movie.poster}
        alt={`${movie.title} poster`}
        className="w-12 h-16 object-cover rounded-lg shadow-md border border-white/10"
      />

      <div className="flex flex-col gap-1 flex-1">
        <h3 className="text-sm font-bold text-slate-100 truncate max-w-[150px]">
          {movie.title}
        </h3>

        <div className="flex items-center gap-3 text-[11px] font-semibold">
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={12} fill="currentColor" />
            <span>{movie.imdbRating}</span>
          </div>

          <div className="flex items-center gap-1 text-orange-400">
            <Trophy size={12} fill="currentColor" />
            <span>{movie.userRating}</span>
          </div>

          <div className="flex items-center gap-1 text-slate-400">
            <Clock size={12} />
            <span>{movie.runtime} min</span>
          </div>
        </div>
      </div>

      <button
        className="p-2 text-slate-500 hover:text-red-400 hover:bg-red-400/10 rounded-xl transition-all duration-200 opacity-0 group-hover:opacity-100"
        onClick={() => onDeleteWatched(movie.imdbID)}
        title="Delete from list"
      >
        <Trash2 size={18} />
      </button>

      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-yellow-500 rounded-r-full opacity-0 group-hover:opacity-100 transition-all shadow-[0_0_10px_#eab308]" />
    </div>
  );
}

export default WatchedMovie;
