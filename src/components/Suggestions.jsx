import SuggestionsContainer from "./SuggestionsContainer";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

export default function Suggestions({ favorites, setFavorites }) {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const dark = theme === "dark";

  const books = [
    { id: 1, title: "Atomic Habits", genre: "Self Growth", desc: "Small habits compound into remarkable life changes over time.", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba" },
    { id: 2, title: "The Midnight Library", genre: "Fantasy", desc: "A magical library between life and death exploring infinite lives.", img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66" },
    { id: 3, title: "It Ends With Us", genre: "Romance", desc: "A powerful emotional story about love, pain, and strength.", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac" },
    { id: 4, title: "Sherlock Holmes", genre: "Mystery", desc: "Classic tales of master deduction and deductive mystery investigations.", img: "https://images.unsplash.com/photo-1501139083538-0139583c060f" },
    { id: 5, title: "Deep Work", genre: "Self Growth", desc: "Rules for focused success in a highly distracted modern world.", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794" },
    { id: 6, title: "The Alchemist", genre: "Philosophy", desc: "An inspirational fable about following your dreams across deserts.", img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93" },
    { id: 7, title: "Harry Potter", genre: "Fantasy", desc: "An orphaned boy uncovers legendary magical secrets at wizard school.", img: "https://images.unsplash.com/photo-1519681393784-d120267933ba" },
    { id: 8, title: "Pride and Prejudice", genre: "Romance", desc: "The foundational classic exploring structural classism, pride, and courtship.", img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f" },
    { id: 9, title: "Gone Girl", genre: "Thriller", desc: "A sharp psychological roller coaster exploring the dark edges of marriage.", img: "https://images.unsplash.com/photo-1501139083538-0139583c060f" },
    { id: 10, title: "The Hobbit", genre: "Fantasy", desc: "Bilbo Baggins treks across dangerous regions for legendary treasure.", img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66" }
  ];

  return (
    <div className={`min-h-screen pt-36 pb-12 px-6 ${dark ? "bg-[#0f0f0f] text-white" : "bg-[#fdfaf6]"}`}>
      <div className="text-center mb-6">
        <h1 className="text-4xl font-serif font-bold">Recommended Selections</h1>
        <p className="text-sm opacity-60 mt-1">Handpicked collection items matching active reader behaviors</p>
      </div>

      <SuggestionsContainer
        books={books}
        favorites={favorites}
        setFavorites={setFavorites}
        theme={theme}
      />

      <div className="text-center pt-10">
        <button onClick={() => navigate("/")} className="text-sm hover:underline font-medium text-[#967969]">
          ← Back Home
        </button>
      </div>
    </div>
  );
}