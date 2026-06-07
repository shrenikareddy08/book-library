import { useNavigate } from "react-router-dom";

export default function Navbar({ theme, setTheme }) {
  const navigate = useNavigate();

  return (
    // Changed top-6 to top-0 and added background blur container properties to help stop layout bleed-through
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 bg-transparent backdrop-blur-sm">
      <div
        className="
        flex items-center justify-between w-full max-w-5xl
        bg-[#291303] text-[#e8d8c3]
        dark:bg-[#111] dark:text-white
        px-6 py-3 rounded-full shadow-lg transition-all duration-300
      "
      >
        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer font-serif font-bold text-sm md:text-base"
        >
          The Reading Room 📚
        </div>

        {/* NAV */}
        <div className="flex gap-4 md:gap-6 text-[12px] md:text-[13px] uppercase tracking-wide">
          <button onClick={() => navigate("/search")} className="hover:opacity-70">
            Search
          </button>
          <button onClick={() => navigate("/suggestions")} className="hover:opacity-70">
            Suggestions
          </button>
          <button onClick={() => navigate("/genres")} className="hover:opacity-70">
            Genres
          </button>
          <button onClick={() => navigate("/favorites")} className="hover:opacity-70">
            Favorites
          </button>
          <button onClick={() => navigate("/contact")} className="hover:opacity-70">
            Contact Us
          </button>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {/* PROFILE */}
          <button
            onClick={() => navigate("/profile")}
            className="w-8 h-8 rounded-full bg-[#3a1d0f] dark:bg-gray-700 flex items-center justify-center text-sm hover:scale-110 transition"
          >
            👤
          </button>

          {/* THEME TOGGLE */}
          <button
            onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
            className="text-lg hover:scale-110 transition"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </div>
    </nav>
  );
}