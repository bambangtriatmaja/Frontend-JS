import CardStatus from "../CardStatus";
import styles from "./DataCovidIndonesia.module.css";
import data from "../../utils/constants/indonesia";

function DataCovidIndonesia() {
  const status = data.indonesia;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.header__title}>Indonesia</h2>
        <h3 className={styles.header__description}>
          Data Covid Berdasarkan Global
        </h3>
      </div>
      <div className={styles.card}>
        {status.map(function (status) {
          return <CardStatus key={status.status} allStatus={status} />;
        })}
      </div>
    </div>
  );
}

export default DataCovidIndonesia;
