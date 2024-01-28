import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <section className={styles.nav}>
      <h1>Header</h1>
      <ul className={styles.nav__menu}>
        <li>Link</li>
        <li>Link</li>
        <li>Link</li>
        <li>Link</li>
      </ul>
    </section>
  );
};

export default NavBar;
