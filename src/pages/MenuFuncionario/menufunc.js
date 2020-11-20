import React from 'react';
import './menufuncionario.css';
import {Link} from 'react-router-dom';


export default function MenuFunc() {
    return(
        <div className="Tudu">
            <div className="TituloFunc">
                <h2>Olá funcionário, Bem-vindo de volta!!</h2>
            </div>

            <div className="btns1">
                <button className="button">
                    <Link to="/Consultar"> Consultar Agendamentos </Link>
                </button>
                <button className="button">
                    <Link to="/Agendar"> Agendar Horário </Link>
                </button>
            </div>
        </div>
    )
}
