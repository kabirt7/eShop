import CardPageItem from "../../components/CartPageItem/CartPageItem";
import { getItems } from "../../services/stock";
import styles from "./CartPage.module.scss";
import { useEffect, useState } from "react";

const CartPage = () => {
  const [cartItemsToRender, setCartItemsToRender] = useState(null);

  useEffect(() => {
    getItems("cart").then((res) => setCartItemsToRender(res));
  }, []);
  return (
    <section className={styles.cart}>
      <div className={styles.cart__container}>
        <h3 className={styles.cart__title}>Shopping Cart</h3>
        {cartItemsToRender &&
          cartItemsToRender.map((item) => {
            return (
              <CardPageItem
                name={item.itemName}
                id={item.id}
                image={item.itemImage}
                key={item.id}
                quantity={item.quantity}
                size={item.itemSize}
                color={item.itemColor}
                setCartItemsToRender={setCartItemsToRender}
                price={item.itemPrice}
              />
            );
          })}
        <div className={styles.cart__footer}>
          <h2>Total Price</h2>
          <h3>hero</h3>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
