import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomeFeaturedItem.module.scss";
import starOutline from "../../assets/star-outline.png";
import starFilled from "../../assets/star-full.png";

const HomeFeaturedItem = ({ name, id, image, favourited, togFav }) => {
  return (
    <div className={styles.container}>
      <Link className={styles.featuredItem} to={`/catalogue/${id}`}>
        <div className={styles.featuredItem__imageWrap}>
          <img src={image} className={styles.featuredItem__image} alt={name} />
        </div>
        <h1 className={styles.featuredItem__title}>{name}</h1>
      </Link>
      <img
        src={favourited ? starFilled : starOutline}
        className={styles.star}
        alt="Star"
        onClick={(e) => {
          togFav(id);
          e.stopPropagation();
        }}
      />
    </div>
  );
};

export default HomeFeaturedItem;
