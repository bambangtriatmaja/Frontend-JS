import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert.js";
import styles from "./AddMovieForm.module.css";

function AddMovieForm(props) {
  // desctructing props
  const { movies, setMovies } = props;
  // Membuat state title
  const [title, setTitle] = useState("");

  // Membuat state date
  const [date, setDate] = useState("");

  // Membuat state type
  const [type, setType] = useState("");

  // Membuat state poster
  const [poster, setPoster] = useState("");

  // Membuat state title dan date error/empty
  const [isTitleError, setIsTitleError] = useState(false);
  const [isDateError, setIsDateError] = useState(false);
  const [isPosterError, setIsPosterError] = useState(false);
  // Membuat fungsi handleTitle
  function handleTitle(e) {
    setTitle(e.target.value);
  }

  // Membuat fungsi handleDate
  function handleDate(e) {
    setDate(e.target.value);
  }

  // Membuat fungsi handleType
  function handleType(e) {
    setType(e.target.value);
  }

  // Membuat fungsi handlePoster
  function handlePoster(e) {
    setPoster(e.target.value);
  }

  // Membuat funsgi handleSubmit
  function handleSubmit(e) {
    e.preventDefault();

    // Jika data title kosong, maka set error title true
    if (title === "") {
      setIsTitleError(true);
    } else if (date === "") {
      setIsTitleError(false);
      setIsDateError(true);
    } else if (poster === "") {
      setIsTitleError(false);
      setIsDateError(false);
      setIsPosterError(true);
    }
    // jika tidak kosong, tambah data
    else {
      // Menyiapkan data movie yang ingin diinput
      const movie = {
        id: nanoid(),
        title: title,
        year: date,
        type: type,
        poster: poster,
      };

      setMovies([...movies, movie]);
      setIsTitleError(false);
      setIsDateError(false);
      setIsPosterError(false);
    }
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
              onChange={handleTitle}
              className={styles.addMovieForm__titleForm}
              type="text"
              value={title}
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
              onChange={handleDate}
              className={styles.addMovieForm__yearForm}
              type="number"
              value={date}
            />
            {isDateError && <Alert>Date wajib diisi</Alert>}
            <br />
            <label htmlFor="type">Type</label>
            <br />
            <select
              className={styles.addMovieForm__typeForm}
              value={type}
              onChange={handleType}
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
              onChange={handlePoster}
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
