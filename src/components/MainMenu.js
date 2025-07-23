import React from "react";
import './MainMenu.css';

function MainMenu() {
  return (
    <div className="menu">
      <h1 className="logo">EQTrack</h1>
      <button className="btn">Registrar Operación</button>
      <button className="btn">Historial</button>
      <button className="btn">Estadísticas</button>
      <button className="btn">Importar Archivo</button>
      <button className="btn">Ajustes</button>
    </div>
  );
}

export default MainMenu;
