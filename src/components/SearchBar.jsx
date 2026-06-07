import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ theme }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const dark = theme === "dark";

  const books = [
    { key: "A", title: "Atomic Habits", author: "James Clear", genre: "Self Growth", img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80", desc: "Atomic Habits is about how small, consistent changes lead to remarkable results over time." },
    { key: "B", title: "The Midnight Library", author: "Matt Haig", genre: "Fantasy", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80", desc: "A magical library exists between life and death where every book represents a different version of your life." },
    { key: "C", title: "It Ends With Us", author: "Colleen Hoover", genre: "Romance", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80", desc: "A deeply emotional story about love, strength, and difficult choices." },
    { key: "D", title: "Sherlock Holmes", author: "Arthur Conan Doyle", genre: "Mystery", img: "https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=800&q=80", desc: "A legendary detective uses sharp observation and logic." },
    { key: "E", title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", genre: "Finance", img: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80", desc: "Teaches financial intelligence and investing." },
    { key: "F", title: "Ikigai", author: "Héctor García", genre: "Self Growth", img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80", desc: "Explores finding purpose and meaning in life." },
    { key: "G", title: "Harry Potter", author: "J.K. Rowling", genre: "Fantasy", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80", desc: "Wizarding adventures at Hogwarts." },
    { key: "H", title: "The Hobbit", author: "J.R.R Tolkien", genre: "Fantasy", img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80", desc: "Journey through Middle Earth." },
    { key: "I", title: "Deep Work", author: "Cal Newport", genre: "Self Growth", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80", desc: "Master focused productivity." },
    { key: "J", title: "Pride and Prejudice", author: "Jane Austen", genre: "Romance", img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80", desc: "Classic romance novel." },
    { key: "K", title: "The Alchemist", author: "Paulo Coelho", genre: "Philosophy", img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80", desc: "Follow your personal legend." },
    { key: "L", title: "Gone Girl", author: "Gillian Flynn", genre: "Thriller", img: "https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=800&q=80", desc: "Psychological mystery thriller." }
  ];

  // Match multiple items instead of just single one so they display down below beautifully
 const filteredBooks = books.filter(
  (b) =>
    b.title.toLowerCase().includes(query.toLowerCase()) ||
    b.genre.toLowerCase().includes(query.toLowerCase()) ||
    b.author.toLowerCase().includes(query.toLowerCase())
);

const totalResults = filteredBooks.length;

  return (
    <div className={`relative min-h-screen pt-32 pb-12 flex items-center justify-center px-6 transition-colors duration-500 ${dark ? "bg-[#0f0f0f] text-white" : "bg-[#fdfaf6] text-[#2f2a25]"}`}>
      <div className="relative z-10 w-full max-w-5xl">
        <div className={`backdrop-blur-md rounded-3xl shadow-xl p-6 md:p-10 space-y-8 border ${dark ? "bg-[#1a1a1a]/90 border-[#333]" : "bg-white/80 border-[#e6d7c8]"}`}>
          <div className="text-center">
            <h1 className="text-5xl font-serif italic">Search Library</h1>
          </div>

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type book name, author or genre..."
            className={`w-full px-6 py-4 rounded-full border outline-none transition ${dark ? "bg-[#2a2a2a] border-[#444] text-white focus:border-gray-500" : "bg-gray-50 border-gray-300 focus:border-[#967969]"}`}
          />

          <p className="text-center text-sm opacity-70">
  Found {totalResults} books
</p>

          {/* Active Grid Setup */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {filteredBooks.map((book) => (
              <div
                key={book.key}
                className={`border rounded-2xl p-4 flex flex-col gap-3 transition hover:shadow-md ${dark ? "bg-[#252525] border-[#444]" : "bg-white border-[#ece0d1]"}`}
              >
                <img src={book.img} alt={book.title} className="w-full h-40 object-cover rounded-xl" />
                <div>
                  <h3 className="font-serif font-bold text-lg">{book.title}</h3>
                  <p className="text-sm opacity-70">By {book.author}</p>
                  <span className="text-xs inline-block px-2 py-1 rounded mt-2 bg-[#967969]/20 text-[#967969] uppercase font-semibold tracking-wider">
                    {book.genre}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {filteredBooks.length === 0 && (
            <p className="text-center text-gray-500 py-6">
              Sorry, no results found for "{query}"
            </p>
          )}

          <div className="flex justify-between pt-4 border-t border-gray-200 dark:border-zinc-800">
            <button onClick={() => navigate("/")} className="hover:underline text-sm font-semibold">← Home</button>
            <button onClick={() => navigate("/library")} className="hover:underline text-sm font-semibold text-[#967969]">Explore Mood →</button>
          </div>
        </div>
      </div>
    </div>
  );
}