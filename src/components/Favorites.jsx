import { useNavigate } from "react-router-dom";

export default function Favorites({
  favorites,
  theme
}) {
  const navigate = useNavigate();
  const dark = theme === "dark";
  const totalFavorites = favorites.length;

  const topFavorites = [
    {
      id: "top1",
      title: "The Alchemist",
      genre: "Philosophy",
      desc: "A journey of following dreams and discovering destiny.",
      img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
    },
    {
      id: "top2",
      title: "Atomic Habits",
      genre: "Self Growth",
      desc: "Small habits that lead to remarkable changes.",
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    },
    {
      id: "top3",
      title: "Harry Potter",
      genre: "Fantasy",
      desc: "A boy discovers a magical world at Hogwarts.",
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    },
    {
      id: "top4",
      title: "The Midnight Library",
      genre: "Fantasy",
      desc: "Infinite lives exist between life and death.",
      img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
    },
  ];

  return (
    <div
      className={`min-h-screen pt-40 pb-16 px-6 flex justify-center transition-colors duration-500 ${
        dark ? "bg-[#0f0f0f] text-white" : "bg-[#fdfaf6] text-black"
      }`}
    >
      <div className="w-full max-w-6xl space-y-12">
        {/* TITLE */}
        <h1 className={`text-4xl font-serif text-center ${dark ? "text-white" : "text-[#3c2f2f]"}`}>
          ❤️ Favorites Collection
        </h1>

        <p className="text-center text-[#967969]">
  Total Favorites: {totalFavorites}
</p>

        {/* TOP FAVORITES */}
        <div className="space-y-4">
          <h2 className={`text-2xl font-serif text-center ${dark ? "text-white" : "text-[#3c2f2f]"}`}>
            ⭐ Top Picks
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {topFavorites.map((b) => (
              <div
                key={b.id}
                className={`rounded-2xl flex gap-4 p-4 transition ${
                  dark
                    ? "bg-[#1a1a1a] border border-[#333] hover:bg-[#202020]"
                    : "bg-white border border-[#ece0d1] shadow-sm hover:shadow-md"
                }`}
              >
                <img src={b.img} alt={b.title} className="w-32 h-40 object-cover rounded-xl" />
                <div>
                  <h2 className={`text-xl font-bold ${dark ? "text-white" : "text-[#3c2f2f]"}`}>
                    {b.title}
                  </h2>
                  <p className="text-sm text-[#967969]">{b.genre}</p>
                  <p className={`text-sm mt-2 ${dark ? "text-gray-300" : "text-[#5a524a]"}`}>
                    {b.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* USER FAVORITES */}
        <div className="space-y-4">
          <h2 className={`text-2xl font-serif text-center ${dark ? "text-white" : "text-[#3c2f2f]"}`}>
            ❤️ Your Picks
          </h2>

          {favorites.length === 0 ? (
            <p className={`text-center ${dark ? "text-gray-400" : "text-gray-500"}`}>
              No favorites yet. Start clicking hearts ❤️
            </p>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {favorites.map((b) => (
                <div
                  key={b.id}
                  className={`rounded-2xl flex gap-4 p-4 transition ${
                    dark
                      ? "bg-[#1a1a1a] border border-[#333] hover:bg-[#202020]"
                      : "bg-white border border-[#ece0d1] shadow-sm hover:shadow-md"
                  }`}
                >
                  <img src={b.img} alt={b.title} className="w-32 h-40 object-cover rounded-xl" />
                  <div>
                    <h2 className={`text-xl font-bold ${dark ? "text-white" : "text-[#3c2f2f]"}`}>
                      {b.title}
                    </h2>
                    <p className="text-sm text-[#967969]">{b.genre}</p>
                    <p className={`text-sm mt-2 ${dark ? "text-gray-300" : "text-[#5a524a]"}`}>
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* BACK BUTTON */}
        <div className="text-center">
          <button
            onClick={() => navigate("/")}
            className={`transition font-semibold ${
              dark ? "text-gray-300 hover:text-white" : "text-[#967969] hover:text-[#3c2f2f]"
            }`}
          >
            ← Back Home
          </button>
        </div>
      </div>
    </div>
  );
}