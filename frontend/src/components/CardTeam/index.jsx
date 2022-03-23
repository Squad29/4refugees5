import React from "react";
import "./styles.css";

import FotoGiulia from "../../assets/img/giulia.jpeg";
import FotoRafael from "../../assets/img/rafael.jpg";
import FotoNaassom from "../../assets/img/naassom.png";
import FotoRosana from "../../assets/img/rosana.jpeg";
import FotoEliane from "../../assets/img/eliane.jpg";
import FotoJanilson from "../../assets/img/janilson.png";

function CardTeam() {
  return (
    <div className="card--content row container">
      <div className="card--container col-md-6 col-lg-4">
        <div className="card-img">
          <img src={FotoRafael} alt="img team" />
        </div>
        <div className="card-title">
          <h4>Rafael Moura</h4>
          <p>Estudante Recode PRO 2021</p>
        </div>
        <div className="card-info">
          <p>
            Natural de Recife, PE. Formado em Análise e Desenvolvimento de
            Sistema pela Universidade Estácio de Sá. Atualmente atuando como
            Analista de Back-Office.
          </p>
        </div>
        <div className="card-social">
          <a
            href="https://github.com/Rafa-Moura"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rafael-moura-a0111411b/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/mourarafaell/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
      <div className="card--container col-md-6 col-lg-4">
        <div className="card-img">
          <img src={FotoGiulia} alt="img team" />
        </div>
        <div className="card-title">
          <h4>Giulia Lima</h4>
          <p>Estudante Recode PRO 2021</p>
        </div>
        <div className="card-info">
          <p>
            Programadora full stack em formação pela Recode, estudante de
            engenharia da computação pela UTFPR, meu objetivo é desenvolver
            soluções para área da saúde.
          </p>
        </div>
        <div className="card-social">
          <a href="https://github.com/Gi-LD" target="_blank" rel="noreferrer">
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.instagram.com/duartx.jpg/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
      <div className="card--container col-md-6 col-lg-4">
        <div className="card-img">
          <img src={FotoNaassom} alt="img team" />
        </div>
        <div className="card-title">
          <h4>Naassom Pedro</h4>
          <p>Estudante Recode PRO 2021</p>
        </div>
        <div className="card-info">
          <p>
            Natural de São Paulo, SP. Atualmente estuda desenvolvimento de
            aplicações web. E no momento atua como técnico de manutenção
            predial.
          </p>
        </div>
        <div className="card-social">
          <a
            href="https://github.com/naassom-pedro/naassom-pedro"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/naassom-pedro-4aa00995/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
      <div className="card--container col-md-6 col-lg-4">
        <div className="card-img">
          <img src={FotoJanilson} alt="img team" />
        </div>
        <div className="card-title">
          <h4>Janilson Coimbra</h4>
          <p>Estudante Recode PRO 2021</p>
        </div>
        <div className="card-info">
          <p>
            Natural de Salvador-BA, Estudante de desenvolvimento de sistemas Web
            FullStack, gosto muito da área tecnológica e destrinchar seus
            conceitos.
          </p>
        </div>
        <div className="card-social">
          <a
            href="https://github.com/JanilsonCoimbra"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/janilson-coimbra-780761209/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/janilsoncoimbra/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
      <div className="card--container col-md-6 col-lg-4">
        <div className="card-img">
          <img src={FotoRosana} alt="img team" />
        </div>
        <div className="card-title">
          <h4>Rosana Lopes</h4>
          <p>Estudante Recode PRO 2021</p>
        </div>
        <div className="card-info">
          <p>
            Natural de São Paulo SP, Formada em Técnico de Contabilidade, Mãe de
            Gatos, Apaixonada por Tecnologia e longas conversas. Aprendiz de
            Programadora =)
          </p>
        </div>
        <div className="card-social">
          <a
            href="https://github.com/RosanaRodriguesLopes"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rosana-lopes/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/rosanalope_/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
      <div className="card--container col-md-6 col-lg-4">
        <div className="card-img">
          <img src={FotoEliane} alt="img team" />
        </div>
        <div className="card-title">
          <h4>Eliane SP Silva</h4>
          <p>Estudante Recode PRO 2021</p>
        </div>
        <div className="card-info">
          <p>
            Natural de São Paulo, SP. Mais de Sete anos de experiência na área
            Financeira. Em transição de carreira. Formada em Administração pela
            PUC/SP e apaixonada por Tecnologia.
          </p>
        </div>
        <div className="card-social">
          <a
            href="https://github.com/eliane-sp-silva"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/eliane-dos-santos-pereira-silva-4a772026/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/elianespsilva/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardTeam;
