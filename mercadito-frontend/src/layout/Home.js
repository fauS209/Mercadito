import React from 'react'

export default function 
() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-body-transparent">
                <div className="container-fluid d-flex justify-content-center">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mx-auto">

                            <a className="nav-link" href="Home.html">About us</a>
                            <a className="nav-link" href="#">Contact</a>
                            <a className="nav-link" href="/Login.js">Login</a>

                        </div>
                    </div>
                </div>
            </nav>

            <div className="card" style={{ background: 'transparent', border: 'none' }}>
                <div className="card-body ">
                    <h1>Bienvenidos a<br></br> El Mercadito Tigreño</h1>
                    <img src='/logo-mercadito.png' className="logo-mercadito" alt='fondo' style={{ width: '150px', height: 'auto' }} />
                    <h5>Explora los mejores productos locales<br></br> en un solo lugar</h5>
                    <p className="card-text">Productos frescos y de calidad, apoyando a nuestros productores locales para que disfrutes de una compra confiable y responsable.</p>
                    <br></br>
                    <button className="btn btn-success">Registrate</button>
                </div>
            </div>
    </div>
  )
}
