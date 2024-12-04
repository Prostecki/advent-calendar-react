import React, { useEffect, useState } from "react";
import RecipeCard from "./components/RecipeCard";
import RecipeModal from "./components/RecipeModal";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const imagePositions = [
    { top: "1.5rem", left: "3.5rem" },
    { top: "3.5rem", left: "3rem" },
    { top: "2rem", left: "3.5rem" },
    { top: "2rem", left: "1rem" },
  ];

  const numberPositions = [
    { top: "6rem", left: "2rem" },
    { top: "0rem", left: "8rem" },
    { top: "6rem", left: "1.5rem" },
    { top: "6.5rem", left: "8rem" },
  ];

  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("Laddar godsaker");
  const [currentDate, setCurrentDate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");

  // Эта переменная управляет проверкой даты
  const isDateCheckEnabled = true;

  useEffect(() => {
    const preloadImages = () => {
      recipes.forEach((recipe) => {
        const img = new Image();
        img.src = recipe.image_path;
      });
    };

    preloadImages();
  }, [recipes]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("/recipes.json");
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    // setTimeout(() => {
    //   setLoadingText();
    //   setLoading(false);
    fetchRecipes();
    // }, 1500);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingText();
    }, 2000);

    return () => clearInterval(interval); // Очистка интервала
  }, []);

  const isDateAvailable = (recipeDate) => {
    // Если проверка даты отключена, все рецепты доступны
    // Закомментируйте следующую строку для временного отключения проверки
    if (!isDateCheckEnabled) return true;

    // Основная логика проверки
    return recipeDate <= currentDate;
  };

  return (
    <div className="app-container bg-dark_beige">
      {loading ? (
        <div className="loader">
          <div className="loader-text text-red-600 cream-cake">
            <h1>
              {loadingText}
              <span className="font-sans">...</span>
            </h1>
          </div>
        </div>
      ) : (
        <div className="recipe-list">
          {recipes.map((recipe, index) => (
            <RecipeCard
              imagePosition={imagePositions[index % imagePositions.length]}
              numberPosition={numberPositions[index % numberPositions.length]}
              key={recipe.id}
              recipe={recipe}
              image={recipe.image_path}
              onClick={() => setSelectedRecipe(recipe)}
              isAvailable={isDateAvailable(recipe.date)}
            />
          ))}
        </div>
      )}

      {selectedRecipe && (
        <RecipeModal
          day={day}
          recipe={selectedRecipe}
          currentDate={currentDate}
          onClose={() => setSelectedRecipe(null)}
        />
      )}
      <Footer />
    </div>
  );
};

export default App;
