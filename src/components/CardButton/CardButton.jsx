import React from "react";
import style from "./CardButton.module.css";

const CardButton = ({ onClick }) => {
  return (
    <button className={style.button} onClick={onClick}>
      Ver Modelo
    </button>
  );
};

export default CardButton;
