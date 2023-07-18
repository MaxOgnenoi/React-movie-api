import { useState, useEffect } from "react";
import MovieList from "./components/MovieList";
import "./styles.css";
import SearchForm from "./components/SearchForm";
import MovieDescription from "./components/MovieDescription";

export default function App() {
  const apiKey = "a3eb29a6"; // this would be in .env

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const getMovies = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`
      );
      const data = await response.json();
      setMovies(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getRandomMovie = (movies) => {
    const randomIndex = Math.floor(Math.random() * movies.length);
    return movies[randomIndex];
  };

  useEffect(() => {
    const defaultMovies = ["man", "shark", "park", "home", "paris", "james"];

    const fetchData = async () => {
      const randomMovieTitle =
        defaultMovies[Math.floor(Math.random() * defaultMovies.length)];
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&s=${randomMovieTitle}`
      );
      const data = await response.json();
      setMovies(data);
      setSelectedMovie(getRandomMovie(data.Search));
    };

    fetchData();
  }, []); // Run only once on component mount

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="App">
      <h1 className="header">Movie finder</h1>
      <SearchForm getMovies={getMovies} />
      <div className="main">
        <div className="description">
          {selectedMovie && <MovieDescription movie={selectedMovie} />}
        </div>
        <MovieList movies={movies} onMovieClick={handleMovieClick} />
      </div>
    </div>
  );
}
