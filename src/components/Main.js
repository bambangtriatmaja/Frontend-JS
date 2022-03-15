// Import component Hello from src/components/Hello.js
import Hello from "./Hello";

/**
 * Membuat component Main
 * component Main menampung konten utama
 * Menggunakan arrow function
 *
 */
const Main = () => {
  return (
    <main>
      <Hello name="Bambang" />
      <Hello name="Triatmaja" />
      <Hello name="Bams" />
      <Hello name="Tri" />
      <Hello name="Bambang Triatmaja" />
    </main>
  );
};

export default Main;
