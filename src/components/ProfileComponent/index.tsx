import Image from "next/image";
import "./profile.scss";
import { UserArray } from "@/data/users";

const ProfileComponent = () => {
  return (
    <div className="profilePage">
      {UserArray.map((item, index) => (
        <div className="profilePage__container" key={index}>
          <h2 className="profilePage__name">{item.name}</h2>
          <hr />
          <div className="profilePage__items">
            <div className="profilePage__imgContainer">
              <Image
                src={item.image}
                alt=""
                height={200}
                width={200}
                className="profilePage__image"
              />
            </div>
            <div className="profilePage__btns">
              <button className="profilePage__btnchgprofil">
                Change photo
              </button>
              <button className="profilePage__btndelete">Delete Profile</button>
            </div>
          </div>
          <div>
            <h3>Email: {item.email} </h3>
            <h3>Favorite Categories: {item.favouriteCategory}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileComponent;
