import React from "react";
// import profilePage from "../profilePage.scss";
import cumpleanios30 from "../assets/icons8-cumpleaños-30.png";
import neov from "../assets/neov.jpeg";
import enlaceExterno from "../assets/icons8-enlace-externo.svg";
import github from "../assets/icons8-github.svg";
import twitter from "../assets/icons8-twitter.svg";

export const ProfilePage = () => {
  return (
    <nav classname="background">
      <section classname="negro"></section>
      <section classname="form">
        <img classname="neo" src={neov} alt="" srcset="" />

        <section>
          <button classname="folow">Follow</button>
        </section>

        <section>
          <h1 classname="name">Nevo David</h1>
          <section classname="contname">
            <p classname="description">
              Growth Manager at Novu - The 1st Open-Source Notification
              Infraestructure | Full Stack Developer | Team Leader
            </p>
          </section>
          <p classname="born">
            <img classname="hb" src={cumpleanios30} alt="" />
            Joined on 22 Feb 2022
          </p>

          <a classname="enlace" href="#">
            {" "}
            <img classname="enlac" src={enlaceExterno} alt="" /> https://novu.co
          </a>

          <a href="#">
            <img classname="git" src={github} alt="" />
          </a>
          <a href="#">
            <img classname="twit" src={twitter} alt="" />
          </a>

          <hr />
          <p classname="work">Work</p>
          <p classname="gow">Grow Manager @ Novu</p>
        </section>
      </section>
    </nav>
  );
};
