import { useParams } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function GenrePage() {
  const { genreName } = useParams();
  const { theme } = useTheme();
  const dark = theme === "dark";

  const genreBooks = {
    Fantasy: [
      {
        title: "Harry Potter",
        author: "J.K. Rowling",
        desc: "A young wizard discovers his heroic destiny while navigating the challenges of Hogwarts School of Witchcraft and Wizardry.",
        img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        desc: "An adventurous journey through Middle-earth alongside dwarves and wizards to reclaim a stolen, forgotten kingdom.",
        img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80"
      }
    ],

    Romance: [
      {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        desc: "A classic, witty look at class, courtship, pride, and early misunderstandings in 19th-century England.",
        img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "It Ends With Us",
        author: "Colleen Hoover",
        desc: "A deeply moving, emotional story about vulnerability, personal boundaries, and the strength it takes to break destructive cycles.",
        img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80"
      }
    ],

    Mystery: [
      {
        title: "Sherlock Holmes",
        author: "Arthur Conan Doyle",
        desc: "The world's greatest consulting detective applies razor-sharp observation and chilling deduction to solve impossible cases.",
        img: "https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Gone Girl",
        author: "Gillian Flynn",
        desc: "A psychological thriller that tears apart a marriage gone toxic, uncovering dark secrets behind a sudden disappearance.",
        img: "https://images.unsplash.com/photo-1501139083538-0139583c060f?auto=format&fit=crop&w=800&q=80"
      }
    ],

    "Self Growth": [
      {
        title: "Atomic Habits",
        author: "James Clear",
        desc: "Learn how minor, consistent adjustments compound daily into massive long-term life improvements and productivity shifts.",
        img: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Deep Work",
        author: "Cal Newport",
        desc: "Practical guidance for establishing deep focus amidst digital noise to produce elite-level outcomes and master hard things fast.",
        img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80"
      }
    ]
  };

  const books = genreBooks[genreName] || [];

  return (
    <div className="animate-fade-in py-2">
      {books.length === 0 ? (
        <p className="text-center text-gray-500 py-10">
          No books curated for this genre yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {books.map((book, index) => (
            <div
              key={index}
              className={`rounded-2xl p-5 flex flex-col sm:flex-row gap-5 border transition-all duration-300 hover:scale-[1.01] ${
                dark 
                  ? "bg-[#1a1a1a]/80 border-zinc-800 hover:border-zinc-700 shadow-xl" 
                  : "bg-white border-[#ece0d1] shadow-sm hover:shadow-md"
              }`}
            >
              {/* BOOK COVER IMAGE */}
              <img 
                src={book.img} 
                alt={book.title} 
                className="w-full sm:w-28 h-40 object-cover rounded-xl shadow-inner flex-shrink-0"
              />

              {/* TEXT SUMMARY BLOCK */}
              <div className="flex flex-col justify-between py-1">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold font-serif leading-tight">
                    {book.title}
                  </h3>
                  <p className="text-xs font-medium uppercase tracking-wide text-[#967969]">
                    By {book.author}
                  </p>
                  <p className={`text-sm mt-3 leading-relaxed ${dark ? "text-gray-300" : "text-[#5a524a]"}`}>
                    {book.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}