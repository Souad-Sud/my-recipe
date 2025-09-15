"use client"
import { useEffect, useState } from "react";

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

type MealsResponse = {
  meals: Meal[];
};

export default function SeafoodPage() {
  const [meals, setMeals] = useState<Meal[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the meals in the Seafood category
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json() as Promise<MealsResponse>;
      })
      .then((data) => {
        setMeals(data.meals);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!meals || meals.length === 0) return <div>No meals found.</div>;

  return (
    <div>
      <h1>Chicken Meals</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {meals.map((meal) => (
          <li key={meal.idMeal} style={{ marginBottom: "1rem" }}>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              width={100}
              height={100}
            />
            <p>{meal.strMeal}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
