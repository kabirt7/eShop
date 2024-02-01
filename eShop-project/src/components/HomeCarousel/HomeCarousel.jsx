import React from "react";
import HomeFeaturedItem from "../HomeFeaturedItem/HomeFeaturedItem";
import styles from "./HomeCarousel.module.scss";

const HomeCarousel = ({ featuredStockArr }) => {
  console.log(featuredStockArr);
  return (
    <main className={styles.carousel}>
      <button className={styles.carousel__button}>Hi</button>
      {featuredStockArr &&
        featuredStockArr.map((stock) => {
          return (
            <HomeFeaturedItem
              name={stock.name}
              id={stock.id}
              image={stock.imageURL}
            />
          );
        })}
      <button className={styles.carousel__button}>Hi</button>
    </main>
  );
};

export default HomeCarousel;
