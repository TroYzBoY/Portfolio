export default function Preloader() {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-[#0f1419] via-[#1a1f3a] to-[#0f1419]">
      {/* Main spinner container */}
      <div className="relative w-32 h-32">
        {/* Outer ring - fast rotation */}
        <div
          className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-cyan-400 border-r-purple-500 animate-spin"
          style={{ animationDuration: "1.5s" }}
        ></div>

        {/* Middle ring - slow reverse rotation */}
        <div
          className="absolute inset-4 rounded-full border-[2px] border-transparent border-b-pink-400 border-l-cyan-300 animate-spin"
          style={{ animationDuration: "3s", animationDirection: "reverse" }}
        ></div>

        {/* Inner ring - medium rotation */}
        <div
          className="absolute inset-8 rounded-full border-[2px] border-transparent border-t-blue-400 border-r-cyan-500 animate-spin"
          style={{ animationDuration: "2s" }}
        ></div>

        {/* Pulsing center dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse shadow-lg shadow-cyan-400/50"></div>
        </div>
      </div>

      {/* Loading text with animation */}
      <div className="mt-8 text-center">
        <p className="text-cyan-400 text-lg font-semibold tracking-widest animate-pulse">
          Loading
        </p>
        <div className="flex justify-center gap-1 mt-2">
          <div
            className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"
            style={{ animationDelay: "0s" }}
          ></div>
          <div
            className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.2s" }}
          ></div>
          <div
            className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.4s" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
