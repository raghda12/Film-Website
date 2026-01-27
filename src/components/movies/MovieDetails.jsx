import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  Star,
  Clock,
  Calendar,
  Film,
  Info,
  User,
} from "lucide-react";
import Loader from "../Ui/Loader";
import StarRating from "../Ui/StarRating";
import { useKey } from "../../hooks/useKey";

const KEY = "39f9fa90";

function MovieDetails({ selectedId, handleCloseMovie, onAddWatched, watched }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");
  const countRef = useRef(0);

  useEffect(() => {
    if (userRating) countRef.current++;
  }, [userRating]);

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId,
  )?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
      countRatingDecisions: countRef.current,
    };
    onAddWatched(newWatchedMovie);
    handleCloseMovie();
  }

  useKey("Escape", handleCloseMovie);

  useEffect(() => {
    async function getMovieDetails() {
      setIsLoading(true);
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`,
      );
      const data = await res.json();
      setMovie(data);
      setIsLoading(false);
    }
    getMovieDetails();
  }, [selectedId]);

  useEffect(() => {
    if (!title) return;
    document.title = `Movie | ${title}`;
    return () => (document.title = "usePopcorn");
  }, [title]);

  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="flex flex-col h-full bg-[#24282d] rounded-3xl overflow-hidden shadow-2xl relative"
    >
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header className="relative flex flex-col md:flex-row gap-6 p-6 bg-[#2b3035]/60 border-b border-white/5 backdrop-blur-sm">
            <button
              className="absolute top-4 left-4 z-10 p-2 bg-white/10 hover:bg-yellow-400 hover:text-black rounded-full transition-all backdrop-blur-md shadow-lg"
              onClick={handleCloseMovie}
            >
              <ChevronLeft size={20} />
            </button>

            <img
              src={poster}
              alt={title}
              className="w-full md:w-40 rounded-2xl shadow-xl border border-white/10 object-cover aspect-[2/3]"
            />

            <div className="flex flex-col  space-y-3">
              <h2 className="text-3xl font-black text-white tracking-tight leading-tight uppercase italic">
                {title}
              </h2>
              <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-400">
                <span className="flex items-center gap-1">
                  <Calendar size={14} /> {released}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} /> {runtime}
                </span>
              </div>
              <p className="text-yellow-400 font-bold text-sm tracking-widest uppercase">
                {genre}
              </p>
              <div className="flex items-center gap-2 bg-yellow-400/10 self-start px-3 py-1 rounded-full text-yellow-500 font-bold border border-yellow-400/20">
                <Star size={16} fill="currentColor" />
                <span>{imdbRating} IMDb rating</span>
              </div>
            </div>
          </header>

          <section className="p-8 space-y-8 overflow-y-auto">
            <div className="bg-[#1a1d21]/80 p-6 rounded-3xl border border-white/5 shadow-inner flex flex-col items-center gap-4">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button
                      className="w-full py-3 bg-yellow-400 text-black font-black rounded-xl hover:bg-yellow-500 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-yellow-400/10 uppercase tracking-wider text-sm"
                      onClick={handleAdd}
                    >
                      + Add to Watched List
                    </button>
                  )}
                </>
              ) : (
                <div className="flex flex-col items-center gap-2 py-2">
                  <p className="text-slate-400 font-medium">
                    You already rated this movie
                  </p>
                  <div className="flex items-center gap-2 text-yellow-400 text-2xl font-black italic">
                    {watchedUserRating} <Star fill="currentColor" size={24} />
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6 text-slate-300">
              <p className="text-lg leading-relaxed italic border-l-4 border-yellow-400/30 pl-4 py-1 bg-yellow-400/5">
                "{plot}"
              </p>

              <div className="grid gap-4 text-sm">
                <p className="flex items-start gap-2">
                  <User className="text-yellow-500 shrink-0" size={16} />
                  <span>
                    <strong className="text-white">Starring:</strong> {actors}
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <Film className="text-yellow-500 shrink-0" size={16} />
                  <span>
                    <strong className="text-white">Directed by:</strong>{" "}
                    {director}
                  </span>
                </p>
              </div>
            </div>
          </section>
        </>
      )}
    </motion.div>
  );
}

export default MovieDetails;
