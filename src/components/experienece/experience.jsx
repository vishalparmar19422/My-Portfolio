import React from "react";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import styles from "./experience.module.css";

const Experience = () => {
  return (
    <>
      <section id="experience" className={styles.container}>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
          <div className={styles.skills}>
            {skills.map((skill, id) => {
              return (
                <div key={id} className={styles.skill}>
                  <div className={styles.skillImgcontainer}>
                    <img
                      className={styles.skillimg}
                      src={getImageUrl(skill.imageSrc)}
                    ></img>
                  </div>
                  <p>{skill.title}</p>
                </div>
              );
            })}
          </div>
          {/* <ul className={styles.history}>
            {history.map((history, id) => {
              return (
                <li key={id}className={styles.historyItem} >
                  <img src={getImageUrl(history.imageSrc)}></img>
                  <div className={styles.itemDetails}>
                    <h3>{`${history.role},${history.organisation}`}</h3>
                    <p>{`${history.startDate},${history.endDate}`}</p>
                    <ul>
                      {history.experiences.map((exp, id) => {
                        return <li key={id}>{exp}</li>;
                      })}
                    </ul>
                  </div>
                </li>
              );
            })}
          </ul> */}
        </div>
      </section>
    </>
  );
};

export default Experience;
