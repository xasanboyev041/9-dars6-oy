import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/recipes/:id" element={<RecipeDetailPage />} />
      <Route path="/search" element={<SearchPage />} />
    </Routes>
  );
}

export default App;
