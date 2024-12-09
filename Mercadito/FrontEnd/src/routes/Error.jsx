import React from "react";
import "../css/Error.css"
import Navbar from "../components/Navbar";
import Footers from "../components/Footers";
import { Link } from "react-router";

const Error = () => {
return (
    <div>
    <Navbar />
    <div className="error-page">
    <h1>Error</h1>
    <p>You must log in to enter</p>
    <Link to="/Login" className="btn">
    Sign in
    </Link>
    </div>
    <Footers />
    </div>
);
};

export default Error;
