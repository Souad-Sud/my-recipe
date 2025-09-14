"use client";

import { NavItems } from "@/data/navItems";
import Link from "next/link";
import "./navigation.scss";
import { useState, useEffect } from "react";
import { CaretDown, CaretUp, List, X } from "@phosphor-icons/react";
import { useUserContext } from "@/utils/contexts";

const Navbar = () => {
  const { user } = useUserContext();
  const [navItems, setNavItems] = useState(NavItems);
  const [openDropDown, setOpenDropDown] = useState<string | null>(null);
  const [activeClass, setActiveClass] = useState<string>("Home Page");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Fetch categories dynamically
  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
      const data = await res.json();

      const categories = data.meals.map((c: { strCategory: string }) => ({
        name: c.strCategory,
        link: `/categories/${c.strCategory.toLowerCase()}`,
      }));

      setNavItems(prev =>
        prev.map(item =>
          item.name === "Categories" ? { ...item, children: categories } : item
        )
      );
    }
    fetchCategories();
  }, []);

  const handleToggle = (name: string) => {
    setOpenDropDown(openDropDown === name ? null : name);
  };

  const handleLinkClick = (name: string) => {
    setActiveClass(name);
    setOpenDropDown(null);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navBar">
      {/* Mobile Burger */}
      <button
        className={`navBar__burger ${mobileMenuOpen ? "open" : ""}`}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={40} /> : <List size={40} />}
      </button>

      {/* Menu Items */}
      <ul className={`navBar__list ${mobileMenuOpen ? "open" : ""}`}>
        {navItems.map((item, index) => {
          if (item.name.toLowerCase() === "profile" && !user) return null;
          if (item.name.toLowerCase() === "login" && user) return null;

          return (
            <li key={index} className="navBar__item">
              {item.children && item.children.length > 0 ? (
                <>
                  <button
                    className={`navBar__link ${activeClass === item.name ? "active" : ""}`}
                    onClick={() => {
                      handleToggle(item.name);
                      setActiveClass(item.name);
                    }}
                  >
                    {item.name}
                    {openDropDown === item.name ? <CaretDown size={16} /> : <CaretUp size={16} />}
                  </button>

                  {/* Dropdown Items */}
                  <ul className={`navBar__dropdown ${openDropDown === item.name ? "is-open" : ""}`}>
                    {item.children.map(child => (
                      <li key={child.name}>
                        <Link
                          href={child.link}
                          className={`navBar__sublink ${activeClass === child.name ? "active" : ""}`}
                          onClick={() => handleLinkClick(child.name)}
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link
                  href={item.link}
                  className={`navBar__link ${activeClass === item.name ? "active" : ""}`}
                  onClick={() => handleLinkClick(item.name)}
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}

        {user && (
          <li className="navBar__item navBar__user">
            <span>Hi, {user.name}</span>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
