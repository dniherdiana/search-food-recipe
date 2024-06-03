import React, { useState, useEffect } from "react";

const FetchData = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s=Burger"
        );
        const data = await response.json();
        setMenuData(data.meals);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
};

export default FetchData;
