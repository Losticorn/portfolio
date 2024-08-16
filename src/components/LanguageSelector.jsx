import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./LanguageSelector.css";

const languages = [
  { code: "cz", lang: "Čeština", flag: "cz-flag.png" },
  { code: "sk", lang: "Slovenčina", flag: "sk-flag.png" },
  { code: "en", lang: "English", flag: "uk-flag.png" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
  };

  useEffect(() => {
    setSelectedLanguage(i18n.language);
  }, [i18n.language]);

  const selectedFlag = languages.find(
    (lng) => lng.code === selectedLanguage
  )?.flag;

  return (
    <div className="language-menu">
      <div className="selected-language">
        {selectedFlag && (
          <img
            className="selected-language-flag"
            src={selectedFlag}
            alt="selected language flag"
          />
        )}
      </div>
      <ul className="language-container">
        {languages.map((lng) => (
          <li key={lng.code}>
            <a
              className={lng.code === selectedLanguage ? "selected" : ""}
              onClick={() => changeLanguage(lng.code)}
            >
              <img src={lng.flag} alt={lng.lang} />
              <p>{lng.lang} </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSelector;
