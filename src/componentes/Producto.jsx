import React, { useState } from "react";
import '../css/Producto.css'
function Producto({id,imagen,nombre,precio}){
    
    const [comprar,setComprar]=useState("");
    
    const handleComprar=(e)=>{
        setComprar("Compró el producto!!");
       
    }
   
    return(
            <div className='container_producto'>
                <div className="imagen">
                     <img src={imagen} alt="Imágen Producto" />
                </div>
                <div className='nombre'>
                    <h2>{nombre}</h2>
                </div>  
                <div className="precio">
                    <h3>USD${precio}</h3>

                </div> 
                <div class='mensaje'>{comprar}</div>
                <div className="boton" id='boton'>
                    <button onClick={handleComprar}>Comprar</button>
                </div>
                   
            </div>
      
    );
}
export default Producto;