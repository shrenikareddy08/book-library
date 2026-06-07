import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Library({ theme }) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setShow(true);
  }, []);

  const dark = theme === "dark";

  const genres = [
    {
      name: "Fantasy",
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=80",
    },
    {
      name: "Romance",
      img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=80",
    },
    {
      name: "Mystery",
      img: "https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=1400&q=80",
    },
    {
      name: "Self Growth",
      img: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=1400&q=80",
    },
  ];

  return (
    <div
      className={`relative min-h-screen flex flex-col items-center justify-center px-6 pt-40 pb-12 overflow-hidden transition-colors
      ${dark ? "bg-[#0f0f0f] text-white" : "bg-[#fdfaf6] text-[#2f2a25]"}`}
    >
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#ece0d1] rounded-full blur-[120px] opacity-30"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-[#dbc1ac] rounded-full blur-[120px] opacity-20"></div>

      <div
        className={`relative z-10 max-w-3xl w-full text-center space-y-10 transition-all duration-700 ease-out ${
          show ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-10"
        }`}
      >
        <header className="space-y-2">
          <span className="text-xs uppercase tracking-[0.3em] text-[#967969]">
            Your Personal Sanctuary
          </span>
          <h1 className="text-5xl md:text-6xl font-serif italic">
            The Reading Room
          </h1>
          <p className={dark ? "text-gray-300" : "text-[#5a524a]"}>
            "What mood are you in for today?"
          </p>
        </header>

        {/* Main Grid View */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
          {genres.map((g, i) => (
            <button
              key={i}
              onClick={() => navigate(`/genres/${g.name}`)}
              className="group relative h-40 w-full overflow-hidden rounded-2xl transition-all duration-700 ease-out hover:scale-105 hover:shadow-2xl dynamic-fade-in"
              style={{ animationDelay: `${i * 120}ms` }}
            >
              {/* Image element fixed layout setup */}
              <img
                src={g.img}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700 z-0"
                alt={g.name}
              />
              <div className="absolute inset-0 bg-black/50 transition-colors group-hover:bg-black/40 z-10"></div>

              <div className="relative h-full flex items-center justify-center z-20">
                <span className="text-white text-2xl font-serif font-semibold drop-shadow-md">
                  {g.name}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}