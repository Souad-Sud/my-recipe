import "./category.scss";
import React from "react";
import Image from "next/image";

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

type Params = {
  params: { category: string };
};

export default async function CategoryPage({ params }: Params) {
  const { category } = params;

  if (!category) {
    return (
      <div className="category">
        <h1>Category not found</h1>
        <p>Please select a valid category.</p>
      </div>
    );
  }

  const categoryDisplay =
    category.charAt(0).toUpperCase() + category.slice(1).toLowerCase();
  const apiCategory = category.toLowerCase();

  let meals: Meal[] = [];

  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${apiCategory}`,
      { cache: "no-store" }
    );

    // Check if response is JSON before parsing
    const contentType = res.headers.get("content-type");
    if (!res.ok || !contentType?.includes("application/json")) {
      const text = await res.text(); // Read response as text for debugging
      console.error("Unexpected response:", text);
      throw new Error(`Failed to fetch meals: ${res.status}`);
    }

    const data = await res.json();
    meals = data.meals || [];
  } catch (err) {
    console.error("Error fetching meals:", err);
    return (
      <div className="category">
        <h1>{categoryDisplay} Meals</h1>
        <p>Could not load meals for this category. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="category">
      <h1 className="category__title">{categoryDisplay} Meals</h1>

      {meals.length === 0 && <p>No meals found for this category.</p>}

      <div className="category__grid">
        {meals.map((meal) => (
          <div key={meal.idMeal} className="category__container">
            <Image
              src={meal.strMealThumb}
              alt={meal.strMeal}
              width={200}
              height={200}
            />
            <h3>{meal.strMeal}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
