import React, { useEffect, useState } from "react";
import { fetchCars } from "@services/fetchCars";
import filterStore from "@context/filterStore";

import CarCard from "@components/CarCard/CarCard";
import Loader from "@components/Loader/Loader";

import styles from "./CarList.module.css";

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const { selectedSegment, sortBy } = filterStore();

  useEffect(() => {
    const getCars = async () => {
      const data = await fetchCars();
      setCars(data);
      setLoading(false);
    };

    getCars();
  }, []);

  const filteredAndSortedCars = cars
    .filter(car => selectedSegment === "Todos" || car.segment === selectedSegment)
    .sort((a, b) => {
      switch (sortBy) {
        case "menor-mayor":
          return a.price - b.price;
        case "mayor-menor":
          return b.price - a.price;
        case "nuevos":
          return b.year - a.year;
        case "viejos":
          return a.year - b.year;
        default:
          return 0;
      }
    });

  if (loading) return <Loader />;

  return (
    <div className={styles.carBox}>
      <div className={styles.grid}>
        {filteredAndSortedCars.map(car => (
          <CarCard key={car.id} {...car} />
        ))}
      </div>
    </div>
  );
};

export default CarList;
