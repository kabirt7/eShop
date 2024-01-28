import HomeContainer from "../../containers/HomeContainer/HomeContainer";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <section className={styles.home}>
      <HomeContainer />
    </section>
  );
};

export default HomePage;
