import React, {useState} from "react";

import logo from "./assets/logo.png";

import "./style.css";

function App() {
  /* const { login, setLogin } = useState();
  const { senha, setSenha } = useState();


  async function login(event) {
    event.preventDefault();

    

    
  }
 */
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title"> Bem - vindo! </span>
            <span className="login-form-title">
              <img src={logo} alt="logo soil" />
            </span>
            <div className="wrap-input">
              <input className="input" type="text" placeholder="Usuário" />
              {/*   <span className="focus-input" data-placeholder="Usuario"></span> */}
            </div>
            <div className="wrap-input">
              <input className="input" type="password" placeholder="Senha" />
              {/* <span className="focus-input" data-placeholder="Senha"></span> */}
            </div>
            <div className="container-login-form-btn ">
              <button className="login-form-btn" >
                {" "}
                Entrar{" "}
              </button>
            </div>
            <div className="text-center">
              <span className="txt1"> Não possui conta ? </span>

              <a className="txt2" href="/front-end/components/novocadastro.js">
                Criar conta
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
