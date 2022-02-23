import react, { useState} from "react";
import api from "../../services/api";

import "../../style.css";

const NovoCadastro = () => {
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <span className="login-form-title">
              {" "}
              Olá! Junte-se a nós, crie sua conta agora!{" "}
            </span>
            <span className="login-form-title">
              {/* <img src={logo} alt="logo soil" /> */}
            </span>
            <div className="wrap-input">
              <input
                className="input"
                type="text"
                name="login"
                placeholder="Crie seu login"
              />
            </div>
            <div className="wrap-input">
              <input
                className="input"
                type="text"
                name="email"
                placeholder="Digite seu email"
              />
            </div>
            <div className="wrap-input">
              <input
                className="input"
                type="password"
                name="senha"
                placeholder="Crie sua senha"
              />
            </div>
            <div className="wrap-input">
              <input
                className="input"
                type="password"
                name="confirmar_senha"
                placeholder="Confirmar senha"
              />
            </div>
            <div className="container-login-form-btn ">
              <input
                type="submit"
                className="login-form-btn"
                value="Cadastrar"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  
};

export default NovoCadastro;
