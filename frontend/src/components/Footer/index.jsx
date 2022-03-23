import React from "react";

import refugiadoLogo from "../../assets/img/refugiadoLogo.png";

import "./styles.css";

function Footer() {
  return (
    <footer className="bg-dark text-center text-lg-start">
      <div className="container pt-3">
        <div className="row mt-4">
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <img
              id="fot-logo"
              src={refugiadoLogo}
              className="img-fluid img-thumbnail"
              alt="logo for Refuguees"
            />
            <p className="fot-paragrafo text-center">
              A 4Refugees nasceu da necessidade de criar uma aplicação que
              impacte verdadeiramente e de forma eficiênte a vida dos refugiados
              em relação ao mercado de trabalho
            </p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Redes Sociais</h5>

            <div id="fot-redeSociais">
              <ul className="list-unstyled">
                <li>
                  <a href="#!">
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#!" className="">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#!" className="">
                    <i className="bi bi-whatsapp"></i>
                  </a>
                </li>
                <li>
                  <a href="#!" className="">
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Links</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#moveTo-home" className="">
                  Home
                </a>
              </li>
              <li>
                <a href="#moveTo-servicos" className="">
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a href="#moveTo-sobre" className="">
                  Sobre
                </a>
              </li>
              <li>
                <a href="/" rel="noreferrer">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">Endereço</h5>

            <p className="text-center fot-paragrafo">
              Rua a, 49 São Paulo, SP CEP: 2332-345
            </p>
          </div>
        </div>
      </div>
      <div className="text-center text-white p-3">
        © 2021 Copyright: Desenvolvido por Squad29 - Todos os Direitos
        Reservados
      </div>
    </footer>
  );
}

export default Footer;
