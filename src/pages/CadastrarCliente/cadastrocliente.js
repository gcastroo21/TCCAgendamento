import React from 'react';
import './cadastro.css';

export default function Cadastrar() {
    return(
        <div className="Completo">

            <div className="title">
               <h1>Cadastro</h1>
            </div>
            <div className="inserir1">
                <label>Nome:</label>
                <input type="text" ></input>
            
                <label>E-mail:</label>
                <input type="text"></input>

                <label>Senha:</label>
                <input type="password" ></input>
            
                <label>CPF:</label>
                <input type="text"></input>

                <label> Telefone:</label>
                <input type="text"></input>
            </div>
            <div className="botões1">
                <button className="button"> Finalizar Cadastro </button>
            </div>
            <div className="botões2">
                <button className="button">
                    <a href="Login"> Fazer Login </a>
                </button>
            </div>
        </div>
    )
}
