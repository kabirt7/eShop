import ItemForm from "../../components/ItemForm/ItemForm";
import styles from "./ItemPage.module.scss";
import { getStockByID } from "../../services/stock";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToCart, getStockQty } from "../../services/cart-logic";

const ItemPage = () => {
  const [stockItem, setStockItem] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  // must match how the parameter is defined in app routing i.e. :id

  const tryAddToCart = async (data) => {
    console.log(data);

    const qty = await getStockQty(data.itemColor, data.itemSize, id);
    if (qty > 0) {
      alert("stock available");

      await addToCart(id, data.itemColor, data.itemSize);
    }
    if (qty == 0) {
      alert("no stock available");
    }
  };

  useEffect(() => {
    console.log(id);
    setLoading(true);
    getStockByID(id, "stock")
      .then((res) => setStockItem(res))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      {stockItem && (
        <section className={styles.item__wrap}>
          <div className={styles.item__image__wrap}>
            <img src={stockItem.imageURL} className={styles.item__image} />
          </div>
          <ItemForm stockItem={stockItem} tryAddToCart={tryAddToCart} />
        </section>
      )}
    </>
  );
};

export default ItemPage;
