import styles from "./NavBar.module.scss";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <section className={styles.nav}>
      <div className={styles.nav__banner}>
        <img
          src="https://rahulmishra.in/cdn/shop/files/logo_d8cf5e47-8d82-42ec-b5b0-718c42b755c4_260x@2x.png?v=1615321272"
          alt="Rahul Mishra Logo"
        />
      </div>
      <ul className={styles.nav__menu}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/featured">Featured</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </ul>
    </section>
  );
};

export default NavBar;
