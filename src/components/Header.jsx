import React from "react";
import "../assets/styles/components/header.scss";
import logoPVideo from "../assets/static/logo-platzi-video-BW2.png";
import usericon from "../assets/static/user-icon.png";

export default function Header() {
  return (
    <div>
      <header className="header">
        <img className="header__img" src={logoPVideo} alt="Platzi Video"></img>
        <div className="header__menu">
          <div className="header__menu--profile">
            <img src={usericon} alt=""></img>
            <p>Perfil</p>
          </div>
          <ul>
            <li>
              <a href="/">Cuenta</a>
            </li>
            <li>
              <a href="/">Cerrar Sesión</a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
