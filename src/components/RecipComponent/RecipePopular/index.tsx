import { RecipDataPopular } from "@/data/recipeData";
import "./recipePopular.scss";
import Image from "next/image";

const RecipePopular = () => {
  return (
    <div className="recipePopular">
      <div className="recipePopular__titleContainer">
        <h2 className="recipePopular__title">Popular Categories</h2>
      </div>
      <div className="recipePopular__recipeContainer">
        {RecipDataPopular.map((item, index) => (
          <div className="recipePopular__recipeContainerItems" key={index}>
            <div className="recipePopular__recipeImgContainer">
              <Image src={item.image} alt={item.name} />
            </div>
            <h3 className="recipePopular__recipeTitle">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipePopular;
