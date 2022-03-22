import styles from "./AddMovieForm.module.css";

function AddMovieForm() {
  return (
    <div className={styles.container}>
      <div className={styles.container__addMovieForm}>
        <div className={styles.addMovieForm__left}>
          <img
            className={styles.addMovieForm__image}
            src="https://picsum.photos/467/424"
            alt="image_form"
          />
        </div>
        <div className={styles.addMovieForm__right}>
          <h2 className={styles.addMovieForm__title}>Add Movie</h2>
          <form action="">
            <label htmlFor="title">Title</label>
            <br />
            <input className={styles.addMovieForm__titleForm} type="text" />
            <br />
            <label htmlFor="year">Year</label>
            <br />
            <input className={styles.addMovieForm__yearForm} type="text" />
            <br />
            <input
              className={styles.addMovieForm__submitForm}
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddMovieForm;
