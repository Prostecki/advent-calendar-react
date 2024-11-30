import React from "react";

const RecipeCard = ({ recipe, image, onClick, isAvailable, position }) => {
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
        <div className="card-front relative">
          <img src={image} alt={recipe.name} className="recipe-image" />
          <div
            style={{
              position: "absolute",
              top: position.top,
              left: position.left,
              color: "white",
              filter: "drop-shadow(2px 2px 3px black)",
            }}
          >
            <h3 className="recipe-name">{recipe.id}</h3>
          </div>
        </div>
        {!isAvailable && <div className="locked-message">Soon...</div>}
      </div>
    </div>
  );
};

export default RecipeCard;
