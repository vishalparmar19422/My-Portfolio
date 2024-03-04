import React, { useState } from "react";
import styles from "./nav.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <nav className={styles.navbar}>
        <a href="/" className={styles.title}>
          Vishal Parmar
        </a>
        <div className={styles.menu}>
          <img
            src={
              menuOpen
                ? getImageUrl("nav/closeIcon.png")
                : getImageUrl("nav/menuIcon.png")
            }
            className={styles.menuBtn}
            alt="menu-button"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          ></img> 
          <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={()=>setMenuOpen(false)}>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
