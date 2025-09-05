import "./mainContainer.scss";
import Image from "next/image";

const MainInformation = () => {
  return (
    <main className="mainInfo">
      <div className="mainInfo__imgContainer">
        <Image src="./bgimg2.jpg" alt="" />
      </div>
      <div className="mainInfo__introContainer">
        <span className="mainInfo__introspan">85% would like this again</span>
        <h1 className="mainInfo__title">Mighty Super Cheesecake</h1>
        <p className="mainInfo__introDescription">
          Look no firther for a creamy and ultra smooth classic Cheesecake
          recipe! no one can deny simple decadence
        </p>
        <button className="mainInfo__btn">&rarr;</button>
      </div>
    </main>
  );
};

export default MainInformation;
