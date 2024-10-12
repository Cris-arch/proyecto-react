import React from 'react';
import '../css/BarraNav.css'
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function BarraNav(){
    return(
        <div>
           <nav>
            <ul>
                <Nav.Link  as={Link} to='/' className='li'>Home</Nav.Link>
                <Nav.Link as={Link} to='/registro' className='li'>Registro</Nav.Link>
                <Nav.Link as={Link} to='/login' className='li'>Login</Nav.Link>


               
            </ul>
        </nav>
        </div>
    );
}
export default BarraNav;