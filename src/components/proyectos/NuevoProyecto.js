/** @format */

import React, { Fragment, useContext, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {
  const contextProyecto = useContext(proyectoContext);
  const {
    formulario,
    mostrarFormulario,
    errorformulario,
    agregarProyecto,
    mostrarError,
  } = contextProyecto;

  // proyecto state
  const [proyecto, setProyecto] = useState({
    nombre: "",
  });

  const { nombre } = proyecto;

  // pasar el input nombre al state
  const onChange = (e) => {
    e.preventDefault();
    setProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  // envia el formulario
  const onSubmit = (e) => {
    e.preventDefault();
    // validar proyecto
    if (nombre.trim() === "") {
      mostrarError();
      return;
    }
    // agregar al state
    agregarProyecto(proyecto);
    // reset del form
    setProyecto({
      nombre: "",
    });
  };
  return (
    <Fragment>
      <button
        className={
          formulario
            ? "btn btn-primario btn-block btn-red"
            : "btn btn-primario btn-block"
        }
        onClick={mostrarFormulario}>
        {formulario ? "Cerrar" : "Nuevo Proyecto"}
      </button>
      {formulario ? (
        <form
          action=""
          className="formulario-nuevo-proyecto"
          onSubmit={onSubmit}>
          <input
            type="text"
            className="input-text"
            placeholder="Nombre del Proyecto"
            name="nombre"
            value={nombre}
            onChange={onChange}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          />
        </form>
      ) : null}

      {errorformulario ? (
        <p className="mensaje error">El nombre del Proyecto es obligatorio</p>
      ) : null}
    </Fragment>
  );
};

export default NuevoProyecto;
