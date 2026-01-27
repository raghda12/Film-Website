import { useRef } from "react";
import { Search } from "lucide-react";
import { useKey } from "../../hooks/useKey";

function SearchBar({ query, setQuery }) {
  const inputEl = useRef();

  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current.focus();
    setQuery("");
  });

  return (
    <div className="relative flex items-center w-full max-w-xl group">
      <Search
        className="absolute left-4 text-slate-500 group-focus-within:text-yellow-500 transition-colors duration-300"
        size={20}
      />

      <input
        className="w-full bg-[#2b3035] text-slate-200 py-3 pl-12 pr-4 rounded-2xl border border-transparent 
                   focus:border-yellow-500/50 focus:ring-4 focus:ring-yellow-500/10 
                   outline-none transition-all duration-300 placeholder:text-slate-500 
                   shadow-lg focus:shadow-yellow-500/5"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        ref={inputEl}
      />

      <div className="absolute right-4 hidden sm:flex items-center gap-1 px-2 py-1 bg-[#1a1d21] border border-white/10 rounded-lg text-[10px] text-slate-500 font-bold uppercase tracking-tighter">
        <span className="text-[12px]">↵</span> ENTER
      </div>
    </div>
  );
}

export default SearchBar;
