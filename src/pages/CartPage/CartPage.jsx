import CardPageItem from "../../components/CartPageItem/CartPageItem";
import { getItems, getTotalPrice } from "../../services/stock";
import styles from "./CartPage.module.scss";
import { useEffect, useState } from "react";

const CartPage = () => {
  const [cartItemsToRender, setCartItemsToRender] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const items = await getItems("cart");
        setCartItemsToRender(items);
      } catch (error) {
        console.error("Error fetching cart items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchTotalPrice = async () => {
      try {
        const price = await getTotalPrice();
        setTotalPrice(price);
      } catch (error) {
        console.error("Error fetching total price:", error);
      }
    };
    console.log(cartItemsToRender);

    fetchTotalPrice();
  }, [cartItemsToRender]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className={styles.cart}>
      <div className={styles.cart__container}>
        <h3 className={styles.cart__title}>Shopping Cart</h3>
        {cartItemsToRender &&
          cartItemsToRender.map((item) => (
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
              setTotalPrice={setTotalPrice}
              cartItemsToRender={cartItemsToRender}
            />
          ))}
        {!totalPrice == 0 && (
          <div className={styles.cart__footer}>
            <h3>Total Price</h3>
            <h3>${totalPrice}</h3>
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;
