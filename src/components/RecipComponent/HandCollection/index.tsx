import { RecipDDataCollection } from "@/data/recipeData";
import "./handCollection.scss";

const HandCollection = () => {
  return (
    <section className="handCollection">
      <h2 className="handCollection__title">Hand-Picked Collection</h2>

      <div className="handCollection__container">
        {RecipDDataCollection.map((item, index) => (
          <div key={index} className="handCollection__card">
            <div className="handCollection__imgContainer">
              <img
                src={item.image}
                alt="recipe image"
                className="handCollection__img"
              />
            </div>
            <div className="handCollection__subtContainer">
            <h3 className="handCollection__subtitle">
              <a href={item.link} className="handCollection__link">
                {item.link}
              </a>
            </h3>
            <button className="handCollection__btn">{item.recipe}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HandCollection;
