import React from "react";

const RecipeCard = ({
  recipe,
  image,
  onClick,
  isAvailable,
  imagePosition,
  numberPosition,
}) => {
  const handleCardClick = () => {
    if (isAvailable) {
      onClick();
    }
  };

  return (
    <div
      className={`recipe-card ${isAvailable ? "" : "disabled"}`}
      onClick={handleCardClick}
    >
      <div className="card-inner rounded-lg bg-beige">
        <img
          src={image}
          alt={recipe.name}
          className="recipe-image"
          style={{
            position: "absolute",
            top: imagePosition.top,
            left: imagePosition.left,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: numberPosition.top,
            left: numberPosition.left,
            border: recipe.border || "white",
            color: recipe.red_day || "white",
            filter: "drop-shadow(2px 2px 3px black)",
          }}
        >
          <h3 className="recipe-name">{recipe.id}</h3>
        </div>
        {!isAvailable && <div className="locked-message">Soon...</div>}
      </div>
    </div>
  );
};

export default RecipeCard;
