// Navbar.js
import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const pagedaccueil = () => {
  const [properties, setProperties] = useState([]);

  async function fetchData() {
    const requestOption = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    };

    try {
      let response = await fetch(
        "https://apihackaton1.osc-fr1.scalingo.io/properties",
        requestOption
      );

      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données du profil");
      }

      let data = await response.json();
      setProperties(data);
    } catch (error) {
      console.error("Erreur :", error.message);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="photo">
      <Carousel>
        <div>
          <img
            className="image"
            src="https://localapphackaton.vercel.app/Alaya-Beach.png"
          />
        </div>
        <div>
          <img
            className="image"
            src="https://localapphackaton.vercel.app/Alaya-Beach.png"
          />
        </div>
        <div>
          <img
            className="image"
            src="https://localapphackaton.vercel.app/Alaya-Beach.png"
          />
        </div>
      </Carousel>
      <ul>
        {properties &&
          properties.map((property) => (
            <li className="container" key={property.id}>
              <div>
                <img className="images" src="Alaya-Beach.png" alt="" />
              </div>
              <div>
                <p>Nom de la propriété : {property.title}</p>
                <p>Description : {property.description}</p>
                <p>Prix : {property.price}</p>
                <p>Localisation : {property.location}</p>
                <p>Email: {property.email}</p>
                {/* Ajoutez d'autres propriétés ici */}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default pagedaccueil;
