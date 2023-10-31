import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setSelectedLanguage(language);
  };

  return (
    <div>
      <label>Language: </label>
      <select value={selectedLanguage} onChange={(e) => changeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="he">Hebrew</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
