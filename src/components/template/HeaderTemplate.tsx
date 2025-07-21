import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../atoms/LanguageSwitcher';

interface HeaderTemplateProps {
  className?: string;
}

const HeaderTemplate: React.FC<HeaderTemplateProps> = ({ className = '' }) => {
    const { t } = useTranslation();
    
    return (
        <header className={`flex justify-between items-center w-full bg-black text-white px-8 py-4 ${className}`}>
            <h1 className="text-4xl font-bold">{t('header.title')}</h1>
            <LanguageSwitcher />
        </header>
    );
};

export default HeaderTemplate; 