import styles from "./Menu.module.css";

function Menu() {
  return (
    <ul className={styles.navbar__list}>
      <li className={styles.navbar__item}>Global</li>
      <li className={styles.navbar__item}>Indonesia</li>
      <li className={styles.navbar__item}>Provinsi</li>
      <li className={styles.navbar__item}>About</li>
    </ul>
  );
}

export default Menu;
