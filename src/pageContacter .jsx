//user
import React, { useState, useEffect } from "react";

const PageContacter = () => {
  const [userData, setUserData] = useState({});
  const [userProperties, setUserProperties] = useState([]);

  // Function d'envoi de la data récupérée du formulaire
  async function fetchData() {
    const requestOption = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    try {
      let response = await fetch(
        "https://apihackaton1.osc-fr1.scalingo.io/users/profile",
        requestOption
      );

      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données du profil");
      }

      let data = await response.json();
      console.log("Profil récupéré :", data);
      setUserData(data);
    } catch (error) {
      console.error("Erreur :", error.message);
    }
  }

  async function fetchDataProperties() {
    const requestOption = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };

    try {
      let response = await fetch(
        "https://apihackaton1.osc-fr1.scalingo.io/get-my-properties",
        requestOption
      );

      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données du profil");
      }

      let data = await response.json();
      setUserProperties(data);
      console.log(data);
    } catch (error) {
      console.error("Erreur :", error.message);
    }
  }

  useEffect(() => {
    fetchData();
    fetchDataProperties();
  }, []);

  return (
    <>
      <div className="form-container">
        <h2>Informations Personnelles</h2>
        <span>Votre pseudo : {userData.username}</span>
        <br />
        <span>Votre email : {userData.email}</span>

        {/* Ajoutez d'autres éléments en fonction de votre structure de données */}
      </div>
      <ul>
        {userProperties &&
          userProperties.map((property) => (
            <li key={property.id}>
              <p>Nom de la propriété : {property.title}</p>
              <p>Description : {property.description}</p>
              <p>Prix : {property.price}</p>
              <p>Localisation : {property.location}</p>
              {/* Ajoutez d'autres propriétés ici */}
            </li>
          ))}
      </ul>
    </>
  );
};

export default PageContacter;
