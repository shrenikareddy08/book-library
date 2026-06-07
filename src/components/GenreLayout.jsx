import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function GenreLayout() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const dark = theme === "dark";

  // Check if we are exactly on the landing route "/genres" with no sub-genre active
  const isLandingPage = location.pathname === "/genres" || location.pathname === "/genres/";

  // hardcoded book counts matching your data matrix to display on the cover cards
  const genreBooksCount = {
    Fantasy: 2,
    Romance: 2,
    Mystery: 2,
    "Self Growth": 2
  };

  const genresData = [
    {
      name: "Fantasy",
      path: "Fantasy",
      quote: "Worlds beyond imagination.",
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Romance",
      path: "Romance",
      quote: "Stories that touch the heart.",
      img: "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Mystery",
      path: "Mystery",
      quote: "Secrets waiting to be uncovered.",
      img: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Self Growth",
      path: "Self Growth",
      quote: "Shape your mind, change your life.",
      img: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=800&q=80"
    },
  ];

  return (
    <div 
      className={`min-h-screen pt-40 pb-12 px-6 transition-colors duration-500 ${
        dark ? "bg-[#0f0f0f] text-white" : "bg-[#fdfaf6] text-black"
      }`}
    >
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* HEADER BLOCK - ONLY SHOWS ON GALLERY LANDING */}
        {isLandingPage && (
          <div className="text-center space-y-2 animate-fade-in">
            <span className="text-xs uppercase tracking-[0.3em] text-[#967969] font-semibold">
              Curated Collections
            </span>
            <h1 className="text-5xl font-serif italic font-bold tracking-tight">
              Explore Genres
            </h1>
            <p className={`text-sm max-w-sm mx-auto ${dark ? "text-gray-400" : "text-[#5a524a]"}`}>
              Select a visual collection canvas below to browse individual literary editions.
            </p>
          </div>
        )}

        {/* CONDITION RENDER: MAIN GALLERY IMAGES VS NESTED PAGE ELEMENT */}
        {isLandingPage ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in pt-4">
            {genresData.map((g) => (
              <div
                key={g.name}
                onClick={() => navigate(g.path)}
                className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-transparent dark:hover:border-zinc-800"
              >
                {/* Background Photo Overlay */}
                <img 
                  src={g.img} 
                  alt={g.name} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Dark Vignette Shading Layer */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-300" />

                {/* Information Stack */}
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end text-white">
                  <span className="text-xs uppercase tracking-widest text-[#967969] font-semibold mb-1 group-hover:text-amber-400 transition-colors">
                    {genreBooksCount[g.name] || 0} Books Available
                  </span>
                  
                  <h3 className="text-2xl font-serif font-bold tracking-wide mb-1">
                    {g.name}
                  </h3>
                  
                  <p className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 line-clamp-2">
                    {g.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* SUB-ROUTER ELEMENT VIEW */
          <div className="space-y-6 animate-fade-in">
            <div>
              <button
                onClick={() => navigate("/genres")}
                className={`text-xs font-semibold uppercase tracking-widest transition-colors duration-200 inline-flex items-center gap-1.5 ${
                  dark ? "text-gray-400 hover:text-white" : "text-zinc-600 hover:text-black"
                }`}
              >
                ← Back to Gallery
              </button>
            </div>
            
            <Outlet />
          </div>
        )}

        {/* LITERARY FOOTER */}
        <div className="text-center pt-12 border-t border-zinc-200 dark:border-zinc-800 space-y-4">
          <p className={`font-serif italic text-base max-w-md mx-auto leading-relaxed ${
            dark ? "text-gray-400" : "text-[#5a524a]"
          }`}>
            "A room without books is like a body without a soul."
          </p>
          
          <div className="pt-2">
            <button 
              onClick={() => navigate("/")} 
              className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-full border text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                dark 
                  ? "bg-[#1a1a1a] border-zinc-800 text-gray-300 hover:text-white hover:border-zinc-600" 
                  : "bg-[#291303] border-[#291303] text-white hover:bg-opacity-90 shadow-sm"
              }`}
            >
              📖 Return to Main Sanctuary
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}