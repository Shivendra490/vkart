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
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const totalCartQuantity=useSelector(state=>state.cart.totalCartQuantity)
  return (
    <nav className={styles.navWrapper}>
      <div className={styles.logo}>
        <NavLink to="/">
          {" "}
          <img
            className={styles.logoImg}
            src="https://media.istockphoto.com/id/1180882238/vector/success-logo.jpg?s=612x612&w=0&k=20&c=brO28PRCR_73Oj-qVIGDzYxfDwZj17t7VrLb-JiGH2Q="
            alt="logo"
          />
        </NavLink>
      </div>
      <div className={styles.linksWrapper}>
        <div className={styles.home}>Home</div>
        <div className={styles.aboutus}>About us</div>
        <div className={styles.fav}>
          <NavLink to="/wishlist" className={({isActive})=>isActive? styles.active: ""}>
            <FontAwesomeIcon icon={faHeart} style={{ color: "#d10aoa" }} />
            <div className={styles.badge}></div>
          </NavLink>
        </div>
        <div className={styles.cartIconWrapper}>
          <NavLink to="/cart" className={({isActive})=>isActive? styles.active : ""}>
            <FontAwesomeIcon
              icon={faCartShopping}
              style={{ color: "#d10aoa" }}
            />
            <div className={totalCartQuantity ? styles.badge : ""}>{totalCartQuantity>0 && totalCartQuantity}</div>
          </NavLink>
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
