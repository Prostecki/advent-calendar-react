import { useRef, useEffect, useState } from "react";

import VideoComponent from "./VideoComponent";

const RecipeModal = ({ recipe, onClose, currentDate }) => {
  const modalContentRef = useRef(null);
  const isAvailable = recipe.date <= currentDate;

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      setShowScrollButton(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      ? completedSteps.filter((s) => s !== step)
      : [...completedSteps, step];

    setCompletedSteps(updatedSteps);
    localStorage.setItem("completedSteps", JSON.stringify(updatedSteps));
  };

  const videoRef = useRef(null);

  const scrollToTop = () => {
    console.log("funkar? ");
    if (modalContentRef.current) {
      modalContentRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <section className="modal-overlay" onClick={onClose}>
        <div
          className="modal-content modal-bg"
          onClick={(e) => e.stopPropagation()}
          ref={modalContentRef}
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
              <div className="flex gap-4 px-2 max-w-[25rem] m-auto border shadow-li justify-center bg-white rounded-lg">
                <div className="flex items-center gap-1 my-3 text-browny">
                  <img src="/img/clock.png" alt="tiden" className="w-6" />
                  {recipe.total_time} min
                </div>
                <div className="flex items-center gap-1 my-3 text-browny">
                  <img
                    src="/img/cutlery.png"
                    alt="tillagninstid"
                    className="w-6"
                  />
                  {recipe.servings}
                </div>
              </div>
              <div className="modal-text">
                <h1 className="font-thin text-[2.8rem] my-5 text-browny">
                  Ingredienser
                </h1>
                {recipe.ingredients.map((item, i) => (
                  <div key={i}>
                    <h1 className="font-thin text-4xl text-browny">
                      {item.title || ""}:{" "}
                    </h1>
                    <ol
                      className="shadow-li bg-white rounded-lg px-3 py-2"
                      key={i}
                    >
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
                <div>
                  <h1 className="font-thin text-5xl my-4 text-browny">
                    Tillagning
                  </h1>
                  {recipe.preparation.map((item, i) => (
                    <div key={i}>
                      <h1 className="font-thin text-4xl my-2 text-browny">
                        {item.title}
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
              </div>
            </>
          ) : (
            <h1 className="text-3xl text-center font-extrabold">
              Kommer den {recipe.id}:e december<span>!</span>
            </h1>
            // <h1>Det kommer på {day}</h1>
          )}
          <button
            onClick={scrollToTop}
            className="shadow-li px-3 rounded-lg bg-white animate-pulse"
          >
            {" "}
            ↑ Top
          </button>
        </div>
      </section>
    </>
  );
};

export default RecipeModal;
