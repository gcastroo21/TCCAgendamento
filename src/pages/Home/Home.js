import './Home.css';
import { Link } from "react-router-dom";

function App() {

  return (

    <div className="App">

      <header className="Cabeçalho">
        <div className="CabeçalhoTitulo">
        <h3 className="htitle"> Beautiful Hair </h3>
        </div>
        
        <div className="CabeçalhoBotão">
          <Link to="/Cadastrar"> 
          <button className="button"> Cadastre-se </button>
          </Link>
        </div>

        <div className="CabeçalhoBotão2">
          <Link to="/Login">
            <button className="button"> Login </button>
          </Link>
        </div>

      </header>   
      <div className="TextoHome">
        <h2 class="display-4">Beautiful Hair</h2>
        <ul class="list-unstyled">
        <br></br>
        <div className="textin">
        <li>Um conceito de Beleza Completo, onde nosso cuidado é cuidar de você!</li> 
        <li>Entre e saíba mais sobre nossos serviços e agende um horário conosco!</li>
        </div>  
        </ul>
      </div>
    </div>
  );
}

export default App;

