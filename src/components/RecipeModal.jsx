import { useRef, useEffect } from "react";

const RecipeModal = ({ recipe, onClose, currentDate }) => {
  const isAvailable = recipe.date <= currentDate;
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const videoRef = useRef(null);

  return (
    <>
      <section className="modal-overlay" onClick={onClose}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          {isAvailable ? (
            <>
              <button className="close-button" onClick={onClose}>
                ✖️
              </button>
              <h2 className="modal-title">{recipe.name}</h2>
              <div className="modal-text">
                {recipe.ingredients.map((item, i) => (
                  <div key={i}>
                    <h1 className="font-extrabold text-md">
                      Ingredientser {item.title}:{" "}
                    </h1>
                    <ol key={i}>
                      {item.ingredients_list.map((item, i) => (
                        <li className="ml-6 w-max list-decimal before:mr-2 before:text-xl">
                          {item}
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
                {recipe.preparation.map((item, i) => (
                  <div key={i}>
                    <hr className="my-4" />
                    <h3 className="font-extrabold text-xl">
                      Tilllagning {item.title}
                    </h3>
                    <ol>
                      {item.description.map((step, i) => (
                        <li
                          className="ml-6 w-max list-decimal before:mr-2 before:text-xl"
                          key={i}
                        >
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
                <p>
                  <strong className="font-extrabold">Total Time:</strong>{" "}
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
            </>
          ) : (
            <h1 className="text-3xl text-center font-extrabold">
              Kommer den {recipe.id}:e december!
            </h1>
            // <h1>Det kommer på {day}</h1>
          )}
        </div>
      </section>
    </>
  );
};

export default RecipeModal;
