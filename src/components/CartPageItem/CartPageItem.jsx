import styles from "./CartPageItem.module.scss";
import { deleteFromCart } from "../../services/cart-logic";
import { getItems, getTotalPrice } from "../../services/stock";
import { useEffect } from "react";

const CartPageItem = ({
  name,
  image,
  quantity,
  id,
  size,
  color,
  price,
  setCartItemsToRender,
  setTotalPrice,
}) => {
  const handleDeleteClick = async () => {
    await deleteFromCart(id);

    const newItems = await getItems("cart");
    setCartItemsToRender(newItems);
  };

  useEffect(() => {
    getTotalPrice().then((res) => {
      setTotalPrice(res);
      console.log(res);
    });
  }, []);
  return (
    <section className={styles.cartItemWrap}>
      <img src={image} alt="item image" />
      <div>{name}</div>
      <p>{quantity}</p>
      <p>{size}</p>
      <p>{color}</p>
      <p>{price}</p>
      <div className={styles.cartItemWrap__buttonWrap}>
        <button
          className={styles.cartItemWrap__button}
          onClick={handleDeleteClick}
        >
          Delete
        </button>
      </div>
    </section>
  );
};

export default CartPageItem;
