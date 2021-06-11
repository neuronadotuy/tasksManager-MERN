/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";

function NuevaCuenta() {
  const [usuario, setUsuario] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmar: "",
  });

  const { nombre, email, password, confirmar } = usuario;

  // pasar los valores de los campos al state
  const onChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  // login del usuario al dar submit en el form
  const onSubmit = (e) => {
    e.preventDefault();

    // validar campos vacíos

    // password 6+ caracteres

    // password iguales

    // pasar al action
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Crear Cuenta</h1>

        <form action="" onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={nombre}
              placeholder="Tu Nombre"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Tu Email"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Tu Password"
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Repetir Password</label>
            <input
              type="password"
              id="password"
              name="confirmar"
              value={confirmar}
              placeholder="Repite tu Password"
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesión"
            />
          </div>
        </form>
        <p className="enlace-login">
          Ya tienes una cuenta?
          <Link to="/" className="enlace-cuenta">
            Inicia Sesión
          </Link>
        </p>
      </div>
    </div>
  );
}

export default NuevaCuenta;
