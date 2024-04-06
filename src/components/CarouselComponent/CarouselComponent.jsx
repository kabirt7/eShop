import { useEffect, useState } from "react";
import React from "react";
import styles from "./CarouselComponent.module.scss";

export const CarouselComponent = ({ children = [], auto = false }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigation = (direction) => {
    let newIndex = currentIndex;
    if (direction === "left") {
      newIndex = (currentIndex - 1 + children.length) % children.length;
    } else {
      newIndex = (currentIndex + 1) % children.length;
    }
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    if (!auto) {
      return;
    }
    const interval = setInterval(() => {
      handleNavigation("right");
    }, 2000);

    return () => clearInterval(interval);
  });

  const slidesWithDuplicate = [...children, children[0]];

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel__wrapper}>
        {slidesWithDuplicate.map((child, index) => (
          <div
            key={index}
            className={styles.carousel__slide}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.5s ease",
            }}
          >
            <img src={child} className={styles.carousel__slide__image} />
          </div>
        ))}
      </div>
      <button
        onClick={() => handleNavigation("left")}
        className={`${styles.carousel__button} ${styles.carousel__button__left}`}
      >
        &#10094;
      </button>
      <button
        onClick={() => handleNavigation("right")}
        className={`${styles.carousel__button} ${styles.carousel__button__right}`}
      >
        &#10095;
      </button>
      <div className={styles.carousel__indicators}>
        {children.map((_, index) => (
          <div
            onClick={() => setCurrentIndex(index)}
            key={index}
            className={`${styles.carousel__indicator} ${
              index === currentIndex ? styles.carousel__active : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};
