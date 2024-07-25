import React from 'react';

function Testimonio () {
    return (
        <div className = 'contenedorTestimonio'>
            <aside>
                <img className = 'imagenTestimonio'
                     src = {require('../imagenes/testimonio1.jpeg')}
                     alt = 'Foto George'/>
            </aside>
            <section className='contenedorTextoTestimonio'>
                <p className='nombreTestimonio'>Shawn Wang en Singapur</p>
                <p className='cargoTestimonio'>Ingeniero de Software en Amazon</p>
                <p className='textoTestimonio'>Cambiar de profesión da miedo. Sólo gané confianza en que podía codificar trabajando a 
                    través de los cientos de horas de lecciones gratuitas en freeCodeCamp. En un año tenía un trabajo de seis cifras 
                    como Ingeniero de Software. freeCodeCamp cambió mi vida.</p>
            </section>
        </div>
    );
}

export default Testimonio;