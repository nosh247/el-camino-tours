import React from 'react';
import { useTranslation } from 'react-i18next';
import 'flag-icons/css/flag-icons.min.css';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language;

  return (
    <div className="relative">
      <button
        onClick={() => changeLanguage(currentLanguage === 'en' ? 'es' : 'en')}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
        title={currentLanguage === 'en' ? 'Switch to Spanish' : 'Switch to English'}
      >
        {currentLanguage === 'en' ? (
          <>
            <span className="text-lg">
              <span className="fi fi-gb" />
            </span>
          </>
        ) : (
          <>
            <span className="text-lg">
              <span className="fi fi-pa" />
            </span>
          </>
        )}
      </button>
    </div>
  );
};

export default LanguageSwitcher; 