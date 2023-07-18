import MovieDisplay from "./MovieDisplay";

export default function MovieList({ movies, onMovieClick }) {
  const loading = () => <></>;
  const loaded = () => (
    <ul className="movies">
      {movies.Search.map((movie) => (
        <MovieDisplay
          key={movie.imdbID}
          movie={movie}
          onClick={() => onMovieClick(movie)}
        />
      ))}
    </ul>
  );
  return movies.length === 0 ? loading() : loaded();
}
