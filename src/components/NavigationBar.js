// Navbar.js

import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.logo}>
        Ecommerce Store
      </Link>

      <ul className={styles.navLinks}>
        <li>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/contact" className={styles.navLink}>
            contact
          </Link>
        </li>
        <li>
          <Link to="/about" className={styles.navLink}>
            about
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
