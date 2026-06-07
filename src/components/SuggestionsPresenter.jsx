export default function SuggestionsPresenter({
  books,
  favorites,
  toggleFav,
  theme,
}) {
  const dark = theme === "dark";

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((b) => {
        const isFav = favorites.find((f) => f.id === b.id);

        return (
          <div
            key={b.id}
            className={`rounded-2xl border overflow-hidden transition hover:shadow-lg ${
              dark
                ? "bg-[#1a1a1a] border-[#333]"
                : "bg-white shadow-sm"
            }`}
          >
            <img
              src={b.img}
              alt={b.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4 space-y-2">
              <h2 className="text-xl font-bold">
                {b.title}
              </h2>

              <p
                className={`text-sm ${
                  dark
                    ? "text-gray-400"
                    : "text-gray-500"
                }`}
              >
                {b.genre}
              </p>

              <p
                className={`text-sm ${
                  dark
                    ? "text-gray-300"
                    : "text-gray-600"
                }`}
              >
                {b.desc}
              </p>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => toggleFav(b)}
                  className="text-2xl hover:scale-110 transition"
                >
                  {isFav ? "❤️" : "🤍"}
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}