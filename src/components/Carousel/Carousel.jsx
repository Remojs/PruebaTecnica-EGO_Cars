import React, { useState, useEffect, useRef } from "react";
import styles from "./Carousel.module.css";
import GalleryCard from "@components/GalleryCard/GalleryCard";
import carouselData from "@data/carousel";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(carouselData.length);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const slides = [...carouselData, ...carouselData, ...carouselData];
  const transitionRef = useRef(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex === slides.length - carouselData.length) {
      transitionRef.current = false;
      setCurrentIndex(carouselData.length);
    } else {
      transitionRef.current = true;
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex === carouselData.length) {
      transitionRef.current = false;
      setCurrentIndex(slides.length - 2 * carouselData.length);
    } else {
      transitionRef.current = true;
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    if (deltaX > 50) nextSlide();
    else if (deltaX < -50) prevSlide();
  };

  const slideWidth = isMobile ? 80 : 16.67;
  const visibleIndex = currentIndex % carouselData.length;

  return (
    <div className={styles.carouselContainer}>
      <button className={`${styles.navButton} ${styles.left}`} onClick={prevSlide}>{"<"}</button>
      <div
        className={styles.carouselWrapper}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={styles.carousel}
          style={{
            transform: `translateX(-${currentIndex * slideWidth}vw)`,
            transition: transitionRef.current ? "transform 0.3s ease-in-out" : "none",
          }}
        >
          <div className={styles.slides}>
            {slides.map((slide, index) => (
              <GalleryCard key={index} title={slide.title} description={slide.description} image={slide.image} />
            ))}
          </div>
        </div>
        <div className={styles.blurLeft}></div>
        <div className={styles.blurRight}></div>
      </div>
      <button className={`${styles.navButton} ${styles.right}`} onClick={nextSlide}>{">"}</button>
      <div className={styles.dots}>
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className={index === visibleIndex % 5 ? styles.activeDot : styles.dot}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
