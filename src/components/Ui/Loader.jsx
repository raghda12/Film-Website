function Loader() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <div className="w-12 h-12 border-4 border-yellow-400/20 border-t-yellow-400 rounded-full animate-spin"></div>
      <p className="text-slate-500 font-medium">Loading magic...</p>
    </div>
  );
}
export default Loader;
