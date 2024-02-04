import React from "react";
import HomeFeaturedItem from "../HomeFeaturedItem/HomeFeaturedItem";
import styles from "./HomeCarousel.module.scss";
import { useRef } from "react";

const HomeCarousel = ({ featuredStockArr }) => {
  const containerRef = useRef();
  const clickLeft = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        left: container.scrollLeft - (40 * window.innerHeight) / 100,
        top: 0,
        behavior: "smooth",
      });
    }
  };
  const clickRight = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        left: container.scrollLeft + (40 * window.innerHeight) / 100,
        top: 0,
        behavior: "smooth",
      });
    }
  };

  console.log(featuredStockArr);
  return (
    <main className={styles.carousel}>
      <button className={styles.carousel__button} onClick={clickLeft}>
        <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
      </button>
      <div className={styles.carousel__wrap}>
        <div className={styles.carousel__container} ref={containerRef}>
          {featuredStockArr &&
            featuredStockArr.map((stock) => {
              return (
                <HomeFeaturedItem
                  name={stock.name}
                  id={stock.id}
                  image={stock.imageURL}
                  key={stock.id}
                />
              );
            })}
        </div>
      </div>
      <button className={styles.carousel__button} onClick={clickRight}>
        Hi
      </button>
    </main>
  );
};

export default HomeCarousel;
