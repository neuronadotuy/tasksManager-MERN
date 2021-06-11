/** @format */

import React, { Fragment, useContext } from "react";
import Barra from "../layout/Barra";
import Sidebar from "../layout/Sidebar";
import FormTarea from "../tareas/FormTarea";
import ListadoTareas from "../tareas/ListadoTareas";
import proyectoContext from "../../context/proyectos/proyectoContext";

function Proyectos() {
  // state de proyectos
  const contextProyecto = useContext(proyectoContext);
  const { proyecto } = contextProyecto;

  return (
    <Fragment>
      <Barra />
      <div className="contenedor-app">
        <aside>
          <Sidebar />
        </aside>
        <div className="seccion-principal">
          <main>
            <FormTarea />
            <div className="contenedor-tareas">
              <ListadoTareas />
              {proyecto ? (
                <button className="btn btn-eliminar btn--red">
                  &times; Eliminar Proyecto
                </button>
              ) : null}
            </div>
          </main>
        </div>
      </div>
    </Fragment>
  );
}

export default Proyectos;
