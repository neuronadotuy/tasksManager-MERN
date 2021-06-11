/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [usuario, setUsuario] = useState({
    email: "",
    password: "",
  });

  const { email, password } = usuario;

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

    // pasar al action
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesión</h1>

        <form action="" onSubmit={onSubmit}>
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
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesión"
            />
          </div>
        </form>
        <p className="enlace-login">
          Aun no tienes una cuenta?
          <Link to="/nueva-cuenta" className="enlace-cuenta">
            Crea una Cuenta
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
