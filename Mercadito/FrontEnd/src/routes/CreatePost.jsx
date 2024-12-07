import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/CreatePost.css";
import Navbar from "../components/Navbar";
import Footers from "../components/Footers";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    telNumber: "",
  });
  const [file, setFile] = useState(null);
  const [userId, setUserId] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserId = localStorage.getItem("userId");
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    
    if (!storedUserId || isLoggedIn !== "true") {
      navigate("/Error"); // Redirige si no está autenticado
    } else {
      setUserId(storedUserId);
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[0-9]{8,10}$/; // Número de 8 a 10 dígitos
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      setErrorMessage("Por favor, selecciona un archivo.");
      return;
    }

    if (!validatePhoneNumber(formData.telNumber)) {
      setErrorMessage("Número de teléfono no válido. Debe tener entre 8 y 10 dígitos.");
      return;
    }

    try {
      const data = new FormData();
      data.append("file", file);
      data.append(
        "postDto",
        JSON.stringify({ ...formData, userId })
      );

      const response = await axios.post(
        "http://localhost:8080/api/v1/mercadito/posts/create",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setSuccessMessage("¡Post creado exitosamente!");
      setErrorMessage(""); // Limpia mensajes de error si todo fue exitoso
    } catch (error) {
      console.error("Error al crear el post:", error);
      setErrorMessage("Ocurrió un error al crear el post.");
      setSuccessMessage(""); // Limpia mensajes de éxito si hubo error
    }
  };

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <h2 type="text">Sell a product</h2>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="title"
            placeholder="Item name"
            value={formData.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            type="text"
            placeholder="Describe your item"
            value={formData.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Telephone Number</label>
          <input
            type="text"
            placeholder="Phone number"
            name="telNumber"
            value={formData.telNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>File</label>
          <input type="file" onChange={handleFileChange} required />
        </div>
        <button type="submit">Create Post</button>
      </form>

      {successMessage && <p className="success">{successMessage}</p>}
      {errorMessage && <p className="error">{errorMessage}</p>}
      <Footers />
    </div>
  );
};

export default CreatePost;
