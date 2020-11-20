import React from 'react';
import './consultar.css';
import { Link } from "react-router-dom";

export default function Consultar() {
    return(
        <div>
            <div className="Completed">
                <div className="Title">
                    <h1>Consulta de Agendamentos</h1>
                </div>

                <div className="inserir3">
                    <label className="nome3"> Nome: </label>

                    <input type="text"></input>
                    

                    <label className="telefone3"> Telefone: </label>

                    <input type="text"></input>
                    
                </div>

                <div className="buscar">
                    <button className="button"> Buscar </button>
                </div>

                <div className="backzin">
                    <button className="button">
                        <Link to="/menufuncionario" className="button"> Voltar </Link>
                    </button>
                </div>
            </div>

            <table className="table">

                <thead class="thead-dark">
                    <tr>
                        <th>Nome:</th>
                        <th>Telefone:</th>
                        <th>Horário Marcado:</th>
                        <th>Serviço escolhido:</th>
                        <th>Modificar:</th>
                    </tr>
                </thead>

              <tbody>
                    <tr>
                        <td>Lucca Leonardo</td>
                        <td>11 967234511</td>
                        <td>10/02/2021 14:30</td>
                        <td>Corte de Cabelo R$25.00</td>
                        <td><button className="button">Excluir</button></td>
                    </tr> 
              </tbody>
            </table>

        </div>
    )
}
