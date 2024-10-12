import React, { useEffect, useState } from "react";
import {getAllProductos} from "../servicios/ProductoServicio";
import Producto from "./Producto";
import '../css/Productos.css';

function Productos(){
    const [loading,setLoading]=useState(true);
    const [productos,setProductos]=useState();
    const [buscar,setBuscar]=useState('iPhone');
    //useefect lo utilizan por ejemplo en llamar a una api
    useEffect(()=>{
        const request=async()=>{
            try{
                const response=await getAllProductos(buscar);
                //const response=await res.json()
                console.log("Response desde Productos:",response.results);
                setProductos(response.results);
                setLoading(false);

            }catch(e){
                console.log(e);
            }
        };
        request();
    },[buscar]);

    const handleChange=(event)=>{
        const value=event.target.value;
        console.log(value);
        setBuscar(value);
    }

    if(loading){
        return(
            <div class='loading'>Cargando..</div>
        )
    }else{

   
     return(
        <>
            <div id='buscador'>
                <input type='text' 
                name='buscar' 
                value={buscar} 
                onChange={handleChange} 
                placeholder="Buscar"/>
            </div>
            {productos.slice(0,40).map((producto)=>
             <Producto
                id={producto.id}
                imagen={producto.thumbnail}
                nombre={producto.title}
                precio={producto.price}
                
              />     
            )}
        </>
    );
}
}
export default Productos;