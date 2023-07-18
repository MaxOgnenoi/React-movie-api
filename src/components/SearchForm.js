import { useState } from "react";
const styles = {
  input: {
    margin: "0 1rem",
    backgroundColor: "grey",
    width: "20%"
  },
  button: {
    backgroundColor: "grey",
    color: "blanchedalmond",
    padding: "7px",
    borderRadius: "10px",
    fontSize: "15px",
    border: "1px solid blanchedalmond"
  }
};
export default function Form({ getMovies }) {
  const [formData, setFormData] = useState({
    searchTerm: ""
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getMovies(formData.searchTerm);
  };
  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      <input
        style={styles.input}
        name="searchTerm"
        type="text"
        onChange={handleChange}
        value={formData.searchTerm}
      />
      <input style={styles.button} type="submit" value="Search" />
    </form>
  );
}
