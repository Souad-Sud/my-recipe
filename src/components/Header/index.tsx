"use client";
import "./header.scss";
import Logo from "../Logo";
import Navbar from "../Navigation";
import ProfilePicture from "../ProfilePicture";
const Header = () => {
  return (
    <header className="header">
      <Logo />
      <Navbar />
      <div className="header__contact">
        <ProfilePicture />
      </div>
    </header>
  );
};

export default Header;
