import { useRef, useEffect, useState } from "react";

import VideoComponent from "./VideoComponent";

const RecipeModal = ({ recipe, onClose, currentDate }) => {
  const isAvailable = recipe.date <= currentDate;
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Состояние для хранения завершенных шагов
  const [completedSteps, setCompletedSteps] = useState(() => {
    const savedSteps = localStorage.getItem("completedSteps");
    return savedSteps ? JSON.parse(savedSteps) : [];
  });

  const [showPreview, setShowPreview] = useState(false);

  const handleShowPreview = () => {
    setShowPreview(true);
  };

  const handleStepClick = (step) => {
    const updatedSteps = completedSteps.includes(step)
      ? completedSteps.filter((s) => s !== step) // Удаляем шаг, если он уже есть
      : [...completedSteps, step]; // Добавляем шаг, если его нет

    setCompletedSteps(updatedSteps);
    localStorage.setItem("completedSteps", JSON.stringify(updatedSteps));
  };

  const videoRef = useRef(null);

  return (
    <>
      <section className="modal-overlay" onClick={onClose}>
        <div
          className="modal-content modal-bg"
          onClick={(e) => e.stopPropagation()}
        >
          {isAvailable ? (
            <>
              <button className="close-button" onClick={onClose}>
                ✖️
              </button>
              <h1 className="modal-title sm:text-4xl text-browny text-5xl">
                {recipe.name}
              </h1>
              <div
                className="flex flex-col items-center cursor-pointer my-5"
                onClick={handleShowPreview}
              >
                {showPreview ? (
                  <VideoComponent
                    videoPath={recipe.video_path}
                    videoRef={videoRef}
                  />
                ) : (
                  <div className="set-show-preview relative">
                    <img
                      src={recipe.preview_pic}
                      alt="Preview"
                      className="set-show-preview"
                    />
                    <img
                      src="/img/play.png"
                      className="absolute inset-0 m-auto w-[3rem] "
                      alt="play"
                    />
                  </div>
                )}
              </div>
              <div className="flex items-center gap-1 my-3">
                <img src="/img/clock.png" alt="tiden" className="w-6" />
                {recipe.total_time} min
              </div>
              <div className="flex items-center gap-1 my-3">
                <img
                  src="/img/cutlery.png"
                  alt="tillagninstid"
                  className="w-6"
                />
                {recipe.servings}
              </div>
              <div className="modal-text">
                {recipe.ingredients.map((item, i) => (
                  <div key={i}>
                    <h1 className="font-thin text-4xl my-2">
                      Ingredienser {item.title || ""}:{" "}
                    </h1>
                    <ol key={i}>
                      {item.ingredients_list.map((item, i) => (
                        <li
                          key={i}
                          className="w-[100%] flex items-center gap-1 my-2 before:mr-2 before:text-xl"
                        >
                          🎄 {item}
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
                {recipe.preparation.map((item, i) => (
                  <div key={i}>
                    <hr className="my-4" />
                    <h1 className="font-thin text-4xl my-2">
                      Tillagning {item.title}
                    </h1>
                    <ol className="max-w-full break-words">
                      {item.description.map((step, i) => (
                        <li
                          key={i}
                          className={`w-[90%] flex items-start gap-2 cursor-pointer bg-white shadow-li rounded-lg px-3 py-3 my-3 break-words ${
                            completedSteps.includes(step)
                              ? "text-stone-400"
                              : ""
                          }`}
                          onClick={() => handleStepClick(step)}
                        >
                          <span className="relative w-5 h-5 mt-1 flex items-center justify-center border-2 border-gray-600 rounded shrink-0">
                            {completedSteps.includes(step) && (
                              <span className="absolute top-[1.5px] w-[6px] h-[12px] border-r-2 border-b-2 border-green-600 transform rotate-45"></span>
                            )}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
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
