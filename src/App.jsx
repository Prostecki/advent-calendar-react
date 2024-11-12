// App.js
import React, { useEffect, useState } from "react";
import RecipeCard from "./components/RecipeCard";
import RecipeModal from "./components/RecipeModal";
import "./App.css";

const images = [
  "src/assets/img/1.png",
  "src/assets/img/2.png",
  "src/assets/img/3.png",
  "src/assets/img/4.png",
  "src/assets/img/5.png",
  "src/assets/img/6.png",
  "src/assets/img/7.png",
  "src/assets/img/8.png",
  "src/assets/img/9.png",
  "src/assets/img/10.png",
  "src/assets/img/11.png",
  "src/assets/img/12.png",
  "src/assets/img/13.png",
  "src/assets/img/14.png",
  "src/assets/img/15.png",
  "src/assets/img/16.png",
  "src/assets/img/17.png",
  "src/assets/img/18.png",
  "src/assets/img/19.png",
  "src/assets/img/20.png",
  "src/assets/img/21.png",
  "src/assets/img/22.png",
  "src/assets/img/23.png",
  "src/assets/img/24.png",
  "src/assets/img/25.png",
];

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("/recipes.json");
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div className="app-container">
      <div className="recipe-list">
        {recipes.map((recipe, index) => (
          <RecipeCard
            key={index}
            recipe={recipe}
            image={images[index]}
            onClick={() => setSelectedRecipe(recipe)}
          />
        ))}
      </div>
      {selectedRecipe && (
        <RecipeModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
    </div>
  );
};

export default App;
