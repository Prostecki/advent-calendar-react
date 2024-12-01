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
          {recipe.ingredients.map((item, i) => (
            <p key={i}>
              <strong className="font-medium">
                Ingredients of {item.title}:{" "}
              </strong>{" "}
              {/* {recipe.ingredients.join(", ")} */}
              {item.ingredients_list.join(", ")}
            </p>
          ))}
          {recipe.preparation.map((item, i) => (
            <div key={i}>
              <h3 className="font-medium">Tilllagning of {item.title}</h3>
              <ol>
                {item.description.map((step, i) => (
                  <li
                    className="flex items-center before:content-['🍪'] before:mr-2 before:text-xl"
                    key={i}
                  >
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          ))}
          <p>
            <strong className="font-medium">Total Time:</strong>{" "}
            {recipe.total_time} min
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
