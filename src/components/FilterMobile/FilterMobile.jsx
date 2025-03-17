import React, { useState } from "react";
import style from "./FilterMobile.module.css";
import filterStore from "@context/filterStore";

const FilterMobile = () => {
  const { selectedSegment, setSegment, sortBy, setSortBy } = filterStore();
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);

  const filterOptions = ["Todos", "Sedan", "Hatchback", "Pickups y Comerciales", "SUVs"];

  const sortOptions = [
    { label: "Nada", value: "nada" },
    { label: "De menor a mayor precio", value: "menor-mayor", highlight: ["menor", "mayor"] },
    { label: "De mayor a menor precio", value: "mayor-menor", highlight: ["mayor", "menor"] },
    { label: "Más nuevos primero", value: "nuevos", highlight: ["nuevos"] },
    { label: "Más viejos primero", value: "viejos", highlight: ["viejos"] },
  ];

  return (
    <div className={style.containerMobile}>
      <div className={style.dropdown}>
        <button onClick={() => setIsOpenFilter(!isOpenFilter)} className={style.dropdownButton}>
          Filtrar por 
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>

        {isOpenFilter && (
          <ul className={style.dropdownMenu}>
            {filterOptions.map((option, index) => (
              <li key={index} className={`${style.dropdownItem} ${selectedSegment === option ? style.active : ""}`} 
                  onClick={() => { setSegment(option); setIsOpenFilter(false); }}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={style.dropdown}>
        <button onClick={() => setIsOpenSort(!isOpenSort)} className={style.dropdownSortButton}>
          Ordenar por 
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L5 5L9 1" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>

        {isOpenSort && (
          <ul className={style.dropdownMenu}>
            {sortOptions.map((option, index) => (
              <li key={index} className={`${style.dropdownItem} ${sortBy === option.value ? style.active : ""}`}
                  onClick={() => { setSortBy(option.value); setIsOpenSort(false); }}>
                {option.highlight ? (
                  option.label.split(" ").map((word, i) =>
                    option.highlight.includes(word) 
                      ? <span key={i} className={style.highlight}> {word}{" "} </span> 
                      : word + " "
                  )
                ) : option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FilterMobile;
