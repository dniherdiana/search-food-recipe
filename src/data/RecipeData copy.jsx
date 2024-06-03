import { useEffect, useState } from "react";

export default function RecipeData() {
  const [meal, setMeal] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=burger"
      );
      const data = await response.json();
      setMeal(data.meals[0]);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>json Data</h1>
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
