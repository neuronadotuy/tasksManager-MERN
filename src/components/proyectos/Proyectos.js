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
  const { proyecto, eliminarProyecto } = contextProyecto;

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
            </div>
          </main>
        </div>
      </div>
    </Fragment>
  );
}

export default Proyectos;
