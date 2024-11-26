import React, { useEffect, useState } from "react";
import RecipeCard from "./components/RecipeCard";
import RecipeModal from "./components/RecipeModal";
import "./App.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentDate, setCurrentDate] = useState(
    new Date().toISOString().split("T")[0]
  );

  // Эта переменная управляет проверкой даты
  const isDateCheckEnabled = false;

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("/recipes.json");
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      }

      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };

    fetchRecipes();
  }, []);

  const isDateAvailable = (recipeDate) => {
    // Если проверка даты отключена, все рецепты доступны
    // Закомментируйте следующую строку для временного отключения проверки
    if (!isDateCheckEnabled) return true;

    // Основная логика проверки
    return recipeDate <= currentDate;
  };

  const handleCardClick = (isAvailable) => {
    if (!isAvailable) {
      alert("This recipe is not available yet. Please check back later!");
    }
  };

  return (
    <div className="app-container">
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="recipe-list">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              image={recipe.image_path}
              onClick={() =>
                isDateAvailable(recipe.date)
                  ? setSelectedRecipe(recipe)
                  : handleCardClick(false)
              }
              isAvailable={isDateAvailable(recipe.date)}
            />
          ))}
        </div>
      )}

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
