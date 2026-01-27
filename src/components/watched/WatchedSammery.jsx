import { Film, Star, Trophy, Clock } from "lucide-react";
import { motion } from "framer-motion";

const average = (arr) =>
  arr.length > 0 ? arr.reduce((acc, cur) => acc + cur / arr.length, 0) : 0;

function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-[#2b3035] to-[#212529] p-6 rounded-3xl shadow-xl border border-white/5 mb-6"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-yellow-400/10 rounded-lg">
          <Film className="text-yellow-500" size={20} />
        </div>
        <h2 className="text-sm font-black uppercase tracking-[3px] text-slate-400">
          Movies Summary
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard
          icon={<Film size={16} />}
          label="Watched"
          value={`${watched.length}`}
          unit="movies"
          color="text-blue-400"
        />

        <StatCard
          icon={<Star size={16} />}
          label="Avg IMDb"
          value={avgImdbRating.toFixed(1)}
          unit="rating"
          color="text-yellow-500"
        />

        <StatCard
          icon={<Trophy size={16} />}
          label="Avg User"
          value={avgUserRating.toFixed(1)}
          unit="rating"
          color="text-orange-500"
        />

        <StatCard
          icon={<Clock size={16} />}
          label="Avg Time"
          value={Math.round(avgRuntime)}
          unit="min"
          color="text-slate-300"
        />
      </div>
    </motion.div>
  );
}

function StatCard({ icon, label, value, unit, color }) {
  return (
    <div className="bg-[#1a1d21]/40 p-3 rounded-2xl border border-white/5 flex flex-col gap-1 shadow-inner">
      <div className={`flex items-center gap-1.5 ${color} mb-1`}>
        {icon}
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
          {label}
        </span>
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-xl font-black text-white leading-none">
          {value}
        </span>
        <span className="text-[10px] font-medium text-slate-500">{unit}</span>
      </div>
    </div>
  );
}

export default WatchedSummary;
