import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <section className={styles.nav}>
      <h1>Header</h1>
      <ul className={styles.nav__menu}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink>Link</NavLink>
      </ul>
    </section>
  );
};

export default NavBar;
