"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import "./randomRecipe.scss";

interface Meal {
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strYoutube?: string;
  [key: string]: string | undefined;
}

export default function RandomRecipe() {
  const [meal, setMeal] = useState<Meal | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchRandomMeal = async () => {
    setLoading(true);
    const res = await fetch(
      "https://www.themealdb.com/api/json/v1/1/random.php",
      { cache: "no-store" }
    );
    const json = await res.json();
    setMeal(json.meals[0]);
    setLoading(false);
  };

  useEffect(() => {
    fetchRandomMeal();
  }, []);

  if (loading || !meal) return <p>Loading...</p>;

  const ingredients: string[] = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${ingredient} – ${measure}`);
    } else {
      break;
    }
  }

  return (
    <main className="randomerecipe">
      <div className="randomerecipe__flexBox">
        <button className="randomerecipe__refresh" onClick={fetchRandomMeal}>
          Get your recipe
        </button>

        <h1 className="randomerecipe__title">{meal.strMeal}</h1>
      </div>
        <hr />
      <div className="randomerecipe__imgContainer">
        <Image
          src={meal.strMealThumb}
          alt={meal.strMeal}
          width={600}
          height={500}
          layout="responsive"
          className="randomerecipe__img"
        />
        <div className="randomerecipe__container">
          <p className="randomerecipe__categories">
            <strong>Category :</strong> {meal.strCategory}
          </p>
          |
          <p className="randomerecipe__area">
            <strong>Area :</strong> {meal.strArea}
          </p>
        </div>
      </div>

      <div className="randomerecipe__contentContainer">
        <div className="randomerecipe__content1">
          <h2 className="randomerecipe__subtitle">Ingredients:</h2>
          <ul className="randomerecipe__list">
            {ingredients.map((item, idx) => (
              <li key={idx} className="randomerecipe__liststyle">
                {item}{" "}
              </li>
            ))}
          </ul>
        </div>

        <div className="randomerecipe__content2">
          <h2 className="randomerecipe__listTitle">Instructions:</h2>
          <p>{meal.strInstructions}</p>

          {meal.strYoutube && (
            <div className="videoWrapper">
              <h2>Video Recipe:</h2>
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${meal.strYoutube.slice(
                  -11
                )}`}
                title="YouTube video"
                allowFullScreen
              />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
