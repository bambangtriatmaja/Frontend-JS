import { useEffect, useState } from "react";

function Counter() {
  /**
   * useState mengembalikan sepasang value (array): [0, function()]
   */
  const [angka, setAngka] = useState(0);

  function addAngka() {
    setAngka(angka + 1);
  }

  function updateDOM() {
    console.log("Lifecycle: Dimount");

    // Melakukan side effect: mengakses DOM
    document.title = `Hasil: ${angka}`;
  }

  // useEffect
  useEffect(updateDOM, [angka]);
  console.log("Lifecycle: dirender");

  return (
    <div>
      <p>Hasil: {angka}</p>
      <button onClick={addAngka}>Add</button>
    </div>
  );
}

export default Counter;
