import React from "react";
import mercadoLibreImg from '../imagenes/mercado_libre.webp';
import '../css/Home.css';
import Productos from "../componentes/Productos";



function Home(){
    return(
        <div className="Container-App">
            <img src={mercadoLibreImg} className='App-logo' alt='Cartel de MercadoLibre'/>
            <h1>Productos</h1>
            <div className="section">
                 <Productos/>
            </div>
        </div>
    );
}

export default Home;