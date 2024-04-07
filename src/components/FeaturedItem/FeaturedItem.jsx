import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./FeaturedItem.module.scss";
import starOutline from "../../assets/star-outline.png";
import starFilled from "../../assets/star-full.png";

const FeaturedItem = ({ name, id, image, favourited, togFav }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [starHovering, setStarHovering] = useState(false);

  const handleHover = () => {
    setIsHovering(!isHovering);
  };

  const handleStarHover = () => {
    setStarHovering(!starHovering);
  };

  const handleLink = starHovering ? " " : `/catalogue/${id}`;

  return (
    <div className={styles.container}>
      <Link
        className={
          isHovering
            ? `${styles.featuredItem} ${styles.featuredItem__hover}`
            : styles.featuredItem
        }
        to={handleLink}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <div className={styles.featuredItem__imageWrap}>
          <img src={image} className={styles.featuredItem__image} alt={name} />
        </div>
        <h1 className={styles.featuredItem__title}>{name}</h1>
        <img
          src={favourited ? starFilled : starOutline}
          className={styles.star}
          alt="Star"
          onClick={(e) => {
            togFav(id);
          }}
          onMouseEnter={handleStarHover}
          onMouseLeave={handleStarHover}
        />
      </Link>
    </div>
  );
};

export default FeaturedItem;
