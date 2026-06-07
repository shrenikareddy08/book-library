import SuggestionsPresenter from "./SuggestionsPresenter";

export default function SuggestionsContainer({
  books,
  favorites,
  setFavorites,
  theme,
}) {
  const toggleFav = (book) => {
    const exists = favorites.find(
      (b) => b.id === book.id
    );

    if (exists) {
      setFavorites(
        favorites.filter(
          (b) => b.id !== book.id
        )
      );
    } else {
      setFavorites([
        ...favorites,
        book,
      ]);
    }
  };

  return (
    <SuggestionsPresenter
      books={books}
      favorites={favorites}
      toggleFav={toggleFav}
      theme={theme}
    />
  );
}