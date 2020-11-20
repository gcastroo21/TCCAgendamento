import React from 'react';
import './login.css';

export default function Login() {
    return(
        <div className="Tudo">
            <div className="TituloLogin">
                <h1>Login</h1>
            </div>

            <div className="inserir">
                <label>E-mail:</label>
                <input type="text" ></input>
            
                <label>Senha:</label>
                <input type="password"></input>
            </div>

            <div className="btn">
                <button className="button"> Login </button>
            </div>

        </div>
    )
}
