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
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ✖️
        </button>
        <h2 className="modal-title">{recipe.name}</h2>
        <div className="modal-text">
          <p>
            <strong className="font-medium">Ingredients:</strong>{" "}
            {recipe.ingredients.join(", ")}
          </p>
          <p>
            <strong className="font-medium">Preparation:</strong>{" "}
            {recipe.preparation}
          </p>
          <p>
            <strong className="font-medium">Preparation Time:</strong>{" "}
            {recipe.preparation_time} min
          </p>
          <p>
            <strong className="font-medium">Cooking Time:</strong>{" "}
            {recipe.cooking_time} min
          </p>
          <p>
            <strong className="font-medium">Total Time:</strong>{" "}
            {recipe.total_time} min
          </p>
          <p>
            <strong className="font-medium">Servings:</strong> {recipe.servings}
          </p>
          <p>
            <strong className="font-medium">Difficulty:</strong>{" "}
            {recipe.difficulty}
          </p>
          <div className="video-container">
            <video
              ref={videoRef}
              className="video"
              controls
              controlsList="nodownload"
              onContextMenu={(e) => e.preventDefault()}
              src={recipe.video_path}
              type="video/mov"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
