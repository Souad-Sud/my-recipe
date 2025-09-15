"use client";
import './area.scss'
import Image from 'next/image';

import { useEffect, useState } from "react";

type Area = { strArea: string };
type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

type MealDetail = {
  idMeal: string;
  strMeal: string;
  strInstructions: string;
  strMealThumb: string;
  [key: string]: string;
};

export default function Areas() {
  const [areas, setAreas] = useState<Area[]>([]);
  const [meals, setMeals] = useState<Meal[]>([]);
  const [selectedMeal, setSelectedMeal] = useState<MealDetail | null>(null);
  const [loading, setLoading] = useState(false);

  // Fetch only areas
  useEffect(() => {
    async function fetchAreas() {
      const res = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
      const data = await res.json();
      setAreas(data.meals || []);
    }
    fetchAreas();
  }, []);

  // Fetch meals by area
  const fetchMeals = async (area: string) => {
    setLoading(true);
    setMeals([]);
    setSelectedMeal(null);
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
      );
      const data = await res.json();
      setMeals(data.meals || []);
    } finally {
      setLoading(false);
    }
  };

  // Fetch details for one meal
  const fetchMealDetails = async (mealId: string) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      );
      const data = await res.json();
      setSelectedMeal(data.meals[0]);
    } finally {
      setLoading(false);
    }
  };

  // Extract ingredients dynamically
  const getIngredients = (meal: MealDetail) => {
    const ingredients: string[] = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push(`${measure} ${ingredient}`);
      }
    }
    return ingredients;
  };

  return (
    <div className="area">
      <div className='area__side'>
        <h1>Areas</h1>
        <ul className='area__asideList'>
          {areas.map((a) => (
            <li key={a.strArea}>
              <button onClick={() => fetchMeals(a.strArea)}>
                {a.strArea}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Meals List */}
      <div className='area__content'>
        <h2>Meals</h2>
        {loading && <p>Loading...</p>}
        {!loading && meals.length === 0 && !selectedMeal && <p>No meals yet. Pick an area.</p>}

        <ul className='area__contentList'>
          {meals.map((meal) => (
            <li key={meal.idMeal}>
              <button
                onClick={() => fetchMealDetails(meal.idMeal)}
              >
                <Image
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  width={200}
                  height={200}
                />
                <p>{meal.strMeal}</p>
              </button>
            </li>
          ))}
        </ul>

        {selectedMeal && (
          <div className='area__contentListDetail'>
            <h2>{selectedMeal.strMeal}</h2>
            <Image
              src={selectedMeal.strMealThumb}
              alt={selectedMeal.strMeal}
              width={300}
              height={200}
            />
            <h3>Ingredients:</h3>
            <ul>
              {getIngredients(selectedMeal).map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>
            <h3>Instructions:</h3>
            <p>{selectedMeal.strInstructions}</p>
          </div>
        )}
      </div>
    </div>
  );
}
