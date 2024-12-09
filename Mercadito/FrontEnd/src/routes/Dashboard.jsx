import React, { useState, useEffect } from "react";
import "../css/Dashbord.css";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footers from "../components/Footers";
import { useNavigate } from "react-router-dom";

const Dashbord = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda
  const navigate = useNavigate();

  // Función para obtener los posts
  const fetchPosts = async (filter = "") => {
    try {
      const url = filter
        ? `http://localhost:8080/api/v1/mercadito/posts/filter/${filter}`
        : "http://localhost:8080/api/v1/mercadito/posts/all"; // URL de filtrado o todos los posts
      const response = await axios.get(url);
      setPosts(response.data);
    } catch (err) {
      setError("Error al cargar los posts. Por favor, intenta de nuevo.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Validación de autenticación
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      navigate("/Error"); // Redirige si no está autenticado
      return;
    }

    fetchPosts(); // Obtiene todos los posts al inicio
  }, [navigate]);

  // Función que maneja el envío del formulario de búsqueda
  const handleFilterSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Activar el estado de carga
    const filter = searchTerm.trim(); // Asegúrate de eliminar espacios en blanco
    fetchPosts(filter); // Filtra los posts según el nombre del producto
  };

  if (loading) return <p>Cargando posts...</p>;
  if (error) return <div> <h2> Producto no encontrado </h2>  </div>;

  return (
    <div>
      <Navbar />
      <h1>El Mercadito Trigreño</h1>
      
      {/* Formulario de filtro */}
      <form onSubmit={handleFilterSubmit} className="filter-form">
        <input
          type="text"
          placeholder="Search by product name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Actualiza el estado con el valor ingresado
        />
        <button type="submit">Filtrar</button>
      </form>

      <div className="posts-container">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            {post.postsImgData && (
              <img
                src={`data:${post.postsImgType};base64,${post.postsImgData}`}
                alt={post.title}
              />
            )}
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <p>
              <strong>Teléfono:</strong> {post.telNumber}
            </p>
            <p>
              <strong>Fecha:</strong> {post.date}
            </p>
            <a
              href={`https://wa.me/${post.telNumber}`}
              className="whatsapp-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
              />
              Contáctanos
            </a>
          </div>
        ))}
      </div>
      <footer className="footerDash">
        <Footers />
      </footer>
    </div>
  );
};

export default Dashbord;
