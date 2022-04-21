import styles from "./CardStatus.module.css";

function CardStatus(props) {
  const { allStatus } = props;

  return (
    <div className={styles.card__sembuh}>
      <h3 className={styles.card__sembuhTitle}>{allStatus.status}</h3>
      <h4 className={styles.card__sembuhNumber}>{allStatus.total}</h4>
    </div>
  );
}

export default CardStatus;
