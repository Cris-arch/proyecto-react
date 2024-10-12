import React from "react";
import '../css/Registro.css';

function Registro(){
    return(
      <>
      <div>
          <main>
        <h2 style={{'font-size': '50px', 'text-transform': 'uppercase'}}>Registro</h2>
        <form action="" method="GET">
            <input type="text" placeholder="Escribir Nombre" name="nombre" required />
            <input type="text" placeholder="Escribir Apellido" name="apellido" required />
            <input type="text" placeholder="Escribir Email" name="email" required />
            <input type="password" placeholder="Escribir Contraseña" name="contrasenia" required />
            <input type="password" placeholder="Confirmar Contraseña" name="contrasenia" required />
            <input id='enviar' type="submit" value="Enviar" />
        </form>
    </main>
      </div>
      </>

    );
}

export default Registro;