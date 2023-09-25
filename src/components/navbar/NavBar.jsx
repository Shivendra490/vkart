import React from "react";
import styles from "./NavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faEnvelope,
  faBars,
  faCartShopping,
  faUserTie,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav className={styles.navWrapper}>
      <div className={styles.logo}>
        <img
          className={styles.logoImg}
          src="https://media.istockphoto.com/id/1180882238/vector/success-logo.jpg?s=612x612&w=0&k=20&c=brO28PRCR_73Oj-qVIGDzYxfDwZj17t7VrLb-JiGH2Q="
          alt="logo"
        />
      </div>
      <div className={styles.linksWrapper}>
        <div className={styles.home}>Home</div>
        <div className={styles.aboutus}>About us</div>
        <div className={styles.fav}>
          <FontAwesomeIcon icon={faHeart} style={{ color: "#d10aoa" }} />
          <div className={styles.badge}>12</div>
        </div>
        <div className={styles.cartIconWrapper}>
          <FontAwesomeIcon icon={faCartShopping} style={{ color: "#d10aoa" }} />
          <div className={styles.badge}>10</div>
        </div>
        <div className={styles.avatar}>
          <FontAwesomeIcon icon={faUserTie} style={{ color: "#d10aoa" }} />
        </div>
      </div>
      <div className={styles.barWrapper}>
        {<FontAwesomeIcon icon={faBars} style={{ color: "#972020" }} />}
      </div>
    </nav>
  );
};

export default NavBar;
