import React from "react";

import "./styles.css";
import Contratantes from "../../components/ContratanteController";

function Contrante() {
  return (
    <div className="contratantes--section container d-flex align-items-center justify-content-center flex-column mb-5">
      <Contratantes />
    </div>
  );
}

export default Contrante;
