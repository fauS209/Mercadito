import React, { useState } from 'react';
import '../css/Contact.css';
import Navbar from '../components/Navbar';
import Footers from '../components/Footers';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulario enviado con éxito.");
    // Aquí puedes agregar la lógica para enviar el formulario.
  };

  return (
    <div>
      <Navbar />
      <section className="contact-container">
        <h1>Contact us</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electronico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Enviar</button>
        </form>
      </section>
      <Footers />
    </div>
  );
};

export default Contact;
