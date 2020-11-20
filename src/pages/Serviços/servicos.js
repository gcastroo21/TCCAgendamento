import React from 'react';
import './serviços.css';
import { Link } from "react-router-dom";

export default function Serviços() {
    return(
        <div>
            <header className="Cabeçalho">
                <div className="CabeçalhoTitulo">
                    <h3>Beautiful Hair</h3>
                </div>
            </header>
            
            <div className="link4">
                <Link to="/MenuCliente">
                    <button className="button"> Voltar </button>
                </Link>
            </div>

            <div className="Servicinhos">
                <h3 class="display-4"> Serviços diponíveis</h3>
            </div>

            <div className="Serviços">
                <div className="serviço1">
                    <p>Fazemos Hidratação por apenas R$35,00!</p>
                    <img className="hidrata" width="400px" height="200px" alt="" />
                </div>

                <div className="serviço2">
                    <p>Fazemos chapinha por apenas R$20,00!</p>
                    <img className="chapinha" width="400px" height="200px" alt="" />
                </div>

                <div className="serviço3">
                    <p>Fazemos escova no seu cabelo por apenas R$35,00!</p>
                    <img className="escova" width="400px" height="200px" alt="" />
                </div>

                <div className="serviço4">
                    <p>Fazemos Cortes de Cabelo por apenas R$25,00!</p>
                    <img className="corte" width="400px" height="200px" alt="" />
                </div>

                <div className="serviço5">
                    <p>Fazemos Baby Liss por apenas R$50,00!!</p>
                    <img className="baby" width="400px" height="200px" alt="" />
                </div>
            </div>

        </div>
    )
}


