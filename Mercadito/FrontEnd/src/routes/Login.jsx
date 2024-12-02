import React, { useState } from 'react'
import "./css/Login.css"
import Navbar from '../components/Navbar';
import axios from 'axios';
export const Login = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    async function login(event) {
        event.preventDefault();
        await axios.post("http://localhost:8080/api/v1/mercadito/users/login",{
        email:email,
        password: password,
        }).then((res)=>{
            console.log(res.data);

            if(res.data.message == "Email not exists"){
                alert("Email not exists")
            }
            else if(res.data.message == "Bienvenido"){
                alert("Bienvenido")
                
            }


        }
    )
        
    }

return (


    <div className="container">
        <Navbar/>
    <h2 className="header">Inicio de Sesión</h2>
    <form className="form">
      {/* Campo de correo electrónico */}
    <div className="input-group">
        <label htmlFor="email" className="label">
        Correo Electrónico:
        </label>
        <input
            type="email"
            id="email"
            name="email"
            required
            className="input"
            value={email}
            onChange={(event)=>{
            setEmail(event.target.value)
        }}
        />
        
    </div>

      {/* Campo de contraseña */}
    <div className="input-group">
        <label htmlFor="password" className="label">
        Contraseña:
        </label>
        <input
        type="password"
        id="password"
        name="password"
        required
        className="input"
        value={password}
        onChange={(event)=>{
        setPassword(event.target.value)
    }}
        />
    </div>

      {/* Botón de inicio de sesión */}
    <button
    type="submit"
    className="button"
    onClick={login}
    >
        Iniciar Sesión
    </button>
    </form>
</div>
    )
}
export default Login;