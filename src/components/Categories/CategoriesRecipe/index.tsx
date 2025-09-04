"use client";

import { useState } from "react";
import Image from "next/image";
import "./categoriesRecipe.scss";

interface Category {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export default function CategoriesRecipe({
  categories,
}: {
  categories: Category[];
}) {
  const [showAll, setShowAll] = useState(false);

  // Slice categories based on state
  const visibleCategories = showAll ? categories : categories.slice(0, 9);

  return (
    <main className="categories">
      <h2 className="categories__title">Latest Recipes</h2>
      <div className="categories__grid">
        {visibleCategories.map((cat) => (
          <div key={cat.idCategory} className="categories__container">
            <Image
              src={cat.strCategoryThumb}
              alt={cat.strCategory}
              width={400}
              height={300}
              className="categories__img"
            />
            <h3 className="categories__subTitle">{cat.strCategory}</h3>
            <p className="categories__paragraph">
              {cat.strCategoryDescription}
            </p>
          </div>
        ))}
      </div>

      {categories.length > 9 && (
        <div className="categories__btnContainer">
          <button
            className="categories__button"
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </main>
  );
}
