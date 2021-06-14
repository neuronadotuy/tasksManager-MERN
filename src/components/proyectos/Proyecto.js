/** @format */

import React, { useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const Proyecto = ({ proyecto }) => {
  const contextProyecto = useContext(proyectoContext);
  const { proyectoActual } = contextProyecto;

  const contextTarea = useContext(tareaContext);
  const { obtenerTareas } = contextTarea;

  // seleccionar un proyecto
  const seleccionarProyecto = (id) => {
    proyectoActual(id); // fijar (abrir) un proyecto
    obtenerTareas(id); // filtrar las tareas del proyecto fijado
  };

  return (
    <li>
      <button
        className="btn btn-blank"
        onClick={() => {
          seleccionarProyecto(proyecto.id);
        }}>
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
