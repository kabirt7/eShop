import FeaturedCarousel from "../../components/FeaturedCarousel/FeaturedCarousel";
import { getFeaturedStock, toggleFavourite } from "../../services/stock";
import { useEffect, useState } from "react";

const HomeContainer = () => {
  const [toggleFavTrigger, setToggleFavTrigger] = useState(false);

  const togFav = async (ID) => {
    await toggleFavourite(ID);
    setToggleFavTrigger((prev) => !prev);
  };

  const [featured, setFeatured] = useState(null);

  useEffect(() => {
    getFeaturedStock()
      .then((res) => setFeatured(res))
      .catch((error) => console.log(error));
  }, [toggleFavTrigger]);

  return (
    <>
      <FeaturedCarousel featuredStockArr={featured} togFav={togFav} />
    </>
  );
};

export default HomeContainer;
