import React, { Component } from "react";
import Slider from "react-slick";

import AdvogadoIcon from "../../assets/img/advogadoIcon.png";
import ArtesaoIcon from "../../assets/img/artesaoIcon.png";
import ProfessorIcon from "../../assets/img/professorIcon.png";
import ProgramadorIcon from "../../assets/img/programadorIcon.png";
import TradutorIcon from "../../assets/img/tradutorIcon.png";

import "./styles.css";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div id="slick-content">
        <Slider {...settings}>
          <div className="card--service d-flex align-items-center flex-column">
            <img src={AdvogadoIcon} alt="" />
            <h3 className="text-center mt-3">Advogado</h3>
          </div>
          <div className="card--service d-flex align-items-center flex-column">
            <img src={ArtesaoIcon} alt="" />
            <h3 className="text-center mt-3 title-artesao">Artesão</h3>
          </div>
          <div className="card--service d-flex align-items-center flex-column">
            <img src={ProgramadorIcon} alt="" />
            <h3 className="text-center mt-3">Programador</h3>
          </div>
          <div className="card--service d-flex align-items-center flex-column">
            <img src={ProfessorIcon} alt="" />
            <h3 className="text-center mt-3">Professor</h3>
          </div>
          <div className="card--service d-flex align-items-center flex-column">
            <img src={TradutorIcon} alt="" />
            <h3 className="text-center mt-3">Tradutor</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
