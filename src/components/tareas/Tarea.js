/** @format */

import React, { useState } from "react";

const Tarea = ({ tarea }) => {
  const [isComplete, setIsComplete] = useState(tarea.estado);

  const handleClick = () => {
    setIsComplete(!isComplete);
  };
  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>

      <div className="estado">
        <button
          className={isComplete ? "completo" : "incompleto"}
          onClick={handleClick}>
          {isComplete ? "Completo" : "Incompleto"}
        </button>
      </div>
      <div className="acciones">
        <button className="btn btn-primario">Editar</button>
        <button className="btn btn-secundario btn--red">
          &times; Eliminar
        </button>
      </div>
    </li>
  );
};

export default Tarea;
