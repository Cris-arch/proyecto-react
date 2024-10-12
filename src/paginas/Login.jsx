import React from "react";
import '../css/Login.css';

function Login(){
    return(
        <div>
            <main>
                 <h2 style={{'font-size':'50px',  'text-transform': 'uppercase'}}>LOGIN</h2>
                <form>
                     <input type="text" placeholder="Usuario" name='usuario' required/>
                     <input type="password" placeholder="Contraseña" name="contrasenia" required/>
                     <input id="enviar" type="submit" value="Enviar"/>
                </form>
            </main>
        </div>

    );
}
export default Login;