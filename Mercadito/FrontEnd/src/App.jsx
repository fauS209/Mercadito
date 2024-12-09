import { useEffect } from "react";
import "./css/App.css";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom"; // Cambiado a "react-router-dom"
import Footers from "./components/Footers";

function App() {
  useEffect(() => {
    // Establece isLoggedIn en false si no existe en localStorage
    if (!localStorage.getItem("isLoggedIn")) {
      localStorage.setItem("isLoggedIn", "false");
    }

    document.body.classList.add("body-App");
    return () => {
      document.body.classList.remove("body-App");
    };
  }, []);

  return (
    <>
      <div className="app-container">
        <Navbar />
        <div className="card">
          <div className="card-body">
            <h1 className="card-title1">El Mercadito Tigreño</h1>
            <img
              src="/src/assets/logoMercadito.png"
              alt="logo"
              className="logo-mercadito"
            />
            <div className="card-text">
              <p>
                “Productos frescos y de calidad, apoyando a nuestros productores
                locales para que disfrutes de una compra confiable y
                responsable.”
              </p>
            </div>
          </div>
          <Link to="/Register" className="btn">
            Enter here
          </Link>
        </div>
        <footer>
          <Footers />
        </footer>
      </div>
    </>
  );
}

export default App;
