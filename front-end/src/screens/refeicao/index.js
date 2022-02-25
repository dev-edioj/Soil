import react from "react";
import { Link } from "react-router-dom";

import "../../style.css";


const MostrarRefeicoes = () => {
 

  return (
    <div className="container">
      <div className="container-table">
        <div className="table-title">
          <h1 className="title">Minhas refeicoes</h1>
        </div>
        <div className="wrap-table"></div>
        <div className="container-table--btn ">
          <input className="table-btn" type="submit" value="Adicionar" />
          <input className="table-form-btn" type="submit" value="Editar" />
          <input className="table-form-btn" type="submit" value="Deletar" />
        </div>
      </div>
    </div>
  );
};

export default MostrarRefeicoes;
