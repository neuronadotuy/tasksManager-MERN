/** @format */

import React, { Fragment, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const FormTarea = () => {
  // state de proyectos
  const contextProyecto = useContext(proyectoContext);
  const { proyecto } = contextProyecto;

  return (
    <Fragment>
      {proyecto ? (
        <div className="formulario">
          <form action="">
            <div className="contenedor-input">
              <input
                type="text"
                className="input-text"
                placeholder="Nombre de la tarea..."
                name="nombre"
              />
            </div>
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
