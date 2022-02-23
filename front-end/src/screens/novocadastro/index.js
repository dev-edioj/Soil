import react, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import api from "../../services/api";

import "../../style.css";




const NovoCadastro = () => {
  const [values, setValues] = useState({
    login:"",
    email: "",
    senha:""
  });
  const navegate = useNavigate();

  const handleFieldsChange = (event) => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const response = api
      .post('/usuarios', values)
      .then(function (response) {
        console.log(response);
        navegate('/')
      })
      .catch(function (error) {
        console.log(error);
      })
   

  
  };

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form" onSubmit={handleSubmit}>
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
                value={values.login}
                placeholder="Crie seu login"
                onChange={handleFieldsChange}
              />
            </div>
            <div className="wrap-input">
              <input
                className="input"
                type="text"
                name="email"
                value={values.email}
                placeholder="Digite seu email"
                onChange={handleFieldsChange}
              />
            </div>
            <div className="wrap-input">
              <input
                className="input"
                type="password"
                name="senha"
                value={values.senha}
                placeholder="Crie sua senha"
                onChange={handleFieldsChange}
              />
            </div>
            <div className="wrap-input">
              <input
                className="input"
                type="password"
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
