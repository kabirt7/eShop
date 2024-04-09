import { useForm } from "react-hook-form";
import styles from "./ItemForm.module.scss";
import starOutline from "../../assets/star-outline.png";
import starFilled from "../../assets/star-full.png";
import { toggleFavourite } from "../../services/stock";
import { useEffect, useState } from "react";

const ItemForm = ({ tryAddToCart, stockItem, setToggleFavTrigger }) => {
  const { register, handleSubmit } = useForm();

  const getColorArray = (obj) => {
    const colorArr = Object.keys(obj.variants);
    return colorArr;
  };

  const colorArr = getColorArray(stockItem);
  const sizeArr = stockItem.sizes;

  const togFav = async (ID) => {
    await toggleFavourite(ID);
    setToggleFavTrigger((prev) => !prev);
  };

  return (
    <div className={styles.form__wrap}>
      <form className={styles.form} onSubmit={handleSubmit(tryAddToCart)}>
        <div className={styles.form__header}>
          <img
            src={stockItem.favourited ? starFilled : starOutline}
            className={styles.star}
            alt="Star"
            onClick={(e) => {
              togFav(stockItem.id);
            }}
          />
          <h1>{stockItem.name}</h1>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi in
          adipisci, voluptas aut fuga at reiciendis! Corporis voluptas laborum
          perspiciatis repudiandae consectetur praesentium eaque impedit
          laudantium mollitia hic, harum possimus?
        </p>
        <div className={styles.form__input}>
          <label htmlFor="itemColorInput">Color: </label>
          <select
            className={styles.form__input__option}
            id="itemColorInput"
            {...register("itemColor")}
          >
            {colorArr &&
              colorArr
                .sort((a, b) => a.localeCompare(b))
                .map((color, index) => (
                  <option key={index} value={color}>
                    {color}
                  </option>
                ))}
          </select>
        </div>
        <div className={styles.form__input}>
          <label htmlFor="itemSizeInput">Size: </label>
          <select
            className={styles.form__input__option}
            id="itemSizeInput"
            {...register("itemSize")}
          >
            {sizeArr &&
              sizeArr.map((size, index) => (
                <option key={index} value={size}>
                  {size}
                </option>
              ))}
          </select>
        </div>
        <button type="submit">Add To Cart</button>
      </form>
    </div>
  );
};

export default ItemForm;
