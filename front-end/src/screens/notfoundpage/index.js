import react from 'react';
import { Link } from 'react-router-dom';
import notfound from "../../assets/notfound.png";
import "../../style.css"


const NotFoundPage = () => {
    return (
      <main className="notfound-main">
        <img className="notfound-img" src={notfound} alt="" />
        <p className="notfound-text">
          Ops, <br /> Essa página não existe! <br />
          <br />
          Para retorna para nossa página inicial <br />
          <Link to="/">
            <input
              className="btn-notfound-home"
              type="submit"
              value="Clique aqui"
            />
          </Link>
        </p>
      </main>
    );

}

export default NotFoundPage;
