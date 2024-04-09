import React from "react";
import FeaturedContainer from "../../containers/FeaturedContainer/FeaturedContainer";
import styles from "./FeaturedPage.module.scss";

const FeaturedPage = () => {
  return (
    <>
      <section className={styles.featured}>
        <FeaturedContainer />
      </section>
    </>
  );
};

export default FeaturedPage;
