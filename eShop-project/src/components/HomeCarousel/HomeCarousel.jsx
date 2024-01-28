import React from "react";
import HomeFeaturedItem from "../HomeFeaturedItem/HomeFeaturedItem";
import styles from "./HomeCarousel.module.scss";

const HomeCarousel = ({ featuredStockArr }) => {
  console.log(featuredStockArr);
  return (
    <main className={styles.carousel}>
      {featuredStockArr &&
        featuredStockArr.map((stock) => {
          return <HomeFeaturedItem name={stock.name} id={stock.id} />;
        })}
    </main>
  );
};

export default HomeCarousel;
