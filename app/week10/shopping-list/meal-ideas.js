"use client";

import React, { useState, useEffect } from "react";

function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || [];
  };

  const loadMealIdeas = async () => {
    const fetchedMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchedMeals);
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas for {ingredient}</h2>
      <ul>
        {meals && meals.length > 0 ? (
          meals.map((meal) => (
            <li key={meal.idMeal}>
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                width="50"
                height="50"
              />
              {meal.strMeal}
            </li>
          ))
        ) : (
          <li>No meal ideas found for {ingredient}</li>
        )}
      </ul>
    </div>
  );
}

export default MealIdeas;
