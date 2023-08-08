export function WatchedMovie({ movie, onDeleteWatched, onMovieClick }) {
  return (
    <li className="list-item" onClick={() => onMovieClick(movie.imdbID)}>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        {!!movie.imdbRating && (
          <p>
            <span>⭐️</span>
            <span>{movie.imdbRating}</span>
          </p>
        )}

        {!!movie.userRating && (
          <p>
            <span>🌟</span>
            <span>{movie.userRating}</span>
          </p>
        )}

        {!!movie.runtime && (
          <p>
            <span>⏳</span>
            <span>{movie.runtime} min</span>
          </p>
        )}

        <button
          className="btn-delete"
          onClick={(event) => onDeleteWatched(event, movie.imdbID)}
        >
          X
        </button>
      </div>
    </li>
  );
}
