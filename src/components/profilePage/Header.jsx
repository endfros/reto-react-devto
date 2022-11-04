import React from "react";
import "./Header.scss";
import cumpleanios30 from "../../assets/icons8-cumpleaños-30.png";
import profilePicture from "../../assets/neov.jpeg";
export const Header = (props) => {
  const { name, bio } = props;
  return (
    <section className="header">
      <section className="banner"></section>
      <img className="profilePicture" src={profilePicture} alt="" />
      <section>
        <div className="bio">
          <div className="btnDiv">
            <button className="btn__follow">Edit profile</button>
          </div>
          <section className="bio-body">
            <h1 className="name">{name}</h1>
            <div className="description">
              <p>{bio}</p>
            </div>
            <div className="moreInfo">
              <span className="info">
                <img className="logo" src={cumpleanios30} alt="" />
                <span className="joined"> Joined on 22 Feb 2022</span>
              </span>
            </div>
          </section>
        </div>
      </section>
    </section>
  );
};
