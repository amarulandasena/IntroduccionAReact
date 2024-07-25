import React from 'react';
import '../css/Testimonio.css';

function Testimonio (props) {
    return (
        <div className = 'contenedorTestimonio'>
            <aside>
                <img className = 'imagenTestimonio'
                     src = {require(`../imagenes/${props.imagen}.jpeg`)}
                     alt = 'Foto George'/>
            </aside>
            <section className='contenedorTextoTestimonio'>
                <p className='nombreTestimonio'>
                    <strong>{props.nombre}</strong> en {props.pais}
                </p>
                <p className='cargoTestimonio'>
                    {props.cargo} en <strong>{props.empresa}</strong>
                </p>
                <p className='textoTestimonio'>"{props.testimonio}"</p>
            </section>
        </div>
    );
}

export default Testimonio;