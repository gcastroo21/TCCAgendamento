import React from 'react';
import './Agendar.css'

export default function Agendar() {
    return(
        <div className="Complete">

            <div className="Cadastro">
               <h1>Agendar Horário</h1>
            </div>
            <div className="inseridos">
                <label>Nome:</label>
                <input type="text" ></input>

                <label> Telefone:</label>
                <input type="text"></input>

                <label> Marcar horário</label>
                <input type="Date"></input>

                <label> Serviço escolhido</label>
                <select>
                    <option>Escova-R$35.00</option>
                    <option>Hidratação-R$35.00</option>
                    <option>Chapinha-R$20.00</option>
                    <option>Cortes Masculino/Feminino-R$25.00</option>
                    <option>Baby Liss-R$50.00</option>
                </select>
                
            </div>

            <div className="Finalizar">
                <button className="button">Finalizar Agendamento</button>
                <button className="button">
                    <a href="MenuCliente"> Voltar </a>
                </button>
            </div>
            
        </div>
    )
}
