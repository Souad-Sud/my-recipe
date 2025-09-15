"use client";
import { useEffect, useState } from "react";
import { useUserContext } from "@/utils/contexts";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./profile.scss";
import { CallBell, Download, SelectionAll } from "@phosphor-icons/react";
import { Recipes } from "@/data/recipeData"; // import recipes

const ProfileComponent = () => {
  const { user, setUser } = useUserContext();
  const router = useRouter();
  const [message, setMessage] = useState("");

  // filter favorites
  const favoriteRecipes = user
    ? Recipes.filter((recipe) => user.favorites.includes(recipe.id))
    : [];

  useEffect(() => {
    if (!user) {
      router.push("/logIn"); // redirect to login if not logged in
    }
  }, [user, router]);

  if (!user) return null;

  const handleDelete = async () => {
    try {
      await fetch("/api/delete-profile", {
        method: "DELETE",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ userId: user.id }),
      });

      setUser(null);
      setMessage("Your profile has been deleted");
      setTimeout(() => {
        router.push("/logIn");
      }, 2000);
    } catch (error) {
      console.error("Failed to delete profile:", error);
      setMessage("Error deleting profile. Please try again.");
    }
  };

  const handleDisconnect = () => {
    setUser(null);
    router.push("/logIn");
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

        <div>
          <hr />
          <h3 className="profilePage__profEmail">Email : {user.email}</h3>
          <hr />

          <div className="profilePage__infoContainer">
            <ul className="profilePage__listContainer">
              <li>
                <SelectionAll size={32} color="blue" />
                Collection
              </li>
              <li>
                <CallBell size={32} color="green" />
                Recipes
              </li>
              <li>
                <Download size={32} color="brown" />
                Saved
              </li>
            </ul>
          </div>

          {/* Show favorites */}
          <h3 className="profilePage__favoritesTitle">Favorite Recipes</h3>
          <div className="profilePage__favorites">
            {favoriteRecipes.map((recipe) => (
              <div key={recipe.id} className="profilePage__recipeCard">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  width={150}
                  height={150}
                />
                <p>{recipe.title}</p>
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
