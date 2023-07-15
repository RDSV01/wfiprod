import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/FormulaireContact.css";
import { Bounce, Slide } from "react-awesome-reveal";

const FormulaireContact = () => {
  const form = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSending(true);

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
          setIsMessageSent(true);
          form.current.reset();
          setIsSending(false);
        },
        (error) => {
          console.log(error.text);
          setIsSending(false);
        }
      );
  };
  const closeMessage = () => {
    setIsMessageSent(false);
  };
  return (
    <div className="formulairecontact">
      <Slide
        direction="left"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="encartGaucheContact">
          <h1>Mes réseaux sociaux</h1>
          <p>Contactez-moi sur mes réseaux sociaux </p>
          <div className="divLogoReseaux">
            <a href="#">
              <img
                className="logoReseaux"
                src="src/assets/icones/instagram.svg"
              ></img>
            </a>

            <img
              className="logoReseaux"
              src="src/assets/icones/youtube.svg"
            ></img>
          </div>
        </div>
      </Slide>
      <form ref={form} onSubmit={sendEmail} className="inputbox">
        <Slide direction="right" style={{ textAlign: "center" }}>
          <h1>Contactez-moi</h1>
          <p>
            Pour toutes questions n'hésitez pas à me contacter via le formulaire
            ci dessous
          </p>
          <div className="divMsgValide">
            {isMessageSent && (
              <Bounce>
                <div className="messageValide">
                  <p>Message envoyé avec succès !</p>
                  <button className="closeButton" onClick={closeMessage}>
                    <img src="src/assets/icones/xmark-solid.svg" alt="" />
                  </button>
                </div>
              </Bounce>
            )}
          </div>
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
          <input
            type="submit"
            value={isSending ? "Envoi en cours..." : "Envoyer"}
            className="boutonenvoyer"
          />
        </Slide>
      </form>
    </div>
  );
};

export default FormulaireContact;
