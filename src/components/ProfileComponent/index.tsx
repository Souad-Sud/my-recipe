"use client";
import { useEffect } from "react";
import { useUserContext } from "@/utils/contexts";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./profile.scss";

const ProfileComponent = () => {
  const { user } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login"); // redirect to login if not logged in
    }
  }, [user, router]);

  if (!user) return null; // prevent flicker

  return (
    <div className="profilePage">
      <div className="profilePage__container">
        <h2 className="profilePage__name">{user.name}</h2>
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
            <button className="profilePage__btnchgprofil">Change photo</button>
            <button className="profilePage__btndelete">Delete Profile</button>
          </div>
        </div>
        <div>
          <h3>Email: {user.email}</h3>
          <h3>Favorite Categories:</h3>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
