import { WatchedMovie } from "./WatchedMovie";

export function WatchedMoviesList({ watched, onDeleteWatched, onMovieClick }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onDeleteWatched={onDeleteWatched}
          onMovieClick={onMovieClick}
        />
      ))}
    </ul>
  );
}
