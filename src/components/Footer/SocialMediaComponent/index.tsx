import { FooterItemsFollow } from "@/data/footerItems";

const SocialMediaComponent = () => {
  return (
    <nav className="footerNav">
      <h3 className="footerNav__title">Welcome</h3>
      <div className="footerNav__container">
      {FooterItemsFollow.map((item, index) => (
        <a key={index} target="_blank" href={item.link}>{item.name}</a>
      ))}
      </div>
    </nav>
  );
};

export default SocialMediaComponent;
