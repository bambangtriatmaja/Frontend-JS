import { useState } from "react";
import AddDataForm from "../components/AddDataForm";
import DataCovidIndonesia from "../components/DataCovidIndonesia";
import DataCovidProvinsi from "../components/DataCovidProvinsi";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import data from "../utils/constants/provinces";

function Main() {
  const [status, setStatus] = useState(data.provinces);
  return (
    <main>
      <Hero />
      <DataCovidIndonesia />
      <DataCovidProvinsi status={status} setStatus={setStatus} />
      <AddDataForm status={status} setStatus={setStatus} />
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
