import react, {useState, useEffect} from "react";
import api from "../../services/api";

import "../../style.css";


const MostrarRefeicoes = () => {
  const [refeicoes, setRefeicoes] = useState([])
  useEffect(() => {
    api.get('/refeicoes')
      .then((response) => {
        setRefeicoes(response.data); 
      })
      .catch(error => {
        console.log("Deu errado")
      })
  }, [])
  
 
  return (
    
    <div className="container">
      <div className="container-table">
        <div className="table-title">
          
        </div>
        <div className="wrap-table">
          {refeicoes.map((refeicoes, key) => {
            
           
            return (
              <table className="dados_refeicoes" key={key}>
                <caption>
                {/*   <p>{JSON.stringify(refeicoes.itens)}</p> */}
                  <h2 className="title">Minhas refeicoes</h2>
                </caption>
                <tr>
                  <th>Usuario</th>
                  <th>Tipo</th>
                  <th>Categoria</th>
                  <th>Descrição</th>
                  <th>Quantidade</th>
                  <th>Data</th>
                </tr>
                <tr>
                  <td>{refeicoes.usuario_id}</td>
                  <td>{refeicoes.tipo_refeicao}</td>
                  <td>
                    {refeicoes.itens.map((itens) => {
                      return itens.tipo_item;
                    })}
                  </td>
                  <td>
                    {refeicoes.itens.map((itens) => {
                      return itens.descricao;
                    })}
                  </td>
                  <td>
                    {refeicoes.itens.map((itens) => {
                      return itens.quantidade;
                    })}
                  </td>
                  <td>
                    {refeicoes.itens.map((itens) => {
                      return itens.created_at;
                    })}
                  </td>
                </tr>
              </table>
            );
           
         })}
        </div>
        <div className="container-table-btn ">
          <input className="table-btn" type="submit" value="Adicionar" />
          <input className="table-btn" type="submit" value="Editar" />
          <input className="table-btn" type="submit" value="Deletar" />
        </div>
      </div>
    </div>
  );
};

export default MostrarRefeicoes;
