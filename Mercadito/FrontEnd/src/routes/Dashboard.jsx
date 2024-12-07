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
  const navigate = useNavigate();

  useEffect(() => {
    // Validación de autenticación
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn !== "true") {
      navigate("/Error"); // Redirige si no está autenticado
      return;
    }

    // Fetch de posts si está autenticado
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/mercadito/posts/all"
        );
        setPosts(response.data);
      } catch (err) {
        setError("Error al cargar los posts. Por favor, intenta de nuevo.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [navigate]);

  if (loading) return <p>Cargando posts...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Navbar />
      <h1>El Mercadito Trigreño</h1>
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
