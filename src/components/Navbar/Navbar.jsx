import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import style from "./Navbar.module.css";

import ego from "@assets/egoLogo.svg";
import menu from "@assets/menuIcon.svg";

import DropdownMenu from "@components/DropdownMenu/DropdownMenu";
import menuItems from "@data/menuOptions.json";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Modelos");

  useEffect(() => {
    if (location.pathname === "/") {
      setActiveTab("Modelos");
    } else if (location.pathname.startsWith("/detail")) {
      setActiveTab("Ficha");
    }
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleTabClick = (tab, path) => {
    setActiveTab(tab);
    navigate(path);
  };

  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <div className={style.navbarSectionBox}>
          <img src={ego} alt="ego" className={style.icon} onClick={() => navigate("/")}  style={{ cursor: "pointer" }}/>

          <div className={style.navbarSection}>
            <div
              className={`${style.tab} ${activeTab === "Modelos" ? style.active : ""}`}
              onClick={() => handleTabClick("Modelos", "/")}
            >
              Modelos
            </div>
            <div
              className={`${style.tab} ${activeTab === "Ficha" ? style.active : ""}`}
              onClick={() => handleTabClick("Ficha", "/detail/1")}
            >
              Ficha de Modelo
            </div>
          </div>
        </div>

        <button className={style.navMenu} onClick={toggleMenu}>
          <p className={style.menuWord}> Menú </p>
          <img src={menu} alt="menu" className={style.menu} />
        </button>
      </div>

      {isMenuOpen && (
        <DropdownMenu menuItems={menuItems} onClose={() => setIsMenuOpen(false)} />
      )}
    </div>
  );
};

export default Navbar;
