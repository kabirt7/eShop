import styles from "./CartPageItem.module.scss";
import { deleteFromCart } from "../../services/cart-logic";
import { getItems } from "../../services/stock";

const CartPageItem = ({
  name,
  image,
  quantity,
  id,
  size,
  color,
  price,
  setCartItemsToRender,
}) => {
  const handleDeleteClick = async () => {
    await deleteFromCart(id);
    const newItems = await getItems("cart");
    setCartItemsToRender(newItems);
  };
  return (
    <section className={styles.cartItemWrap}>
      <img src={image} alt="item image" />
      <div>{name}</div>
      <p>{quantity}</p>
      <p>{size}</p>
      <p>{color}</p>
      <p>{price}</p>
      <button onClick={handleDeleteClick}>Delete</button>
    </section>
  );
};

export default CartPageItem;
