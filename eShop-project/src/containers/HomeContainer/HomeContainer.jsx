import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import styles from "./HomeContainer.module.scss";
import { getFeaturedStock } from "../../services/stock";
import { useEffect, useState } from "react";
import { setLocalesAsync } from "@expo/config-plugins/build/ios/Locales";
// useEffect(() => {
//   querySnapshot();
// }, []);

const HomeContainer = () => {
  // useEffect(() => {
  //   querySnapshot();
  // }, []);

  const [featured, setFeatured] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getFeaturedStock()
      .then((res) => setFeatured(res))
      .catch((e) => setError(e))
      .finally(setLoading(false));
  }, []);

  // usestate
  // useeffect
  // call get featured content on startup
  // set a state with that featured array
  // map that array such that it appears when the state is defined
  // add a loading state that is true when effect is called then false when content loaded
  return (
    <div>
      <HomeCarousel featuredStockArr={featured} />
    </div>
  );
};

export default HomeContainer;
