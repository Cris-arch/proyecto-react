import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "../paginas/Home";
import Login from "../paginas/Login";
import Registro from "../paginas/Registro";
function Rutas(){
    return(
        <div>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>}/>
                <Route path='/registro' element={<Registro/>}/>
            </Routes>

        </div>
    );
}

export default Rutas;