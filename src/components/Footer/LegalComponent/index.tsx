import { FooterItemsLegal } from "@/data/footerItems";
import "../footer.scss";
const LegalComponent = () => {
  return (
    <nav className="footerNav">
      <h3 className="footerNav__title">Legal</h3>
      <div className="footerNav__container">
        {FooterItemsLegal.map((item, index) => (
          <a key={index} href={item.name}>
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default LegalComponent;
