import FeaturedCarousel from "../../components/FeaturedCarousel/FeaturedCarousel";
import { getFeaturedStock, toggleFavourite } from "../../services/stock";
import { useEffect, useState } from "react";

const FeaturedContainer = () => {
  const [toggleFavTrigger, setToggleFavTrigger] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const togFav = async (ID) => {
    await toggleFavourite(ID);
    setToggleFavTrigger((prev) => !prev);
  };

  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getFeaturedStock()
      .then((res) => {
        setFeatured(res);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [toggleFavTrigger]);

  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <>
      {loading && (
        <h1
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            fontFamily: "Open Sans, sans-serif",
          }}
        >
          Loading...
        </h1>
      )}
      {featured && (
        <FeaturedCarousel featuredStockArr={featured} togFav={togFav} />
      )}
    </>
  );
};

export default FeaturedContainer;
