import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style.css";

const Meal = () => {
  const [dish, setDish] = useState([]);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
        );
        setDish(response.data.meals);
      } catch (error) {
        console.log("Error fetching seafood meals:", error);
      }
    };

    fetchMeal();
  }, []);

  const dishList = dish.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section className="card">
        <img src={strMealThumb} alt="strMeal" />
        <section className="content">
          <p>{strMeal}</p>
          <p>{idMeal}</p>
        </section>
      </section>
    );
  });

  return <div className="container">{dishList}</div>;
};

export default Meal;
