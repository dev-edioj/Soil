import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import "../../style.css";
import logo from "../../assets/logo.png";
import NovoCadastro from "../novocadastro";

function LoginScreen() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const handleFieldsChange = (event) => {
    if (event.target.name === "login") {
      setLogin(event.target.value);
    } else {
      setSenha(event.target.value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.get(`/login/${login}/${senha}`);

      console.log(response);
    } catch (error) {
      alert("Login ou senha inválido, por favor tente novamente.");
    }
  };

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form" onSubmit={handleSubmit}>
            <span className="login-form-title"> Bem - vindo! </span>
            <span className="login-form-title">
              <img src={logo} alt="logo soil" />
            </span>
            <div className="wrap-input">
              <input
                className="input"
                type="text"
                name="login"
                placeholder="Login"
                value={login}
                onChange={handleFieldsChange}
              />
            </div>
            <div className="wrap-input">
              <input
                className="input"
                type="password"
                name="senha"
                placeholder="Senha"
                value={senha}
                onChange={handleFieldsChange}
              />
            </div>
            <Link to="/refeicoes">
              <div className="container-login-form-btn ">
                <input
                  type="submit"
                  className="login-form-btn"
                  value="Entrar"
                  
                />
              </div>
            </Link>
          </form>

          <div className="text-center">
            <span className="txt1"> Não possui conta ? </span>
            <Link to="/cadastrar">
              <input className="txt2" value="Criar conta" type="submit" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
