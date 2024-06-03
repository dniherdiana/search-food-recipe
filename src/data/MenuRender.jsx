import React from "react";
import ErrorBoundary from "./ErrorBoundary";

const MenuRender = ({ menuItems }) => {
  if (menuItems === null) {
    return <h2>No data found</h2>;
  }
  return (
    <div>
      {menuItems.map((item) => (
        <div key={item.idMeal}>
          <h2>{item.strMeal}</h2>
          <p>{item.strTags}</p>
          <img src={item.strMealThumb} alt={item.strMeal} />
          <iframe src={item.strYoutube} height="350" width="500"></iframe>
          <p>{item.strInstructions}</p>

          <div id="ingredients">
            <h3>Ingredients:</h3>
            <ul>
              {[...Array(20).keys()].map((i) => {
                const ingredient = item[`strIngredient${i + 1}`];
                const measure = item[`strMeasure${i + 1}`];
                if (
                  // ingredient &&
                  // measure &&
                  // ingredient !== "" &&
                  // measure !== " "
                  ingredient &&
                  measure !== ""
                ) {
                  return <li key={i}>{`${measure} - ${ingredient}`}</li>;
                }
                return null;
              })}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuRender;
