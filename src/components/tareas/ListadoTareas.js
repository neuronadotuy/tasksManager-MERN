/** @format */

import React, { Fragment, useContext, useState } from "react";
import Tarea from "./Tarea";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const ListadoTareas = () => {
  // state de proyectos
  const contextProyecto = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = contextProyecto;

  const contextTarea = useContext(tareaContext);
  const { tareasproyecto, obtenerTareas } = contextTarea;

  const [eliminado, setEliminado] = useState(false);

  // si no hay proyecto seleccionado...
  if (proyecto === null) {
    return (
      <div>
        <h2>Selecciona un Proyecto</h2>
        {eliminado ? <p className="mensaje ok">Proyecto Eliminado</p> : null}
      </div>
    );
  }

  // array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  const onClickEliminar = () => {
    eliminarProyecto(proyectoActual.id);
    setEliminado(true);
    setTimeout(() => {
      setEliminado(false);
    }, 2000);
  };

  const tareasProyecto = [];
  return (
    <Fragment>
      <h2>{proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasproyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas en este Proyecto</p>
          </li>
        ) : (
          tareasproyecto.map((tarea) => {
            return <Tarea tarea={tarea} />;
          })
        )}
      </ul>
      {proyecto ? (
        <button className="btn btn-eliminar btn--red" onClick={onClickEliminar}>
          &times; Eliminar Proyecto
        </button>
      ) : null}
    </Fragment>
  );
};

export default ListadoTareas;
