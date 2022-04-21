import styles from "./DataFormProvinsi.module.css";

function DataFormProvinsi(props) {
  const { allStatus } = props;
  return (
    <tbody>
      <tr>
        <td className={styles.table__dataBody}></td>
        <td>{allStatus.kota}</td>
        <td>{allStatus.kasus}</td>
        <td>{allStatus.sembuh}</td>
        <td>{allStatus.dirawat}</td>
        <td>{allStatus.meninggal}</td>
      </tr>
    </tbody>
  );
}

export default DataFormProvinsi;
