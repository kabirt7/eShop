import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomeFeaturedItem.module.scss";

const HomeFeaturedItem = ({ name, id, image }) => {
  return (
    <div className={styles.featuredItem}>
      <h1>{name}</h1>
      <img src={image} className={styles.featuredItem__image} />
      <Link to={`/catalogue/${id}`} className={styles.featuredItem__link}>
        <h3>More Info</h3>
      </Link>
    </div>
  );
};

export default HomeFeaturedItem;
