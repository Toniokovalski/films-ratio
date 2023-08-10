import { useState } from "react";
import { useLocalStorageState } from "./hooks/useLocalStorageState";
import { useMovies } from "./hooks/useMovies";
import { WatchedMoviesList } from "./components/WatchedMoviesList";
import { WatchedSummary } from "./components/WatchedSummary";
import { Box } from "./components/Box";
import { Main } from "./components/Main";
import { NumResults } from "./components/NumResults";
import { Search } from "./components/Search";
import { NavBar } from "./components/NavBar";
import { ErrorMessage } from "./components/ErrorMessage";
import { Loader } from "./components/Loader";
import { MovieDetails } from "./components/MovieDetails";
import { MovieList } from "./components/MovieList";

export const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const { movies, isLoading, error } = useMovies(query);

  const [watched, setWatched] = useLocalStorageState([], "watched");

  function handleSelectMovie(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(event, id) {
    event.stopPropagation();
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  return (
    <>
      <NavBar>
        <Search query={query} setQuery={setQuery} />
        <NumResults movies={movies} />
      </NavBar>

      <Main>
        <Box>
          {movies.length < 1 && (
            <h1 className="title">Hit Enter to focus on input</h1>
          )}
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
              watched={watched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
                onMovieClick={handleSelectMovie}
              />
            </>
          )}
        </Box>
      </Main>
    </>
  );
}
