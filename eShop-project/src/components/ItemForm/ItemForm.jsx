import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { getColorArray } from "../../services/populate-form-logic";
import styles from "./ItemForm.module.scss";

const ItemForm = ({ tryAddToCart, stockItem }) => {
  const { register, handleSubmit } = useForm();
  // const [colors, setColors] = useState(null);
  // const [sizes, setSizes] = useState(null);
  const colorArr = getColorArray(stockItem);
  const sizeArr = stockItem.sizes;

  return (
    <div className={styles.form__wrap}>
      <form className={styles.form} onSubmit={handleSubmit(tryAddToCart)}>
        <h1>{stockItem.name}</h1>
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
              colorArr.map((color, index) => (
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
        <button>Favourite</button>
      </form>
    </div>
  );
};

export default ItemForm;
