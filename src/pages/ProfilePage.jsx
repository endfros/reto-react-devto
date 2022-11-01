import React from "react";
import "./profilePage.scss";
import cumpleanios30 from "../assets/icons8-cumpleaños-30.png";
import neov from "../assets/neov.jpeg";
import enlaceExterno from "../assets/icons8-enlace-externo.svg";
import github from "../assets/icons8-github.svg";
import twitter from "../assets/icons8-twitter.svg";
import { DefaultLayout } from "../layout/DefaultLayout";

export const ProfilePage = () => {
  return (
    <DefaultLayout>
      <nav className="background">
        <section className="negro"></section>
        <section className="form">
          <img className="neo" src={neov} alt="" />

          <section>
            <button className="folow">Follow</button>
          </section>

          <section>
            <h1 className="name">Nevo David</h1>
            <section className="contname">
              <p className="description">
                Growth Manager at Novu - The 1st Open-Source Notification
                Infraestructure | Full Stack Developer | Team Leader
              </p>
            </section>
            <p className="born">
              <img className="hb" src={cumpleanios30} alt="" />
              Joined on 22 Feb 2022
            </p>

            <a className="enlace" href="#">
              {" "}
              <img className="enlac" src={enlaceExterno} alt="" />{" "}
              https://novu.co
            </a>

            <a href="#">
              <img className="git" src={github} alt="" />
            </a>
            <a href="#">
              <img className="twit" src={twitter} alt="" />
            </a>

            <hr />
            <p className="work">Work</p>
            <p className="gow">Grow Manager @ Novu</p>
          </section>
        </section>
      </nav>
    </DefaultLayout>
  );
};
