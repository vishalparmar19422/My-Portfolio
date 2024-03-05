import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./about.module.css";

export const Aboutus = () => {
  return (
    <>
      <section className={styles.container} id="about">
        {" "}
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
          <img
            className={styles.aboutImg}
            src={getImageUrl("about/man.png")}
          ></img>
          <ul className={styles.itemsContainer}>
            <li className={styles.aboutitem}>
              <img src={getImageUrl("about/cursorIcon.png")}></img>
              <div className={styles.itemText}>
                <h3>Frontend Developer</h3>
                <p>
                  I'm a Frontend Developer with experience in building
                  responsive and optimised sites
                </p>
              </div>
            </li>
            <li className={styles.aboutitem}>
              <img src={getImageUrl("about/serverIcon.png")}></img>
              <div  className={styles.itemText}>
                <h3>Backend Developer</h3>
                <p>
                  I'm currently learning and honing my skill in Backend
                  Development ,i am using node js with express js.
                </p>
              </div>
            </li>
            <li className={styles.aboutitem}>
              <img src={getImageUrl("about/uiIcon.png")}></img>
              <div  className={styles.itemText}>
                <h3>UI Design</h3>
                <p>
                  I have experience developing multiple landing pages and have
                  cloned some of great ui Design sites like sundown-studio
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
