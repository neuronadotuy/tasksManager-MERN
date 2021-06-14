/** @format */

import React, { Fragment, useContext, useState } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";
import tareaContext from "../../context/tareas/tareaContext";

const FormTarea = () => {
  // state de proyectos
  const contextProyecto = useContext(proyectoContext);
  const { proyecto } = contextProyecto;

  const contextTarea = useContext(tareaContext);
  const { agregarTarea } = contextTarea;

  // state de formulario
  const [tarea, setTarea] = useState({
    nombre: "",
  });

  const [error, setError] = useState(false);

  // Array destructuring para extraer el proyecto actual
  // const [proyectoActual] = proyecto;

  // extraer el nombre del proyecto
  const { nombre } = tarea;

  const handleChange = (e) => {
    setTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
    if (e.target.value.length > 0) {
      setError(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // validar
    if (nombre.trim() === "") {
      setError(true);
      return;
    }
    // pasar validacion
    setError(false);

    // agregar nueva tarea al state de tareas
    tarea.proyectoID = proyecto.id;
    tarea.estado = false;
    agregarTarea(tarea);

    // reset del form
  };

  return (
    <Fragment>
      {proyecto ? (
        <div className="formulario">
          <form action="" onSubmit={onSubmit}>
            <div className="contenedor-input">
              <input
                type="text"
                className={error ? "input-text input-text-error" : "input-text"}
                placeholder="Nombre de la tarea..."
                name="nombre"
                value={nombre}
                onChange={handleChange}
              />
            </div>
            {/* {error ? <p>El nombre de la Tarea es obligatorio</p> : null} */}
            <div className="contenedor-input">
              <input
                type="submit"
                value="Agregar Tarea"
                className="btn btn-primario btn-block"
              />
            </div>
          </form>
        </div>
      ) : null}
    </Fragment>
  );
};

export default FormTarea;
