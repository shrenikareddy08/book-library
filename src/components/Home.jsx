import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
   <div className="relative min-h-screen w-full flex items-center justify-center px-6 pt-24 text-white">

      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600&q=80"
          className="w-full h-full object-cover"
          alt="library"
        />
      </div>

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-3xl text-center">

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          The Reading Room
        </h1>

        <p className="mt-6 text-xl md:text-2xl italic font-serif text-gray-200">
          “Where every page feels like a home.”
        </p>

        <h2 className="mt-10 text-lg md:text-xl text-gray-300">
          What can you find here?
        </h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            "Discover curated books from every genre",
            "Timeless classics & modern bestsellers",
            "A calm digital space for readers."
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl hover:bg-white/20 transition"
            >
              {item}
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate("/library")}
          className="mt-8 px-8 py-3 rounded-full border border-white/30 bg-white/10 text-white hover:bg-white hover:text-black transition"
        >
          Enter Library
        </button>

      </div>
    </div>
  );
}