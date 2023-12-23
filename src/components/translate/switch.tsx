import React from 'react';
import i18n from './i18n'; 
import Cookies from 'js-cookie';
import '../CSS/Header.css';

const LanguageSwitcher: React.FC = () => {
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language).then(() => {
      Cookies.set('i18next', language, { expires: 30 }); // Save language choice for 30 days
    });
  };

  const languageButtonStyle = (language: string) => ({
    marginRight: "0px",
    backgroundColor: "transparent",
    zIndex: 100,
    color: "black",
    border: "none",
    fontWeight: i18n.language === language ? 'bold' : 'normal',
    textDecoration: i18n.language === language ? 'underline' : 'none'
  });

  return (
    <div className='lang-switch'>
      <button style={languageButtonStyle('en')} onClick={() => changeLanguage('en')}>English</button>
      <button style={languageButtonStyle('am')} onClick={() => changeLanguage('am')}>አማርኛ</button>
    </div>
  );
};

export default LanguageSwitcher;
