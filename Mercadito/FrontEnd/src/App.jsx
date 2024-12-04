import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import mesaMadera from './assets/mesa-madera.jpg'
import './App.css'
import navbar, { Navbar } from './components/Navbar'
import { Link } from 'react-router'
import Footers from './components/Footers'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="app-container">
        <Navbar />
        <h1>El Mercadito Tigreño</h1>
        <div class="card"  >
          <div class="card-body">
            <h5 class="card-title">Bienvenido a su mercadito de confianza</h5>
            
            <img src='/logoMercadito.png' alt='logo' className='logo-mercadito' />
            <div className='card-text'>
              <p class="card-text">“Productos frescos y de calidad, apoyando a nuestros productores locales para que disfrutes de una compra confiable y responsable.”</p>
            </div>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
          </div>
          <Link to={'/Register'} className='btn'> Registrate</Link>
        </div>
        {/* <div className='botoncito'>
        <Link to={'/Register'} className='btn'> Click</Link>
        </div> */}
        {/* <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2024 El Mercadito Tigreño. Todos los derechos reservados.</p>
            <p>Contacto: <a href="mailto:info@mercaditotigreño.com">info@mercaditotigreño.com</a></p>
            <div className="footer-links">
              <Link to="/about" className="footer-link">Acerca de</Link>
              <Link to="/privacy" className="footer-link">Política de Privacidad</Link>
              <Link to="/terms" className="footer-link">Términos de Servicio</Link>
            </div>
          </div>
        </footer> */}
        
        <Footers/>
      </div>
    </>
  );
}

export default App
