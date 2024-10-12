import React from "react";

export function getAllProductos(buscar){
    //let id='BRAND';
    //un fetch devuelve un json
    return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${buscar}`).then(res=>res.json());

}
