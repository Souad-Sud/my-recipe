"use client";
import { useEffect, useState } from "react";
import { useUserContext } from "@/utils/contexts";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./profile.scss";
import { CallBell, Download, SelectionAll } from "@phosphor-icons/react";
import { RecipDDataCollection } from "@/data/recipeData"; // All recipes

const ProfileComponent = () => {
  const { user, setUser } = useUserContext();
  const router = useRouter();
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!user) router.push("/logIn");
  }, [user, router]);

  if (!user) return null;

  // Filter only favorite recipes
  const favoriteRecipes = RecipDDataCollection.filter((recipe) =>
    user.favorites.includes(recipe.id)
  );

  const handleDelete = async () => {
    try {
      await fetch("/api/delete-profile", {
        method: "DELETE",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ userId: user.id }),
      });

      setUser(null);
      setMessage("Your profile has been deleted");
      setTimeout(() => router.push("/logIn"), 2000);
    } catch (error) {
      console.error(error);
      setMessage("Error deleting profile. Please try again.");
    }
  };

  const handleDisconnect = () => {
    setUser(null);
    router.push("/logIn");
  };

  // Remove from favorites
  const removeFavorite = (recipeId: number) => {
    const updatedFavorites = user.favorites.filter((id) => id !== recipeId);
    setUser({ ...user, favorites: updatedFavorites });
  };

  return (
    <div className="profilePage">
      <div className="profilePage__container">
        <h1 className="profilePage__name">{user.name}</h1>
        <hr />

        <div className="profilePage__items">
          <div className="profilePage__imgContainer">
            <Image
              src={user.image}
              alt="profile image"
              height={200}
              width={200}
              className="profilePage__image"
            />
          </div>
          <div className="profilePage__btns">
            <button className="profilePage__btndelete" onClick={handleDelete}>
              Delete Profile
            </button>
            <button
              className="profilePage__btndisconnect"
              onClick={handleDisconnect}
            >
              Disconnect
            </button>
          </div>
        </div>

        <hr />
        <h3 className="profilePage__profEmail">Email : {user.email}</h3>
        <hr />

        <div className="profilePage__favoritesSection">
          <h3 className="profilePage__favoritesTitle">Favorite Recipes</h3>
          <div className="handCollection__container profilePage__favorites">
            {favoriteRecipes.length === 0 && <p>No favorites yet!</p>}
            {favoriteRecipes.map((recipe) => (
              <div key={recipe.id} className="handCollection__card">
                <div className="handCollection__imgContainer">
                  <Image
                    src={recipe.image}
                    alt={recipe.recipe}
                    height={300}
                    width={400}
                    className="handCollection__img"
                  />
                </div>
                <div className="handCollection__subtContainer">
                  <h3 className="handCollection__subtitle">
                    <a href={recipe.link} className="handCollection__link">
                      {recipe.recipe}
                    </a>
                  </h3>
                  <button
                    className="handCollection__btn"
                    onClick={() => removeFavorite(recipe.id)}
                  >
                    💔 Remove from Favorites
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {message && <p className="profilePage__message">{message}</p>}
      </div>
    </div>
  );
};

export default ProfileComponent;
