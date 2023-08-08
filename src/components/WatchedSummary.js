export function WatchedSummary({ watched }) {
  // const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  // const avgUserRating = average(watched.map((movie) => movie.userRating));
  // const avgRuntime = average(watched.map((movie) => movie.runtime));

  let totalImdbRating = 0,
    totalPersonalRaiting = 0,
    runtime = 0;

  watched.forEach((movie) => {
    if (!!movie.imdbRating) totalImdbRating += movie.imdbRating;
    if (!!movie.userRating) totalPersonalRaiting += movie.userRating;
    if (!!movie.runtime) runtime += movie.runtime;
  });

  const avgImdbRating = totalImdbRating / watched.length;
  const avgUserRating = totalPersonalRaiting / watched.length;

  return (
    <div className="summary">
      <h2>Movies you watched</h2>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p>
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(1)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(1)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{runtime} min</span>
        </p>
      </div>
    </div>
  );
}
