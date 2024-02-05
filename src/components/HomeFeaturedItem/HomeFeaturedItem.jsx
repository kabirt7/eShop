import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HomeFeaturedItem.module.scss";
import starOutline from "../../assets/star-outline.png";
import starFilled from "../../assets/star-full.png";

const HomeFeaturedItem = ({ name, id, image, favourited, togFav }) => {
  return (
    <div className={styles.featuredItem}>
      <h1>{name}</h1>
      <img src={image} className={styles.featuredItem__image} alt={name} />
      <Link to={`/catalogue/${id}`} className={styles.featuredItem__link}>
        <h3>More Info</h3>
      </Link>
      <img
        src={favourited ? starFilled : starOutline}
        className={styles.star}
        alt="Star"
        onClick={() => togFav(id)}
      />
    </div>
  );
};

export default HomeFeaturedItem;
