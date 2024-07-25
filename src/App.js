import './App.css';
import Testimonio from './componentes/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contenedorPrincipal'>
        <h1>
            Esto es lo que dicen nuestros alumnos sobre Freecodecamp.
        </h1>
        <Testimonio 
          nombre = 'Shawn Wang'
          pais = 'Singapur'
          imagen = 'testimonio1'
          cargo = 'Ingeniero de software'
          empresa = 'Amazon'
          testimonio = 'Cambiar de profesión da miedo. Solo gané confianza en que podía codificar trabajando a través de los cientos de horas gratuitas de freecodecamp. En un años tenía un trabajo de 6 cifras como Ingeniero de Software. Freecodecamp cambió mi vida.' />
        <Testimonio 
          nombre = 'Sarah Chima'
          pais = 'Nigeria'
          imagen = 'testimonio2'
          cargo = 'Ingeniera de software'
          empresa = 'ChatDesk'
          testimonio = 'freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble.'/>
        <Testimonio 
          nombre = 'Emma Bostian'
          pais = 'Suecia'
          imagen = 'testimonio3'
          cargo = 'Ingeniera de software'
          empresa = 'Spotify'
          testimonio = 'Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.'/>
      </div>
        
    </div>
  );
}

export default App;
