import noImage from "./../img/no-film-img.jpg";

export function Movie({ movie, onSelectMovie }) {
  return (
    <li onClick={() => onSelectMovie(movie.imdbID)}>
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : noImage}
        alt={`${movie.Title} poster`}
      />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
