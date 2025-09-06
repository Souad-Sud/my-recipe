import { RecipDataSweet } from "@/data/recipeData";
import "../recipe.scss"
import Image from "next/image";

const RecipeSectionSweet = () => {
  return (
    <div className="recipesection">
      <h2 className="recipesection__title">Sweet Tooth</h2>
      <div className="recipesection__flexContainer">
        {RecipDataSweet.map((item, index) => (
          <div className="recipesection__container" key={index}>
            <div className="recipesection__imgContainer">
              <Image
                src={item.image}
                alt={item.image}
                height={243}
                width={350}
                className="recipesection__img"
              />
            </div>
            {/* this will create an array of numbers from [0,1,2,3,4] and for each index i we comparei < item.rating */}
            <div className="recipesection__stars">
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className={
                    i < item.rating
                      ? "recipesection__filled"
                      : "recipesection__empty"
                  }
                >
                  ★
                </span>
              ))}
            </div>
            <h2 className="recipesection__subtitle">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSectionSweet;
