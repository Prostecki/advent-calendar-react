const RecipeCard = ({
  recipe,
  image,
  onClick,
  isAvailable,
  imagePosition,
  numberPosition,
}) => {
  const handleCardClick = () => {
    onClick();
  };

  return (
    <div
      className={`recipe-card ${isAvailable ? "" : "disabled"}`}
      onClick={handleCardClick}
    >
      <div className="card-inner rounded-lg bg-beige relative overflow-hidden">
        <img
          loading="lazy"
          src={image}
          alt={recipe.id}
          className="recipe-image"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: isAvailable ? "1" : "0.5",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: numberPosition.top,
            left: numberPosition.left,
            border: recipe.border || "white",
            color: recipe.red_day || "white",
          }}
        >
          <h3 className="recipe-name">{recipe.id}</h3>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
