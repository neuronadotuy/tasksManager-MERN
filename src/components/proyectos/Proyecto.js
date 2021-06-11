/** @format */

import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const Proyecto = ({ proyecto }) => {
  const contextProyecto = useContext(proyectoContext);
  const { proyectoActual } = contextProyecto;

  return (
    <li>
      <button
        className="btn btn-blank"
        onClick={() => {
          proyectoActual(proyecto.id);
        }}>
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
