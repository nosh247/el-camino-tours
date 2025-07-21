import React from 'react';
import { useTranslation } from 'react-i18next';
import FooterContent from '../organisms/FooterContent';

interface FooterTemplateProps {
  children?: React.ReactNode;
  className?: string;
}

const FooterTemplate: React.FC<FooterTemplateProps> = ({ children, className = '' }) => {
  const { t } = useTranslation();
  
  return (
    <footer className={`bg-gray-900 text-white py-12 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">{t('header.title')}</h2>
          <p className="text-gray-400 max-w-md">
            {t('footer.description')}
          </p>
        </div>
        
        {children || <FooterContent />}
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t('footer.links.privacy')}
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t('footer.links.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTemplate; 