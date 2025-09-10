"use client";
import "./profilepicture.scss";
import Image from "next/image";
import Link from "next/link";
import { useUserContext } from "@/utils/contexts";

const ProfilePicture = () => {
  const { user } = useUserContext();

  if (!user) return null; // 👈 hide completely if not logged in

  return (
    <div className="profilepicture">
      <Link href="/profile">
        <Image
          src={user.image}  // 👈 comes from UserArray
          alt={`${user.name} profile picture`}
          height={50}
          width={50}
          className="profilepicture__img"
        />
      </Link>
    </div>
  );
};

export default ProfilePicture;
