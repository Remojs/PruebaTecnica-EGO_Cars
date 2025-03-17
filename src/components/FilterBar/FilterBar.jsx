import React, { useState } from 'react';
import style from './FilterBar.module.css';
import filterStore from '@context/filterStore';
import FilterMobile from '@components/FilterMobile/FilterMobile';

const FilterBar = () => {
  const { selectedSegment, setSegment, sortBy, setSortBy } = filterStore();
  const [isSortOpen, setIsSortOpen] = useState(false);

  const sortOptions = [
    { label: "Nada", value: "nada" },
    { label: "De menor a mayor precio", value: "menor-mayor" },
    { label: "De mayor a menor precio", value: "mayor-menor" },
    { label: "Más nuevos primero", value: "nuevos" },
    { label: "Más viejos primero", value: "viejos" },
  ];

  return (
    <div className={style.center}>
      <div className={style.container}>
        <div className={style.filter}>
          <div className={style.filterTitle}>
            <p> Filtrar Por </p> 
          </div>
          <div className={style.filterControl}>
            {["Todos", "Sedan", "Hatchback", "Pickups y Comerciales", "SUVs"].map(segment => (
              <p 
                key={segment}
                onClick={() => setSegment(segment)}
                className={selectedSegment === segment ? style.active : ''}
              >
                {segment}
              </p>
            ))}
          </div>
        </div>

        <div className={style.ordenar} onClick={() => setIsSortOpen(!isSortOpen)}>
          <h1> Ordenar Por </h1>
          <svg className={style.svg} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L5 5L9 1" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>

          {isSortOpen && (
            <ul className={style.sortMenu}>
              {sortOptions.map((option) => (
                <li key={option.value} className={`${style.sortItem} ${sortBy === option.value ? style.active : ""}`} 
                    onClick={() => { setSortBy(option.value); setIsSortOpen(false); }}>
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <FilterMobile />
    </div>
  );
};

export default FilterBar;
