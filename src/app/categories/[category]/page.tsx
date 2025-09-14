import "./category.scss"
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
  const { category } = await params;
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`
  );
  const data = await res.json();
  const meals: Meal[] = data.meals || [];

  return (
    <div className="category">
      <h1 className="category__title">{categoryName} Meals</h1>
      {meals.length === 0 && <p>No meals found for this category.</p>}

      <div className="category__grid">
        {meals.map(meal => (
          <div key={meal.idMeal} className="category__container">
            <Image src={meal.strMealThumb} alt={meal.strMeal} width={200} height={200} />
            <h3>{meal.strMeal}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
