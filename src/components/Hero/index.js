import styles from "./Hero.module.css";
import image from "./ilustrasi.png";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Covid ID</h2>
          <h3 className={styles.hero__subtitle}>
            Monitoring Perkembangan Covid
          </h3>
          <p className={styles.hero__description}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium
            excepturi tempore consequatur quibusdam sequi eaque similique cum
            facere reiciendis unde!
          </p>
          <button className={styles.hero__button}>Vaccine</button>
        </div>
        <div className={styles.hero__right}>
          <img className={styles.hero__image} src={image} alt="" />
        </div>
      </section>
    </div>
  );
}

export default Hero;
