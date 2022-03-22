import React from "react";
import videoHero from "../../assets/video/heroVideo.mp4";

import './styles.css'

function Home() {
  return (
    <main>
      <section id="hero--section">
        <video autoPlay muted loop id="myVideo">
          <source src={videoHero} type="video/mp4" />
        </video>
        <div id="slogan" data-aos="fade-up" data-aos-duration="3000">
          <p>
            For Refugees
          </p>
          <p>
            "Juntos vamos mais longe!"
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;
