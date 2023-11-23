// Pagecreer.jsx
import { useState } from "react";
import toastUtils from "./toastUtils";
import "./Pagecree.css";

function Pagecreer() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
      "https://apihackaton1.osc-fr1.scalingo.io/users/register",
      requestOption
    );
    let data = await response.json();
    toastUtils("success", "Vous êtes bien inscrit");
    console.log(data);
    console.log(formData);
    console.log("Bien inscrit");
  }

  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2>Créer un compte</h2>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
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
          <button type="submit">S'inscrire</button>
        </form>
      </div>
    </div>
  );
}

export default Pagecreer;
