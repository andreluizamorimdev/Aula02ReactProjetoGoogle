import "../styles/Button.css";


import React from "react";
let name1 = "Pesquisa Google";
let name2 = "Estou com Sorte";
function Button() {
    return (
      <div>
        <button className="Btn">{name1}</button>
        <button className="Btn">{name2}</button>
      </div>
    );
  }
  
  export default Button;