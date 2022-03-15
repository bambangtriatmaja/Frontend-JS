/**
 * Membuat component Hello.
 * Component Hello menerima inputan: props.
 * Mencetak UI (elements).
 */
function Hello(props) {
  const { name } = props;
  return (
    <div className="hello">
      <h2>Hello React.js</h2>
      <p>Saya {name} - Frontend Engineer</p>
    </div>
  );
}

export default Hello;
