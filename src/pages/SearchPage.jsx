import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import "../styles/SearchPage.css";

const SearchPage = () => {
  const [query, setQuery] = useState("Margherita");
  const { data, loading, error } = useFetch(
    `https://dummyjson.com/recipes/search?q=${query}`
  );

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="search-page">
      <input
        type="text"
        value={query}
        onChange={handleQueryChange}
        className="query-input"
      />
      <ul className="search-result-list">
        {data?.recipes?.map((recipe) => (
          <li key={recipe.id}>
            <a href={`/recipes/${recipe.id}`}>{recipe.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
