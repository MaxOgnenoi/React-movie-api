import { useState } from "react";

export default function MovieDisplay({ movie, onClick }) {
  const [desc, setDesc] = useState(false);

  function handleClick() {
    setDesc(!desc);
    onClick();
  }

  const loading = () => <></>;

  const loaded = () => (
    <div className="movie" onClick={handleClick}>
      <h2>{movie.Title}</h2>
      <img src={movie.Poster} alt={movie.Title} />
    </div>
  );

  return movie && movie.Title ? loaded() : loading();
}
