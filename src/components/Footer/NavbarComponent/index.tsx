import { FooterItemsAbout } from "@/data/footerItems";

const NavbarComponent = () => {
  return (
    <nav className="footerNav">
      <h3 className="footerNav__title">Follow</h3>
      <div className="footerNav__container">
        {FooterItemsAbout.map((item, index) => (
          <a key={index} href={item.name}>
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default NavbarComponent;
