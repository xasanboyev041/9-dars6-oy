import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import "../styles/HomePage.css";

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, loading, error } = useFetch("https://dummyjson.com/recipes");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredRecipes = data?.recipes?.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="homepage">
      <input
        type="text"
        placeholder="Search for a recipe"
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      <div className="recipe-grid">
        {filteredRecipes?.map((recipe) => (
          <div key={recipe.id} className="recipe-card">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="recipe-image"
            />
            <h3>
              <a href={`/recipes/${recipe.id}`}>{recipe.name}</a>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
