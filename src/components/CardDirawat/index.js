import styles from "./CardDirawat.module.css";

function CardDirawat() {
  return (
    <div className={styles.card__dirawat}>
      <h3 className={styles.card__dirawatTitle}>Dirawat</h3>
      <h4 className={styles.card__dirawatNumber}>100.000</h4>
    </div>
  );
}

export default CardDirawat;
