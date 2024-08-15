import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import "../styles/RecipeDetailPage.css";

const RecipeDetailPage = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `https://dummyjson.com/recipes/${id}`
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  const recipe = data;

  return (
    <div className="recipe-detail-page">
      <h1>{recipe.name}</h1>
      <img
        src={recipe.image}
        alt={recipe.name}
        className="recipe-detail-image"
      />
      <p className="recipe-detail-description">{recipe.description}</p>
    </div>
  );
};

export default RecipeDetailPage;
