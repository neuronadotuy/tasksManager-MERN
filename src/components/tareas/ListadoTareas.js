/** @format */

import React, { Fragment, useContext } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoTareas = () => {
  // state de proyectos
  const contextProyecto = useContext(proyectoContext);
  const { proyecto } = contextProyecto;

  // si no hay proyecto seleccionado...
  if (proyecto === null) {
    return <h2>Selecciona un Proyecto</h2>;
  }

  // array destructuring para extrae rle proyecto actual
  const [proyectoActual] = proyecto;

  const tareasProyecto = [
    { nombre: "Elegir Plataforma", estado: true },
    { nombre: "Elegir Colores", estado: false },
    { nombre: "Elegir Plataforma de Pago", estado: false },
    { nombre: "Elegir Hosting", estado: true },
  ];
  return (
    <Fragment>
      <h2>{proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas en este Proyecto</p>
          </li>
        ) : (
          tareasProyecto.map((tarea) => {
            return <Tarea tarea={tarea} />;
          })
        )}
      </ul>
    </Fragment>
  );
};

export default ListadoTareas;
