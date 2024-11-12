// RecipeCard.js
import React from "react";

const RecipeCard = ({ recipe, image, onClick }) => {
  return (
    <div className="recipe-card" onClick={onClick}>
      <div className="card-inner">
        <div className="card-front">
          <img src={image} alt={recipe.name} className="recipe-image" />
          <h3 className="recipe-name">{recipe.name}</h3>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
