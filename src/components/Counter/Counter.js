import { useState } from "react";

function Counter() {
  // membuat variable state
  //   Mengembalikan 2 data:
  // nilai saat ini = 0
  // fungsi untuk mengubah state
  const [hasil, setHasil] = useState(0);

  function tambah() {
    setHasil(hasil + 1);
  }
  return (
    <div>
      <p>Hasil: {hasil}</p>
      <button onClick={tambah}>Add</button>
    </div>
  );
}

export default Counter;
