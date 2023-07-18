import { useState, useEffect } from "react";

export default function MovieDescription({ movie }) {
  const apiKey = "756d36ec";
  const [item, setItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getMovie = async (imdbID) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`
      );
      const data = await response.json();
      setItem(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    if (movie) {
      getMovie(movie.imdbID);
    }
  }, [movie]);

  return (
    <div>
      {item && (
        <div className="description" onClick={handleModalToggle}>
          <ul>
            <li className="img" style={{ listStyleType: "none" }}>
              <img className="img" src={movie.Poster} alt={movie.Title} />
            </li>
            <li className="plot">{item.Plot}</li>
            <li>Director: {item.Director}</li>
            <li>Actors: {item.Actors}</li>
            <li className="rating">Rating IMDB: {item.imdbRating}</li>
          </ul>
        </div>
      )}
    </div>
  );
}
