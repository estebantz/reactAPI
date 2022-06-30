import React, { useState, useEffect } from "react";
import "./App";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logosimpson from "./img/LogoSimpson.png";
import { Frase } from "./components/Frase";
import { Spinner } from "./components/Spinner";

function App() {
  const [fraseSimpsons, setFraseSimpsons] = useState({});
  const [loader, setLoader] = useState(false);

  const consultarAPI = async () => {
    setLoader(true);
    const api = await fetch("https://thesimpsonsquoteapi.glitch.me/quotes");
    const respuesta = await api.json();
    setTimeout(() => {
      setFraseSimpsons(respuesta[0]);
      setLoader(false);
    }, 1000);
  };

  useEffect(() => {
    consultarAPI();
  }, []);

  const cargarComponente = loader ? (
    <Spinner />
  ) : (
    <Frase fraseSimpson={fraseSimpsons} />
  );

  return (
    <section className="container">
      <div className="d-flex flex-column mb-3 align-items-center">
        <img
          src={logosimpson}
          alt="logo de lo simpson"
          className="w-75 my-4"
        ></img>
        <button
          className="btn btn-warning my-5 shadow"
          onClick={() => consultarAPI()}
        >
          Obtener frase
        </button>
      </div>
      {cargarComponente}
    </section>
  );
}

export default App;
