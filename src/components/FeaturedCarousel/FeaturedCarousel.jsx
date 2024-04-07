import React, { useRef } from "react";
import FeaturedItem from "../FeaturedItem/FeaturedItem";
import styles from "./FeaturedCarousel.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HomeCarousel = ({ featuredStockArr, togFav }) => {
  const containerRef = useRef();

  const clickLeft = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        left: container.scrollLeft - (80 * window.innerHeight) / 100,
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const clickRight = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        left: container.scrollLeft + (80 * window.innerHeight) / 100,
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className={styles.carousel}>
      <button className={styles.carousel__button} onClick={clickLeft}>
        <FontAwesomeIcon icon={faArrowLeft} />
      </button>
      <div className={styles.carousel__wrap}>
        <div className={styles.carousel__container} ref={containerRef}>
          {featuredStockArr &&
            featuredStockArr.map((stock) => (
              <FeaturedItem
                name={stock.name}
                id={stock.id}
                image={stock.imageURL}
                key={stock.id}
                favourited={stock.favourited}
                togFav={togFav}
              />
            ))}
        </div>
      </div>
      <button className={styles.carousel__button} onClick={clickRight}>
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </main>
  );
};

export default HomeCarousel;
