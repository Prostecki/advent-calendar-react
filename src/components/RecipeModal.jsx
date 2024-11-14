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
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg p-6 mx-4 bg-white rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✖️
        </button>
        <h2 className="mb-4 text-2xl font-semibold text-center text-gray-800">
          {recipe.name}
        </h2>
        <div className="space-y-2">
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
          <div className="flex justify-center mt-4">
            <video
              ref={videoRef}
              className="w-full max-w-md rounded-lg shadow-md"
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
