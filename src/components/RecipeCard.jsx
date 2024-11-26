import React from "react";

const RecipeCard = ({ recipe, image, onClick, isAvailable }) => {
  const handleCardClick = () => {
    if (isAvailable) {
      onClick(); // Только если рецепт доступен, вызовем функцию
    }
  };

  return (
    <div
      className={`recipe-card ${isAvailable ? "" : "disabled"}`}
      onClick={handleCardClick}
    >
      <div className="card-inner">
        <div className="card-front">
          <img src={image} alt={recipe.name} className="recipe-image" />
          <h3 className="recipe-name">{recipe.name}</h3>
        </div>
        {!isAvailable && <div className="locked-message">Soon...</div>}
      </div>
    </div>
  );
};

export default RecipeCard;
