import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../assets/css/FormulaireContact.css";

const FormulaireContact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fgv2yku",
        "template_9dd3eg8",
        form.current,
        "3w-RROCsvLndzqMr0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="formulairecontact">
      <div className="encartGaucheContact"></div>
      <form ref={form} onSubmit={sendEmail} className="inputbox">
        <h1>Contactez-moi</h1>
        <p>
          Pour toutes questions n'hésitez pas à me contacter via le formulaire
          ci dessous
        </p>
        <input
          className="input"
          type="text"
          name="user_name"
          placeholder="Votre nom"
          required
        />
        <input
          className="input"
          type="email"
          name="user_email"
          placeholder="Votre email"
          required
        />
        <textarea
          className="input"
          name="message"
          placeholder="Votre message"
          required
        />
        <input type="submit" value="Envoyer" className="boutonenvoyer" />
      </form>
    </div>
  );
};

export default FormulaireContact;
