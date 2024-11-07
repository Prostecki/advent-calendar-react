const RecipeModal = ({ recipe, onClose }) => {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ✖️
        </button>
        <h2>{recipe.name}</h2>
        <p>
          <strong>Ingredients:</strong> {recipe.ingredients.join(", ")}
        </p>
        <p>
          <strong>Preparation:</strong> {recipe.preparation}
        </p>
        <p>
          <strong>Preparation Time:</strong> {recipe.preparation_time} min
        </p>
        <p>
          <strong>Cooking Time:</strong> {recipe.cooking_time} min
        </p>
        <p>
          <strong>Total Time:</strong> {recipe.total_time} min
        </p>
        <p>
          <strong>Servings:</strong> {recipe.servings}
        </p>
        <p>
          <strong>Difficulty:</strong> {recipe.difficulty}
        </p>
      </div>
    </div>
  );
};

export default RecipeModal;
