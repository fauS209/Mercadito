import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import mesaMadera from './assets/mesa-madera.jpg'
import logoMercadito from './assets/logoMercadito.png';
import './App.css'
import navbar, { Navbar } from './components/Navbar'
import { Link } from 'react-router'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="app-container">
        <Navbar />
        <h1>El Mercadito Tigreño</h1>
        <div className="card"  >
          <div className="card-body">
            <h5 className="card-title">Bienvenido a su mercadito de confianza</h5>
            <div className='loguito'>
              <img src= "/logoMercadito.png" alt="loguito"  className='card-image'/>
            </div>
            <div className='card-text'>
              <p>“Productos frescos y de calidad, apoyando a nuestros productores locales para que disfrutes de una compra confiable y responsable.”</p>
            </div>
            <Link to={'/Register'} className="btn">Registrate</Link> 
          </div>
          {/* <Link to={'/Register'} className='btn'> Registrate</Link> */}
        </div>

      </div>
    </>
  );
}

export default App
