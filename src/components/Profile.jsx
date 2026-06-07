import { useTheme } from "../context/ThemeContext";

export default function Profile() {
  const { theme } = useTheme();
  const dark = theme === "dark";

  const communityWall = [
    { name: "Shrenika", currentRead: "Harry Potter", text: "Getting lost in magical worlds again. Hogwarts always feels like home." },
    { name: "Shloka", currentRead: "Sherlock Holmes", text: "Trying to piece together the clues before the detective explains it all." },
    { name: "Bhargavi", currentRead: "Pride and Prejudice", text: "Austen's witty banter holds up beautifully. Truly an all-time favorite." },
    { name: "Anvitha", currentRead: "Atomic Habits", text: "Focusing on small changes every day. This book is shifting my mindset." }
  ];

  return (
    <div className={`min-h-screen pt-40 pb-20 px-6 transition-colors duration-300 ${
      dark ? "bg-[#0f0f0f] text-zinc-300" : "bg-[#fdfaf6] text-[#3c3530]"
    }`}>
      <div className="max-w-xl mx-auto space-y-10">
        
        {/* CLEAN USER ROW: ONE LINE GREETING + USER AVATAR PHOTO */}
        <div className="flex items-center justify-between border-b pb-6 border-zinc-200 dark:border-zinc-800">
          <div>
            <h2 className="text-3xl font-serif tracking-tight">Hey, Reader</h2>
            <p className="text-xs text-[#967969] tracking-widest uppercase mt-0.5">@TheReadingRoom</p>
          </div>
          
          {/* Real, warm aesthetic reader user profile photo */}
          <div className="w-14 h-14 rounded-full overflow-hidden border border-[#967969]/30 shadow-sm">
            <img 
              src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcSC4xbjK7BrucxS_bCc8OJCxkxer55kHazW4CWrUebucEXvcURszoqcZpSSL0fqWpjPrtkhgBa22V_4Y1Y" 
              alt="User profile avatar" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* PROFILE WALL */}
        <div className="space-y-6">
          <h3 className="text-xs uppercase tracking-[0.2em] text-[#967969] font-semibold">
            Profile Wall
          </h3>

          <div className="space-y-5">
            {communityWall.map((reader, index) => (
              <div 
                key={index}
                className={`p-5 rounded-xl border transition-colors ${
                  dark ? "bg-[#141414] border-zinc-800/60" : "bg-white border-zinc-200/60"
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <span className="font-serif font-bold text-sm text-[#967969]">{reader.name}</span>
                  <span className="opacity-50 italic">Reading: {reader.currentRead}</span>
                </div>
                <p className="text-sm opacity-85 leading-relaxed font-serif">
                  "{reader.text}"
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}