import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // function pour activer la deconnecter
  function deconnecter() {
    localStorage.removeItem("token");
  }
  return (
    <nav className="nav">
      <div
        className="navbar"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="logo">LOCALAPP</div>
        <div className="nav-links" style={{ display: "flex" }}>
          <Link to="/">
            <p>Accueil</p>
          </Link>
          <Link to="/pageprofile">
            <p>Ajouter une annonce </p>
          </Link>
          <Link to="/pagecontacter">
            <p>User</p>
          </Link>
        </div>
        <div
          className="user-section"
          style={{ display: "flex", alignItems: "center" }}
        >
          <Link to="/pageconnexion">
            <button className="login-btn">Connexion</button>
          </Link>
          <button onClick={deconnecter} className="login-btn">
            deconnecter
          </button>
          <div className="menu-icon">&#9776;</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
