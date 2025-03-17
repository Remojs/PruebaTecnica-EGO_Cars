import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./CarCard.module.css";
import CardButton from "@components/CardButton/CardButton";

const CarCard = ({ id, name, year, price, thumbnail }) => {
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsSelected((prev) => !prev);
  };

  const handleButtonClick = () => {
    navigate(`/detail/${id}`);
  };

  return (
    <div className={style.container} onClick={handleClick}>
      <h1 className={`${style.title} ${isSelected ? style.activeTitle : ""}`}>
        {name}
      </h1>
      <p className={style.priceBox}>
        <span>{year}</span> | <span>${price.toLocaleString()}</span>
      </p>
      <img src={thumbnail} alt={name} className={style.carPhoto} />
      {isSelected && <CardButton onClick={handleButtonClick} />}
    </div>
  );
};

export default CarCard;
