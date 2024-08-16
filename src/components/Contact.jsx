import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import { useTranslation } from "react-i18next";
import ReactCardFlip from "react-card-flip";

export const Contact = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  function flipCard() {
    setIsFlipped(!isFlipped);
  }

  const { t } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xscihgm", "template_ti0a3eh", form.current, {
        publicKey: "a0QxIc3fpC2i9lc4q",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped}>
      <div onClick={flipCard} className="contact-front">
        <h1>CONTACT</h1>
      </div>
      <div
        className="contact-back"
        flipDirection="horizontal"
        isFlipped={isFlipped}
      >
        <div className="contact-me-container">
          <form ref={form} onSubmit={sendEmail}>
            <label>{t("form.label1")}</label>
            <input
              required
              placeholder={t("form.placeholder1")}
              type="text"
              name="user_name"
            />
            <label>{t("form.label2")}</label>
            <input
              required
              placeholder={t("form.placeholder2")}
              type="email"
              name="user_email"
            />
            <label>{t("form.message")}</label>
            <textarea
              required
              placeholder={t("form.placeholder3")}
              name="message"
            />
            <input
              onClick={flipCard}
              id="submit-btn"
              type="submit"
              value={t("form.send")}
            />
          </form>
        </div>
      </div>
    </ReactCardFlip>
  );
};
