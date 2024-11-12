// RecipeCard.js
import React from "react";

const RecipeCard = ({ recipe, image, onClick }) => {
  return (
    <div
      // className={`recipe-card ${isAvailable ? "" : "disabled"}`}
      className="recipe-card"
      onClick={onClick} // Добавляем обработчик клика
    >
      <div className="card-inner">
        <div className="card-front">
          <img src={image} alt={recipe.name} className="recipe-image" />
          <h3 className="recipe-name">{recipe.name}</h3>
        </div>
      </div>
      {/* {!isAvailable && <div className="locked-message">Закрыто</div>} */}
    </div>
  );
};

export default RecipeCard;
