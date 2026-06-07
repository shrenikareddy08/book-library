import { useParams } from "react-router-dom";

export default function BookDetails() {
  const { id } = useParams();

  const books = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      genre: "Self Growth",
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      desc: "Small habits compound into remarkable life changes over time."
    },
    {
      id: 2,
      title: "The Midnight Library",
      author: "Matt Haig",
      genre: "Fantasy",
      img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
      desc: "A magical library between life and death exploring infinite lives."
    },
    {
      id: 3,
      title: "It Ends With Us",
      author: "Colleen Hoover",
      genre: "Romance",
      img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
      desc: "A powerful emotional story about love, pain and strength."
    },
    {
      id: 4,
      title: "Sherlock Holmes",
      author: "Arthur Conan Doyle",
      genre: "Mystery",
      img: "https://images.unsplash.com/photo-1501139083538-0139583c060f",
      desc: "Classic detective stories filled with logic and deduction."
    },
    {
      id: 5,
      title: "Deep Work",
      author: "Cal Newport",
      genre: "Self Growth",
      img: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
      desc: "Focus without distraction to produce meaningful work."
    },
    {
      id: 6,
      title: "The Alchemist",
      author: "Paulo Coelho",
      genre: "Philosophy",
      img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
      desc: "A journey of following dreams and discovering destiny."
    },
    {
      id: 7,
      title: "Harry Potter",
      author: "J.K. Rowling",
      genre: "Fantasy",
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      desc: "A boy discovers magic and his destiny at Hogwarts."
    },
    {
      id: 8,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      genre: "Romance",
      img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
      desc: "A timeless story of love and misunderstanding."
    },
    {
      id: 9,
      title: "Gone Girl",
      author: "Gillian Flynn",
      genre: "Thriller",
      img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
      desc: "A psychological thriller about marriage and deception."
    },
    {
      id: 10,
      title: "Subtle Art of Not Giving a F*ck",
      author: "Mark Manson",
      genre: "Self Growth",
      img: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      desc: "A bold approach to focusing on what truly matters."
    },
    {
      id: 11,
      title: "Dracula",
      author: "Bram Stoker",
      genre: "Horror",
      img: "https://images.unsplash.com/photo-1501139083538-0139583c060f",
      desc: "A gothic tale of vampires and eternal darkness."
    },
    {
      id: 12,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      genre: "Finance",
      img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
      desc: "Lessons about money and financial independence."
    },
    {
      id: 13,
      title: "The Book Thief",
      author: "Markus Zusak",
      genre: "Historical",
      img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
      desc: "A moving WWII story narrated by Death itself."
    }
  ];

  const book = books.find(
    (b) => b.id === Number(id)
  );

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          Book Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 px-6 bg-[#fdfaf6]">

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

        <img
          src={book.img}
          alt={book.title}
          className="w-full h-[450px] object-cover"
        />

        <div className="p-8">

          <h1 className="text-5xl font-serif">
            {book.title}
          </h1>

          <p className="mt-4 text-lg text-[#967969]">
            Author: {book.author}
          </p>

          <p className="text-[#967969]">
            Genre: {book.genre}
          </p>

          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-3">
              About this Book
            </h2>

            <p className="text-gray-700 leading-8">
              {book.desc}
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}