import React, { useState } from "react";
import "../css/Login.css";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footers from "../components/Footers";
export const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [errorMessage, setErrorMessage] = useState(""); // Para manejar errores
const navigate = useNavigate(); // Hook para redirigir

async function login(event) {
    event.preventDefault();

    try {
    const res = await axios.post("http://localhost:8080/api/v1/mercadito/users/login", {
        email: email,
        password: password,
        });

    
        const { status, userId } = res.data;

    if (status === true) {
        localStorage.setItem("userId", userId);
        navigate("/Dashbord"); 
    } else {
        setErrorMessage("Credenciales incorrectas. Por favor, intenta de nuevo.");
    }
    } catch (error) {
        setErrorMessage("Ocurrió un error al iniciar sesión. Verifica tu conexión.");
        console.error(error);
    }
}

    return (
    <div className="container">
    <Navbar />
    <h2 className="header">Login</h2>
    <form className="form" onSubmit={login}>
    
        <div className="input-group">
        <label htmlFor="email" className="label">
            Email
        </label>
        <input
            type="email"

            required
            className="input"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
        />
        </div>

        <div className="input-group">
        <label htmlFor="password" className="label">
            Password
        </label>
        <input
            type="password"
            id="password"
            name="password"
            required
            className="input"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
        />
        </div>
        
        {errorMessage && <p className="error">{errorMessage}</p>}

        <button type="submit" className="button">
        Sign in
        </button>
    </form>
    <Footers/>
    </div>
);
};
export default Login;
