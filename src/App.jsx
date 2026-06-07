import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; // Added useLocation here

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
  const location = useLocation(); // Hook to listen to route changes

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedGenre, setSelectedGenre] = useState("Fantasy");

  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  // Check if the user is explicitly viewing the home domain route "/"
  const isHomePage = location.pathname === "/";

  return (
    <div
      className={`min-h-screen flex flex-col ${
        theme === "dark"
          ? "bg-[#0f0f0f] text-white"
          : "bg-[#fdfaf6] text-black"
      }`}
    >
      {/* Dynamic Render: Navbar will now only mount if you are NOT on the landing home route */}
      {!isHomePage && (
        <Navbar
          theme={theme}
          setTheme={setTheme}
        />
      )}

      <main className="flex-1">
        <Routes>

          {/* HOME */}
          <Route
            path="/"
            element={<Home />}
          />

          {/* SEARCH */}
          <Route
            path="/search"
            element={
              <SearchBar
                theme={theme}
              />
            }
          />

          {/* LIBRARY */}
          <Route
            path="/library"
            element={
              <Library
                theme={theme}
                setSelectedGenre={setSelectedGenre}
              />
            }
          />

          {/* ORIGINAL GENRES PAGE */}
          <Route
            path="/genres"
            element={
              <GenreLayout />
            }
          >
            <Route
              path=":genreName"
              element={<GenrePage />}
            />
          </Route>

          {/* KEEP YOUR EXISTING GENRES COMPONENT */}
          <Route
            path="/genres-overview"
            element={
              <Genres
                selectedGenre={selectedGenre}
                theme={theme}
              />
            }
          />

          {/* BOOK DETAILS (Dynamic Route) */}
          <Route
            path="/books/:id"
            element={<BookDetails />}
          />

          {/* SUGGESTIONS */}
          <Route
            path="/suggestions"
            element={
              <Suggestions
                favorites={favorites}
                setFavorites={setFavorites}
              />
            }
          />

          {/* PROTECTED ROUTE */}
          <Route
            path="/favorites"
            element={
              <ProtectedRoute
                isAllowed={favorites.length > 0}
              >
                <Favorites
                  favorites={favorites}
                  theme={theme}
                />
              </ProtectedRoute>
            }
          />

          {/* PROFILE */}
          <Route
            path="/profile"
            element={
              <Profile
                theme={theme}
              />
            }
          />

          {/* CONTACT */}
          <Route
            path="/contact"
            element={<ContactForm />}
          />

        </Routes>
      </main>

      <Footer />
    </div>
  );
}