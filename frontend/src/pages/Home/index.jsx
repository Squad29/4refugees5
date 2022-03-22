import React from "react";

import videoHero from "../../assets/video/heroVideo.mp4";
import CardService from "../../components/CardService";
import LogoLarge from "../../assets/img/logoLarge.png";
import Squad29Logo from "../../assets/img/squad29Logo.png";
import RecodeLogo from "../../assets/img/recodeLogo.png";

import "./styles.css";
import CardTeam from "../../components/CardTeam";

function Home() {
  return (
    <main>
      <section id="hero--section">
        <video autoPlay muted loop id="myVideo">
          <source src={videoHero} type="video/mp4" />
        </video>
        <div id="slogan" data-aos="fade-up" data-aos-duration="3000">
          <p>For Refugees</p>
          <p>"Juntos vamos mais longe!"</p>
        </div>
      </section>
      <section id="services--section">
        <h2 className="section--title text-center">SERVIÇOS</h2>
        <CardService />
      </section>
      <section id="about--section">
        <h2 className="section--title text-center">SOBRE</h2>
        <div className="about--container container">
          <div className="about--content" data-aos="fade-right">
            <div className="img-about">
              <img src={LogoLarge} alt="" />
            </div>
            <div className="description">
              <p>
                A 4Refugees nasceu da necessidade de criar uma aplicação que
                impacte verdadeiramente e de forma eficiênte a vida dos
                refugiados em relação ao mercado de trabalho, conectando eles
                com as vagas de emprego Ofertadas por empresas que abraçam a
                causa, acreditamos que juntos podemos ajudar a transformar a
                realidade de muitas pessoas.
              </p>
            </div>
          </div>
          <div className="about--content flex-row-reverse" data-aos="fade-left">
            <div className="img-about">
              <img src={Squad29Logo} alt="" />
            </div>
            <div className="description">
              <p>
                Squad 29 (Refugiados) é composta por 6 integrantes que passaram
                pelo processo seletivo para participarem do Recode Pro, um
                programa que visa a formação e a empregabilidade de pessoas de
                18 a 39 anos, em situação de maior vulnerabilidade social, como
                programadores FULL STACK. Além do conteúdo técnico, são
                desenvolvidos temas como criatividade, comunicação, atuação
                profissional, e a metodologia proposta se baseia na colaboração
                e na construção de projetos para a resolução de problemas
                sociais.
              </p>
            </div>
          </div>
          <div className="about--content" data-aos="fade-right">
            <div className="img-about">
              <img src={RecodeLogo} alt="" />
            </div>
            <div className="description">
              <p>
                Fundada há mais de 26 anos por Rodrigo Baggio e presente em 9
                países, a Recode já atingiu mais de 1.8 milhão de pessoas. A
                Recode oferece metodologia para desenvolver nos jovens
                habilidades digitais e competências socioeconômica, estimula o
                protagonismo e o potencial da nova geração como agentes de
                transformação social, tendo como desafio ampliar oportunidades
                de pessoas em situação de vulnerabilidade social por meio do uso
                qualificado e consciente da tecnologia.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="team--section" className="mb-5">
        <h2 className="section--title text-center">COLABORADORES</h2>
        <div className="team--container container">
          <CardTeam />
        </div>
      </section>
    </main>
  );
}

export default Home;
