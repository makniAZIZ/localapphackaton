//ce la pager ajouter une annonce

import React, { useRef, useState } from "react";
import toastUtils from "./toastUtils";
const MonBouton = () => {
  const inputRef = useRef(null);

  // Ajout des états pour les nouveaux champs
  const [formData, setFormData] = useState({
    title: "",

    quantiteM3: "",
    budget: "",
    description: "",
    location: "nice",
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      // Logique pour traiter le fichier image ici
      console.log("Image sélectionnée :", file.name);
    }
  };

  const ouvrirExplorateurFichiers = () => {
    inputRef.current.click();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //Function d'envoie de la data récup du form
  async function createProperties() {
    const requestOption = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      body: JSON.stringify(formData),
    };
    let response = await fetch(
      "https://apihackaton1.osc-fr1.scalingo.io/create-properties",
      requestOption
    );
    //data étant le tableaux de resultat correspondant à notre recherche
    let data = await response.json();
    toastUtils("success", "Votre annonce a bien été crée");
    console.log(data);
  }

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        ref={inputRef}
        onChange={handleImageChange}
      />

      <button
        onClick={ouvrirExplorateurFichiers}
        style={{
          backgroundColor: "orange",
          color: "white",
          padding: "10px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Ajouter Image
      </button>

      {/* Nouveaux champs pour l'adresse, la quantité en m3, le budget et la description */}
      <label>
        Titre :
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </label>

      <label>
        Budget :
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
        />
      </label>

      <label>
        Description :
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>

      <label>
        Choisir ta ville :
        <select
          name="location"
          value={formData.location}
          onChange={handleChange}
        >
          <option value="nice">Nice</option>
          <option value="paris">Paris</option>
          <option value="antibes">Antibes</option>
          <option value="cannes">Cannes</option>
        </select>
      </label>

      {/* Bouton pour envoyer toutes les informations */}
      <button
        onClick={createProperties}
        style={{
          backgroundColor: "orange",
          color: "white",
          padding: "10px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Envoyer toutes les informations
      </button>
    </div>
  );
};

export default MonBouton;
