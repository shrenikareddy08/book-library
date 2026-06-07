export default function Footer() {
  return (
    <footer className="bg-[#291303] text-[#e8d8c3] border-t border-[#3e1f08]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        
        {/* Responsive Layout Grid columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left items-start">
          
          {/* COLUMN 1: THE READING ROOM IDENTITY */}
          <div className="space-y-2">
            <h2 className="text-xl font-serif tracking-wide text-white">
              The Reading Room 📚
            </h2>
            <p className="text-xs text-[#c8a98a] max-w-xs leading-relaxed mx-auto md:mx-0">
              A calm space for readers, stories, and imagination. Bringing book lovers together one page at a time.
            </p>
          </div>

          {/* COLUMN 2: CONTACT DETAILS */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase tracking-widest text-[#a98b6f] font-semibold">
              Contact Us
            </h3>
            <ul className="text-xs text-[#c8a98a] space-y-1.5">
              <li>✉️ hello@thereadingroom.com</li>
              <li>📞 +91 98765 43210</li>
            </ul>
          </div>

          {/* COLUMN 3: LOCATION INFORMATION */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase tracking-widest text-[#a98b6f] font-semibold">
              Our Sanctuary Location
            </h3>
            <div className="text-xs text-[#c8a98a] space-y-1">
              <p className="font-medium text-[#e8d8c3]">📍 Madhapur</p>
              <p className="opacity-75">Hyderabad, Telangana, India</p>
            </div>
          </div>

        </div>

        {/* BOTTOM METADATA BAR */}
        <div className="mt-8 pt-6 border-t border-[#3e1f08] text-center">
          <p className="text-[11px] text-[#a98b6f] tracking-wide">
            © {new Date().getFullYear()} The Reading Room. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}