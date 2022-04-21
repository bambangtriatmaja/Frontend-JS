import { nanoid } from "nanoid";
import { useState } from "react";
import styles from "./addDataForm.module.css";
import image from "./imageForm.png";

function AddDataForm(props) {
  // desctructing props
  const { status, setStatus } = props;

  // membuat state provinsi
  const [provinsi, setProvinsi] = useState("");

  // membuat fungsi handleProvinsi
  function handleProvinsi(e) {
    setProvinsi(e.target.value);
  }

  // membuat state status
  const [statusCovid, setStatusCovid] = useState("");

  // membuat fungsi handleStatus
  function handleStatusCovid(e) {
    setStatus(e.target.value);
  }

  // membuat state jumlah
  const [jumlah, setJumlah] = useState("");

  // membuat fungsi handleJumlah
  function handleJumlah(e) {
    setJumlah(e.target.value);
  }

  // handle form ketika disubmit
  function handleSubmit(e) {
    e.preventDefault();

    // menyiapkan data form ketika disubmit
    const province = {
      id: nanoid(),
      kota: provinsi,
      status: statusCovid,
      jumlah: jumlah,
    };

    setStatus([...status, province]);
  }

  return (
    <div className={styles.container}>
      <div className={styles.container__addDataForm}>
        <div className={styles.addDataForm__left}>
          <img className={styles.addDataForm__image} src={image} alt="" />
        </div>
        <div className={styles.addDataForm__right}>
          <h2 className={styles.addDataForm__title}>Form Covid</h2>
          <form onSubmit={handleSubmit}>
            <label className={styles.addDataForm__label} htmlFor="provinsi">
              Provinsi
            </label>
            <br />
            <select
              onChange={handleProvinsi}
              className={styles.addDataForm__selectProvinsi}
              name=""
              id=""
              value={provinsi}
            >
              <option value="provinsi"></option>
            </select>
            <br />
            <label className={styles.addDataForm__label} htmlFor="status">
              Status
            </label>
            <br />
            <select
              className={styles.addDataForm__selectStatus}
              name=""
              id=""
              value={statusCovid}
              onChange={handleStatusCovid}
            >
              <option value="positive">Positive</option>
              <option value="sembuh">Sembuh</option>
              <option value="dirawat">Dirawat</option>
              <option value="meninggal">Meninggal</option>
            </select>
            <br />
            <label className={styles.addDataForm__label} htmlFor="jumlah">
              Jumlah
            </label>{" "}
            <br />
            <input
              className={styles.addDataForm__jumlah}
              type="number"
              value={jumlah}
              onChange={handleJumlah}
            />
            <br />
            <input
              className={styles.addDataForm__submit}
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddDataForm;
