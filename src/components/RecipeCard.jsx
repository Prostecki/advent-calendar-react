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
      <div className="card-inner rounded-lg bg-beige relative overflow-hidden">
        {/* Изображение с эффектом fade */}
        <img
          src={image}
          alt={recipe.name}
          className="recipe-image"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        {/* Цифра сверху */}
        <div
          style={{
            position: "absolute",
            top: numberPosition.top,
            left: numberPosition.left,
            border: recipe.border || "white",
            color: recipe.red_day || "white",
          }}
        >
          <h3 className="recipe-name">{recipe.id}</h3>
        </div>
        {/* Сообщение, если рецепт недоступен */}
        {!isAvailable && <div className="locked-message">Soon...</div>}
      </div>
    </div>
  );
};

export default RecipeCard;
