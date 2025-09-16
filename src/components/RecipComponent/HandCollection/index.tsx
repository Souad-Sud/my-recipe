"use client";
import { RecipDDataCollection } from "@/data/recipeData";
import "./handCollection.scss";
import Image from "next/image";
import { useUserContext } from "@/utils/contexts";

const HandCollection = () => {
  const { user, setUser } = useUserContext();

  const handleAddFavorite = (recipeId: number) => {
    if (!user) {
      alert("Please log in to add or save this recipe");
      return;
    }

    if (user.favorites.includes(recipeId)) {
      alert("This recipe is already in your favorites");
      return;
    }

    const updatedUser = {
      ...user,
      favorites: [...user.favorites, recipeId],
    };

    setUser(updatedUser);
  };

  return (
    <section className="handCollection">
      <h2 className="handCollection__title">Hand-Picked Collection</h2>
      <div className="handCollection__container">
        {RecipDDataCollection.map((item) => {
          const isAdded = user?.favorites.includes(item.id);

          return (
            <div key={item.id} className="handCollection__card">
              <div className="handCollection__imgContainer">
                <Image
                  src={item.image}
                  alt={item.recipe}
                  height={300}
                  width={400}
                  className="handCollection__img"
                />
              </div>
              <div className="handCollection__subtContainer">
                <h3 className="handCollection__subtitle">
                  <a href={item.link} className="handCollection__link">
                    {item.recipe}
                  </a>
                </h3>
                <button
                  className="handCollection__btn"
                  onClick={() => handleAddFavorite(item.id)}
                  disabled={isAdded}
                >
                  {isAdded ? "Added" : "⭐ Add to Favorites"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HandCollection;
