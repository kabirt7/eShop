import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import { getFeaturedStock, toggleFavourite } from "../../services/stock";
import { useEffect, useState } from "react";

const HomeContainer = () => {
  const togFav = async (ID) => {
    await toggleFavourite(ID);
  };

  const [featured, setFeatured] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getFeaturedStock()
      .then((res) => setFeatured(res))
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, [togFav]);

  return (
    <>
      <HomeCarousel featuredStockArr={featured} togFav={togFav} />
    </>
  );
};

export default HomeContainer;
