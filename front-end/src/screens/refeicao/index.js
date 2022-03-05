import react, { useState, useEffect } from "react";
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


    function accordionClick(event) {
        console.log(event.target)
        event.target.className = "accordion__content--selected";
    }



    return (
        <div className="container">
            {refeicoes.map((refeicoes, key) => {
                return (
                    <details key={key}>
                        <summary>{refeicoes.tipo_refeicao}</summary>
                        <ul>
                            {
                                refeicoes.itens.map((refeicoes, key) => {
                                    return (
                                        <li key={key}>Descrição: {refeicoes.descricao} - Quantidade: {refeicoes.quantidade} - Tipo: {refeicoes.tipo_item}</li>
                                    )
                                })
                            }
                        </ul>
                    </details>

                )

            })}

            <div className="container-table-btn " >
                <input className="table-btn"
                    type="submit"
                    value="Adicionar" />
                <input className="table-btn"
                    type="submit"
                    value="Editar" />
                <input className="table-btn"
                    type="submit"
                    value="Deletar" />
            </div>
        </div>
    )
}
export default MostrarRefeicoes;
