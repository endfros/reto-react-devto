import React from "react";
// import profilePage from "../profilePage.scss";
import cumpleanios30 from "../assets/icons8-cumpleaños-30.png";
import neov from "../assets/neov.jpeg";
import enlaceExterno from "../assets/icons8-enlace-externo.svg";
import github from "../assets/icons8-github.svg";
import twitter from "../assets/icons8-twitter.svg";

export const ProfilePage = () => {
  return (
    <nav class="background">
      <section class="negro"></section>
      <section class="form">
        <img class="neo" src={neov} alt="" srcset="" />

        <section>
          <button class="folow">Follow</button>
        </section>

        <section>
          <h1 class="name">Nevo David</h1>
          <section class="contname">
            <p class="description">
              Growth Manager at Novu - The 1st Open-Source Notification
              Infraestructure | Full Stack Developer | Team Leader
            </p>
          </section>
          <p class="born">
            <img class="hb" src={cumpleanios30} alt="" />
            Joined on 22 Feb 2022
          </p>

          <a class="enlace" href="">
            {" "}
            <img class="enlac" src={enlaceExterno} alt="" /> https://novu.co
          </a>

          <a href="">
            <img class="git" src={github} alt="" />
          </a>
          <a href="">
            <img class="twit" src={twitter} alt="" />
          </a>

          <hr />
          <p class="work">Work</p>
          <p class="gow">Grow Manager @ Novu</p>
        </section>
      </section>
    </nav>
  );
};
