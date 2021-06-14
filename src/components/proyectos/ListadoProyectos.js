/** @format */

import React, { useContext, useEffect } from "react";
import Proyecto from "./Proyecto";
import proyectoContext from "../../context/proyectos/proyectoContext";

const ListadoProyectos = () => {
  // state de proyectos
  const contextProyecto = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = contextProyecto;

  useEffect(() => {
    obtenerProyectos();
  }, []);

  // revisar si hay o no proyectos, en caso de que no existan, retorna null
  if (proyectos.length === 0) {
    return (
      <div>
        <p>¯\_(ツ)_/¯</p>
        <p>Parece que no tienes proyectos aun... comienza creando uno!</p>
      </div>
    );
  }

  return (
    <ul className="listado-proyectos">
      {proyectos.map((proyecto) => {
        return <Proyecto proyecto={proyecto} key={proyecto.id} />;
      })}
    </ul>
  );
};

export default ListadoProyectos;
