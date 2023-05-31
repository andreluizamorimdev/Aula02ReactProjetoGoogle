import "../styles/Header.css";
import apps from "../images/apps.png";
import signInLogo from "../images/signIn.png";

import React from "react";

function Header() {
  return (
    <div className="Header">
      <ul className="Menu">
        <li>
            <a href="https://mail.google.com">Gmail</a>
        </li>
        <li>
            <a href="https://www.google.com.br/imghp?hl=pt-BR&ogbl">Imagens</a>
        </li>
        <li>
            <img className="Menu-icon" src={apps} alt="menu" />
        </li>
        <li>
            <img className="Menu-icon" src={signInLogo} alt="profile" />
        </li>
      </ul>

    </div>
  );
}

export default Header;
