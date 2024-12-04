import React, { useState, useEffect } from "react";
import "./css/Dashbord.css";
import axios from "axios";
import Navbar from "../components/Navbar";

<<<<<<< HEAD
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const PostCard = ({ post }) => (
  <div className="post">
    {post.postsImgData && (
      <img
        src={`data:${post.postsImgType};base64,${post.postsImgData}`}
        alt={post.title}
      />
    )}
    {post.title && <h2>{post.title}</h2>}
    {post.description && <p>{post.description}</p>}
    {post.telNumber && (
      <p>
        <strong>Teléfono:</strong> {post.telNumber}
      </p>
    )}
    {post.date && (
      <p>
        <strong>Fecha:</strong> {formatDate(post.date)}
      </p>
    )}
    {post.telNumber && (
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
    )}
  </div>
);

=======
>>>>>>> 2b2c93b1ebbc574205a3c7143132e58286307216
const Dashbord = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/mercadito/posts/all"
        );
        setPosts(response.data);
      } catch (err) {
<<<<<<< HEAD
        if (err.response) {
          setError(
            `Error ${err.response.status}: ${
              err.response.data.message || "Hubo un problema al cargar los datos"
            }`
          );
        } else {
          setError("Error de conexión. Por favor, verifica tu red.");
        }
=======
        setError("Error al cargar los posts. Por favor, intenta de nuevo.");
        console.error(err);
>>>>>>> 2b2c93b1ebbc574205a3c7143132e58286307216
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Cargando posts...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
<<<<<<< HEAD
      <Navbar />
      <h1>El Mercadito Tigreño</h1>
      <div className="posts-container">
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
=======
      <Navbar/>
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
>>>>>>> 2b2c93b1ebbc574205a3c7143132e58286307216
        ))}
      </div>
    </div>
  );
};

export default Dashbord;
