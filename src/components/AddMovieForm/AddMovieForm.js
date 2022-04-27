import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert.js";
import styles from "./AddMovieForm.module.css";

function AddMovieForm(props) {
  // desctructing props
  const { movies, setMovies } = props;

  // Membuat state object
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    type: "",
    poster: "",
  });

  // Membuat fungsi handleChange untuk handle semua input form
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // // Membuat state object false
  // const [isDataError, setIsDataError] = useState({
  //   title: false,
  //   date: false,
  //   type: false,
  //   poster: false,
  // });

  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  const [isPosterError, setIsPosterError] = useState(false);

  const { title, date, type, poster } = formData;

  function validate() {
    // Jika data title kosong, maka set error title true
    if (title === "") {
      setIsTitleError(true);
      return false;
    } else if (date === "") {
      setIsTitleError(false);
      setIsDateError(true);
      return false;
    } else if (poster === "") {
      setIsTitleError(false);
      setIsDateError(false);
      setIsPosterError(true);
      return false;
    } else {
      setIsTitleError(false);
      setIsDateError(false);
      setIsPosterError(false);
      return true;
    }
  }

  function addMovie() {
    // Menyiapkan data movie yang ingin diinput
    const movie = {
      id: nanoid(),
      title: title,
      year: date,
      type: type,
      poster: poster,
    };

    setMovies([...movies, movie]);
  }

  // Membuat funsgi handleSubmit
  function handleSubmit(e) {
    e.preventDefault();
    validate() && addMovie();
  }

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
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title</label>
            <br />
            <input
              onChange={handleChange}
              className={styles.addMovieForm__titleForm}
              type="text"
              value={title}
              name="title"
            />
            {/* 
              Jika error title true: muncul error
              jika tidak, munculkan string kosong
            */}
            {isTitleError && <Alert>Title wajib diisi</Alert>}

            <br />
            <label htmlFor="year">Year</label>
            <br />
            <input
              onChange={handleChange}
              className={styles.addMovieForm__yearForm}
              type="number"
              value={date}
              name="date"
            />
            {isDateError && <Alert>Date wajib diisi</Alert>}
            <br />
            <label htmlFor="type">Type</label>
            <br />
            <select
              className={styles.addMovieForm__typeForm}
              value={type}
              onChange={handleChange}
              name="type"
            >
              <option value="Action">Action</option>
              <option value="drama">Drama</option>
              <option value="horor">Horror</option>
              <option value="comedy">Comedy</option>
            </select>
            <br />
            <label htmlFor="poster">Poster</label>
            <br />
            <input
              className={styles.addMovieForm__posterForm}
              type="text"
              value={poster}
              onChange={handleChange}
              name="poster"
            />
            {isPosterError && <Alert>Poster wajib diisi</Alert>}
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
