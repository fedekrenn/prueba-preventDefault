import React from "react";
import "./style.css";

export default function App() {

  const teclasNoValidas = [65, 69, 73, 79, 85]

  const verificacionTeclas = (e) => {
    teclasNoValidas.some(item => item == e.keyCode) && e.preventDefault()
  }


  return (
    <div>
      <input type="text" onKeyDown={verificacionTeclas}></input>
    </div>
  );
}
