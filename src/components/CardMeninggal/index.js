import styles from "./CardMeninggal.module.css";

function CardMeninggal() {
  return (
    <div className={styles.card__meninggal}>
      <h3 className={styles.card__meninggalTitle}>Meninggal</h3>
      <h4 className={styles.card__meninggalNumber}>10.000</h4>
    </div>
  );
}

export default CardMeninggal;
