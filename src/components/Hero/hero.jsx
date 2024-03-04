import { getImageUrl } from "../../utils";
import styles from "./hero.module.css";
export const Hero = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Hey,fellas</h1>
          <p className={styles.discription}>
            I'm a front-end web developer with great knowledge of in demand
            libray and framework like redux-toolkit,react,swiper js etc and
            currently learning Backend development to achive one of my goal that
            is to be a full-stack developer.
          </p>
          <a className={styles.contactBtn}  href="mailto:vishalparmar8234@gmail.com">Contact Me</a>
        </div>
        <img className={styles.heroImg} src={getImageUrl("hero/man.png")}></img>
        <div className={styles.topblur}></div>
        <div className={styles.bottomblur}></div>
      </section>
    </>
  );
};

export default Hero;
