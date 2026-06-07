import { useNavigate } from "react-router-dom";

export default function Genres({ theme }) {
  const navigate = useNavigate();
  const dark = theme === "dark";

  const data = [
    {
      genre: "Fantasy",
      books: [
        { title: "Harry Potter", author: "J.K. Rowling", desc: "A boy discovers he is a wizard." },
        { title: "The Hobbit", author: "J.R.R. Tolkien", desc: "An adventurous journey across Middle Earth." }
      ],
    },
    {
      genre: "Romance",
      books: [
        { title: "Pride & Prejudice", author: "Jane Austen", desc: "A classic love story." },
        { title: "It Ends With Us", author: "Colleen Hoover", desc: "A moving story about love and choices." }
      ],
    },
    {
      genre: "Mystery",
      books: [
        { title: "Sherlock Holmes", author: "Arthur Conan Doyle", desc: "A genius detective solves mysteries." },
        { title: "Gone Girl", author: "Gillian Flynn", desc: "A psychological thriller packed with twists." }
      ],
    },
    {
      genre: "Self Growth",
      books: [
        { title: "Atomic Habits", author: "James Clear", desc: "Small habits transform your life." },
        { title: "Deep Work", author: "Cal Newport", desc: "Learn how to focus deeply to achieve more." }
      ],
    },
  ];

  return (
    <div className={`min-h-screen pt-36 pb-12 px-6 transition-colors duration-300 ${dark ? "bg-[#0f0f0f] text-white" : "bg-[#fdfaf6] text-black"}`}>
      <h1 className="text-5xl font-serif text-center font-bold">📚 Explore Genres</h1>
      <p className="text-center text-sm opacity-60 mt-2">Find your next favorite book by category</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 max-w-6xl mx-auto">
        {data.map((section, i) => (
          <div
            key={i}
            className={`rounded-2xl p-6 shadow-sm border transition hover:shadow-md ${
              dark ? "bg-[#1a1a1a] border-[#333]" : "bg-white border-[#ece0d1]"
            }`}
          >
            <h2 className="text-3xl font-serif text-center border-b pb-3 mb-6 font-semibold text-[#967969]">
              {section.genre}
            </h2>

            <div className="space-y-4">
              {section.books.map((book, idx) => (
                <div key={idx} className={`p-4 rounded-xl ${dark ? "bg-[#252525]" : "bg-zinc-50"}`}>
                  <h3 className="text-xl font-bold font-serif">{book.title}</h3>
                  <p className="text-xs text-[#967969] mb-1">By {book.author}</p>
                  <p className="text-sm opacity-80">{book.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pt-10">
        <button onClick={() => navigate("/")} className="hover:underline font-semibold text-[#967969]">
          ← Back Home
        </button>
      </div>
    </div>
  );
}