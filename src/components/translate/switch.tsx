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

  const currentLanguage = i18n.language;

  return (
    <div className='lang-switch'>
      <div className='lang-toggle-container'>
        <button
          className={`lang-option ${currentLanguage === 'en' ? 'active' : ''}`}
          onClick={() => changeLanguage('en')}
          aria-label="Switch to English"
        >
          English
        </button>
        <button
          className={`lang-option ${currentLanguage === 'am' ? 'active' : ''}`}
          onClick={() => changeLanguage('am')}
          aria-label="Switch to Amharic"
        >
          አማርኛ
        </button>
        <div
          className='lang-slider'
          style={{
            transform: currentLanguage === 'am' ? 'translateX(100%)' : 'translateX(0)'
          }}
        />
      </div>
    </div>
  );
};

export default LanguageSwitcher;
