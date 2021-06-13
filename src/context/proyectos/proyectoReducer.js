/** @format */
import {
  AGREGAR_PROYECTO,
  OBTENER_PROYECTOS,
  FORMULARIO_PROYECTO,
  VALIDAR_FORMULARIO,
  PROYECTO_ACTUAL,
  ELIMINAR_PROYECTO,
} from "../../types/index";

export default (state, action) => {
  switch (action.type) {
    case FORMULARIO_PROYECTO:
      return {
        ...state,
        formulario: !state.formulario,
        errorformulario: false,
      };

    case OBTENER_PROYECTOS:
      return {
        ...state,
        proyectos: action.payload,
      };

    case AGREGAR_PROYECTO:
      return {
        ...state,
        proyectos: [...state.proyectos, action.payload],
        formulario: false,
        errorformulario: false,
      };

    case VALIDAR_FORMULARIO:
      return {
        ...state,
        errorformulario: true,
      };

    case PROYECTO_ACTUAL:
      return {
        ...state,
        proyecto: state.proyectos.filter((proyecto) => {
          return proyecto.id === action.payload;
        }),
      };

    case ELIMINAR_PROYECTO:
      return {
        ...state,
        proyectos: state.proyectos.filter((proyecto) => {
          return proyecto.id !== action.payload;
        }),
        proyecto: null,
      };

    default:
      return state;
  }
};
