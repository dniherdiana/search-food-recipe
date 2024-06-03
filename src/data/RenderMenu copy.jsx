export default function RenderMenu({ meal, isLoading }) {
  return (
    <>
      <h1>Render Menu</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : meal ? (
        <div>
          <h2>{meal.strMeal}</h2>
          <p>{meal.strTags}</p>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
          <iframe src={meal.strYoutube} frameborder="0"></iframe>
          <p>{meal.strInstructions}</p>

          <ul>
            {[...Array(20).keys()].map((i) => {
              const ingredient = meal[`strIngredient${i + 1}`];
              const measure = meal[`strMeasure${i + 1}`];
              if (
                ingredient &&
                measure &&
                ingredient !== "" &&
                measure !== " "
              ) {
                return <li key={i}>{`${measure} - ${ingredient}`}</li>;
              }
              return null;
            })}
          </ul>
        </div>
      ) : (
        <p>No meal found</p>
      )}
    </>
  );
}
