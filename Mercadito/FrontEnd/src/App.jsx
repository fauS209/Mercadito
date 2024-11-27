import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import navbar, { Navbar } from './components/Navbar'
import { Link } from 'react-router'

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <h1>App</h1>
    <Link to={'/Dashbord'} className='btn'> click</Link>
    </>
  );
}

export default App
