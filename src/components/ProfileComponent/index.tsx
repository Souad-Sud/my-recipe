"use client";
import { useEffect, useState } from "react";
import { useUserContext } from "@/utils/contexts";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./profile.scss";
import { CallBell, Download, SelectionAll } from "@phosphor-icons/react";
import { ProfileCollection } from "@/data/profileCollection";

const ProfileComponent = () => {
  const { user, setUser } = useUserContext();
  const router = useRouter();
  // for delete button
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!user) {
      router.push("/logIn"); // redirect to login if not logged in
    }
  }, [user, router]);

  if (!user) return null; // prevent flicker

  // call delete button
  const handleDelete = async () => {
    try {
      // It’s a route you create yourself inside your Next.js app for backend logic.
      await fetch("/api/delete-profile", {
        method: "DELETE",
        // That headers block is part of the HTTP request you’re making with fetch.
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ userId: user.id }),
      });

      // clear user from context
      setUser(null);

      // Display message
      setMessage("Your profile has been deleted");
      setTimeout(() => {
        router.push("/logIn");
      }, 2000);
    } catch (error) {
      console.error("Failed to delete profile:", error);
      setMessage("Error deleting profile. Please try again.");
    }
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
          <div className="profilePage__collection">
            {ProfileCollection.map((item, index) => (
              <ul key={index} className="profilePage__collectionList">
                <li>
                  <Image
                    src={item.image}
                    alt={item.name}
                    height={300}
                    width={300}
                  />
                </li>
                <li>{item.name}</li>
              </ul>
            ))}
          </div>
          {/* <h3>Favorite Categories :</h3> */}
        </div>

        {message && <p className="profilePage__message">{message}</p>}
      </div>
    </div>
  );
};

export default ProfileComponent;
