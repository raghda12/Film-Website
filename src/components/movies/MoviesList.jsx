import { motion } from "framer-motion";
import Movies from "./Movies";

function MoviesList({ movies, handleSelectMovie }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.ul
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-3 p-2 list-none overflow-y-auto max-h-[calc(100vh-250px)] scrollbar-thin scrollbar-thumb-yellow-500/20 scrollbar-track-transparent"
    >
      {movies?.length > 0 ? (
        movies.map((movie) => (
          <Movies
            key={movie.imdbID}
            movie={movie}
            handleSelectMovie={handleSelectMovie}
          />
        ))
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-slate-500">
          <p className="text-lg font-medium">No movies found</p>
          <p className="text-sm">Try searching for something else!</p>
        </div>
      )}
    </motion.ul>
  );
}

export default MoviesList;
