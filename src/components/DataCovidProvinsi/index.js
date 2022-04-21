import DataFormProvinsi from "../DataFormProvinsi";
import styles from "./DataCovidProvinsi.module.css";
import { nanoid } from "nanoid";

function DataCovidProvinsi(props) {
  // destructing props
  const { status, setStatus } = props;

  function tambahProvinsi() {
    const provinsi = {
      id: nanoid(),
      kota: "Bogor",
      kasus: 1,
      sembuh: 0,
      meninggal: 0,
      dirawat: 0,
    };

    setStatus([...status, provinsi]);
  }

  return (
    <div className={styles.container}>
      <div className={styles.data}>
        <div className={styles.data__header}>
          <h2 className={styles.data__title}>Provinsi</h2>
          <h3 className={styles.data__description}>
            Data Covid Berdasarkan Provinsi
          </h3>
        </div>
        <div className={styles.table}>
          <table className={styles.table__data}>
            <thead className={styles.table__dataHead}>
              <tr className={styles.table__dataHeader}>
                <th className={styles.table__dataHeaderNomor}>No</th>
                <th className={styles.table__dataHeaderProvinsi}>Provinsi</th>
                <th className={styles.table__dataHeaderPositive}>Positive</th>
                <th className={styles.table__dataHeaderSembuh}>Sembuh</th>
                <th className={styles.table__dataHeaderDirawat}>Dirawat</th>
                <th className={styles.table__dataHeaderMeninggal}>Meninggal</th>
              </tr>
            </thead>
            {status.map(function (status) {
              return <DataFormProvinsi key={status.kota} allStatus={status} />;
            })}
          </table>
        </div>
        <button onClick={tambahProvinsi}>Add Data</button>
      </div>
    </div>
  );
}

export default DataCovidProvinsi;
