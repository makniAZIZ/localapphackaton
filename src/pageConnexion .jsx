//page connexion

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toastUtils from "./toastUtils";
function Connection() {
  // Creation de la variable d'etat qui va contenir la data recupéré du formulaire
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  //récupère les données rentrées dans le form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //Function d'envoie de la data récup du form
  async function handleSubmit(e) {
    e.preventDefault();
    const requestOption = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    let response = await fetch(
      "https://apihackaton1.osc-fr1.scalingo.io/users/login",
      requestOption
    );
    //data étant le tableaux de resultat correspondant à notre recherche
    let data = await response.json();
    toastUtils("success", "vous etes bien connecté");
    navigate("/");
    console.log(data);
    localStorage.setItem("token", data.token);
  }

  return (
    <>
      <div className="form-container">
        {/* Au déclenchement du boutton S'inscrire CTA ca déclenche la function handleSumbit */}
        <form onSubmit={handleSubmit}>
          <h2>Connection</h2>
          <div className="form-group">
            <label htmlFor="email">Email</label>
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
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <Link to="/pagecreer">
            <h6>créer un compte</h6>
          </Link>

          <button
            type="submit"
            style={{
              backgroundColor: "orange",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Se connecter
          </button>
        </form>
      </div>
    </>
  );
}

export default Connection;
