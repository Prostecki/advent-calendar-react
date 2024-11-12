import { useRef, useEffect } from "react";

const RecipeModal = ({ recipe, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  const videoRef = useRef(null);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ✖️
        </button>
        <h2 className="modal-title">{recipe.name}</h2>
        <div className="modal-body">
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
          <div className="video-container">
            <video
              ref={videoRef}
              width={300}
              controls
              controlsList="nodownload"
              onContextMenu={(e) => e.preventDefault()}
              src="src/assets/img/test-video.mov"
              type="video/mov"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
