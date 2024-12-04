import { useState } from 'react'
import mesaMadera from './assets/mesa-madera.jpg'
import './routes/css/App.css'
import navbar, { Navbar } from './components/Navbar'
import { Link } from 'react-router'
import Footers from './components/Footers'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="app-container">
        <Navbar />
        {/* <h1 className='titulo'>El Mercadito Tigreño</h1> */}
        <div className="card"  >
          <div className="card-body">
            <h1 className='card-title1'>El Mercadito Tigreño</h1>
            <img src='/src/assets/logoMercadito.png' alt='logo' className='logo-mercadito' />
            {/* <h5 className="card-title">Bienvenido a su mercadito de confianza</h5> */}
            <div className='card-text'>
              <p>“Productos frescos y de calidad, apoyando a nuestros productores locales  para que disfrutes de una compra confiable y responsable.”</p>
            </div>
          </div>
          <Link to={'/Register'} className='btn'> Registrate</Link>
        </div>
        
        
        <Footers/>
      </div>
    </>
  );
}

export default App
