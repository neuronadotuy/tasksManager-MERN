/** @format */

import React from "react";
import { TAREAS_PROYECTO, AGREGAR_TAREA } from "../../types/index";

export default (state, action) => {
  switch (action.type) {
    case TAREAS_PROYECTO:
      return {
        ...state,
        tareasproyecto: state.tareas.filter((tarea) => {
          return tarea.proyectoID === action.payload;
        }),
      };

    case AGREGAR_TAREA:
      return {
        ...state,
        tareas: [...state.tareas, action.payload],
      };
    default:
      return state;
  }
};
