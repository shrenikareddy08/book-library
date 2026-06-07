import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SearchBar from "./components/SearchBar";
import Library from "./components/Library";
import Suggestions from "./components/Suggestions";
import Favorites from "./components/Favorites";
import Genres from "./components/Genres";
import Profile from "./components/Profile";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

import GenreLayout from "./components/GenreLayout";
import GenrePage from "./components/GenrePage";
import BookDetails from "./components/BookDetails";

import ProtectedRoute from "./components/ProtectedRoute";
import { useTheme } from "./context/ThemeContext";

export default function App() {
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedGenre, setSelectedGenre] = useState("Fantasy");

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);


  const isHomePage = location.pathname === "/";

  return (
    <div
      className={`min-h-screen flex flex-col ${
        theme === "dark"
          ? "bg-[#0f0f0f] text-white"
          : "bg-[#fdfaf6] text-black"
      }`}
    >

      {!isHomePage && (
        <Navbar theme={theme} setTheme={setTheme} />
      )}

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/search" element={<SearchBar theme={theme} />} />

          <Route
            path="/library"
            element={
              <Library
                theme={theme}
                setSelectedGenre={setSelectedGenre}
              />
            }
          />

          <Route path="/genres" element={<GenreLayout />}>
            <Route path=":genreName" element={<GenrePage />} />
          </Route>

          <Route
            path="/genres-overview"
            element={
              <Genres selectedGenre={selectedGenre} theme={theme} />
            }
          />

          <Route path="/books/:id" element={<BookDetails />} />

          <Route
            path="/suggestions"
            element={
              <Suggestions
                favorites={favorites}
                setFavorites={setFavorites}
              />
            }
          />

        <Route
  path="/favorites"
  element={
    <ProtectedRoute isAllowed={favorites.length > 0}>
      <Favorites favorites={favorites} theme={theme} />
    </ProtectedRoute>
  }
/>

          <Route path="/profile" element={<Profile theme={theme} />} />

          <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}