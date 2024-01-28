import ItemForm from "../../components/ItemForm/ItemForm";
import styles from "./ItemPage.module.scss";
import { getStockInfo } from "../../services/stock";
import { useEffect, useState } from "react";

const ItemPage = () => {
  const [stockItems, setStockItems] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getStockInfo()
      .then((res) => setStockItems(res))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
    console.log(stockItems);
  }, []);

  return (
    <>
      {stockItems && (
        <section className={styles.item__wrap}>
          <div className={styles.item__image__wrap}>
            <img className={styles.item__image} />
          </div>
          <ItemForm />
        </section>
      )}
    </>
  );
};

export default ItemPage;
