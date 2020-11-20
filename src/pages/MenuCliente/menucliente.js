import React from 'react';
import { Link } from 'react-router-dom';
import './MenuCliente.css';

export default function MenuCliente() {
    return(
        <div className="tudão">
            <header className="Cabeçalho">
                <h3>Beaultiful Hair</h3>
            </header>

            <div className="Título">
                <h3 class="display-4">Bem Vindo!</h3>
            </div>

            <div className="Serviços">
                <h3>Veja os serviços que temos a oferecer!</h3>
            </div>

            <div className="Botão">
                <Link to="/Serviços">
                    <button className="button">Serviços</button>
                </Link>
            </div>

            <div className="Tudin">
                <div className="Título2">
                <h3>Agende um horário Conosco!</h3>
                </div>

                <div className="Botão2">
                    <Link to="/Agendar">
                        <button className="button"> Agendar Horário</button> 
                    </Link>
                </div>
            </div>

            <div className="rodape">
                <rodape>Um conceito de Beleza Completo, onde nosso cuidado é cuidar de você!</rodape>
            </div>
        </div>
    )
}
