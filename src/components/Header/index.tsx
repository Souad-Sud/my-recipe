"use client";
import "./header.scss";
import Logo from "../Logo";
// import { useUserContext } from "@/utils/contexts";
// import { UserContextType } from "@/utils/types";

// import Image from "next/image";
import Navbar from "../Navigation";
import Profile from "../ProfilePicture";
import ProfilePicture from "../ProfilePicture";
const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Navbar />

      <div className="header__contact">
        <ProfilePicture />
      </div>

      {/* <Image src= {Logo}  alt="logo"  /> */}
      {/* <img src="/React.png"  height={80}   alt="logo"  />  */}
    </header>
  );
};

export default Header;
