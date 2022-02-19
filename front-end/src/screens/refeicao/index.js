import react from "react";
import { Link } from "react-router-dom";

import "../../style.css";

const MostrarRefeicoes = () => {
  return (
    <div className="container">
      <div className="container-list">
        <div className="input-btn">
          <Link to="/refeicoes/adicionar">
            <input type="submit" className="btn-options" value="Adicionar" />
          </Link>
        </div>
        <div className="input-btn">
          <Link to="/refeicoes/editar">
            <input type="submit" className="btn-options" value="Editar" />
          </Link>
        </div>
        <div className="input-btn ">
          <Link to="/refeicoes/deletar">
            <input type="submit" className="btn-options" value="Excluir" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MostrarRefeicoes;
