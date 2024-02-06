import React from "react";
import HomeContainer from "../../containers/HomeContainer/HomeContainer";
import styles from "./FeaturedPage.module.scss";

const FeaturedPage = () => {
  return (
    <>
      <section className={styles.featured}>
        <HomeContainer />
      </section>
    </>
  );
};

export default FeaturedPage;
