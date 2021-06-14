/** @format */

import React, { useReducer } from "react";
import tareaContext from "./tareaContext";
import tareaReducer from "./tareaReducer";
import { TAREAS_PROYECTO, AGREGAR_TAREA } from "../../types/index";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { nombre: "Elegir Plataforma", estado: true, proyectoID: 1 },
      { nombre: "Elegir Colores", estado: false, proyectoID: 3 },
      { nombre: "Elegir Plataforma de Pago", estado: false, proyectoID: 2 },
      { nombre: "Cambiar de Plan de Hosting", estado: true, proyectoID: 3 },
      { nombre: "Corroborar el Servidor", estado: true, proyectoID: 1 },
      {
        nombre: "Seleccionar los colores institucionales",
        estado: false,
        proyectoID: 3,
      },
      { nombre: "Confirmar Paypal", estado: false, proyectoID: 2 },
      {
        nombre: "Gestionar MercadoPago para pasarela de pago",
        estado: true,
        proyectoID: 1,
      },
      { nombre: "Elegir Plataforma", estado: true, proyectoID: 4 },
      { nombre: "Elegir Colores", estado: false, proyectoID: 3 },
      { nombre: "Elegir Plataforma de Pago", estado: false, proyectoID: 3 },
      { nombre: "Cambiar de Plan de Hosting", estado: true, proyectoID: 2 },
      { nombre: "Corroborar el Servidor", estado: true, proyectoID: 1 },
      {
        nombre: "Seleccionar los colores institucionales",
        estado: false,
        proyectoID: 4,
      },
      { nombre: "Confirmar Paypal", estado: false, proyectoID: 1 },
      {
        nombre: "Gestionar MercadoPago para pasarela de pago",
        estado: true,
        proyectoID: 2,
      },
    ],
    tareasproyecto: null,
  };

  // crear dispatch y state
  const [state, dispatch] = useReducer(tareaReducer, initialState);

  // obtener las tareas de un proyecto
  const obtenerTareas = (proyectoID) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoID,
    });
  };

  // agregar tarea al proyecto seleccionado
  const agregarTarea = (tarea) => {
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };

  return (
    <tareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        obtenerTareas,
        agregarTarea,
      }}>
      {props.children}
    </tareaContext.Provider>
  );
};

export default TareaState;
