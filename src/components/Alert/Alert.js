import styles from "./Alert.module.css";
function Alert(props) {
  return (
    <div className={styles.alert}>
      <span>{props.children}</span>
    </div>
  );
}

export default Alert;
