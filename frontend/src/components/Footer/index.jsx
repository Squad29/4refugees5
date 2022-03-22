import React from "react";

import refugiadoLogo from "../../assets/img/refugiadoLogo.png";

import "./styles.css";

function Footer() {
  return (
    <footer class="bg-dark text-center text-lg-start">
      <div class="container pt-3">
        <div class="row mt-4">
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <img
              id="fot-logo"
              src={refugiadoLogo}
              class="img-fluid img-thumbnail"
              alt="logo for Refuguees"
            />
            <p class="fot-paragrafo text-center">
              A 4Refugees nasceu da necessidade de criar uma aplicação que
              impacte verdadeiramente e de forma eficiênte a vida dos refugiados
              em relação ao mercado de trabalho
            </p>
          </div>
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Redes Sociais</h5>

            <div id="fot-redeSociais">
              <ul class="list-unstyled">
                <li>
                  <a href="#!">
                    <i class="bi bi-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#!" class="">
                    <i class="bi bi-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#!" class="">
                    <i class="bi bi-whatsapp"></i>
                  </a>
                </li>
                <li>
                  <a href="#!" class="">
                    <i class="bi bi-facebook"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Links</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#moveTo-home" class="">
                  Home
                </a>
              </li>
              <li>
                <a href="#moveTo-servicos" class="">
                  Nossos Serviços
                </a>
              </li>
              <li>
                <a href="#moveTo-sobre" class="">
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
          <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
            <h5 class="text-uppercase">Endereço</h5>

            <p class="text-center fot-paragrafo">
              Rua a, 49 São Paulo, SP CEP: 2332-345
            </p>
          </div>
        </div>
      </div>
      <div class="text-center text-white p-3">
        © 2021 Copyright: Desenvolvido por Squad29 - Todos os Direitos
        Reservados
      </div>
    </footer>
  );
}

export default Footer;
