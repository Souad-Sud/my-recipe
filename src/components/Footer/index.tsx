import "./footer.scss";
import LegalComponent from "./LegalComponent";
import Image from "next/image";
import NavbarComponent from "./NavbarComponent";
import SocialMediaComponent from "./SocialMediaComponent";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <Image src="LogoImg/logorec.png" alt="logo" height={100} width={85} />
          <p>
            "On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment
          </p>
        </div>

        <div className="footer__flex">
          <section>
            <LegalComponent />
          </section>
          <section>
            <NavbarComponent />
          </section>
          <section>
            <SocialMediaComponent />
          </section>
        </div>
      </div>
      <div className="footer__copyrights">
        <hr />
        <h3>© 2024 Souad Taki - All rights reserved</h3>
      </div>
    </div>
  );
};
export default Footer;
