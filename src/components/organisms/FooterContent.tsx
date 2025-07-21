import React from 'react';
import { useTranslation } from 'react-i18next';
import FooterSection from '../molecules/FooterSection';
import FooterContact from '../molecules/FooterContact';

const FooterContent: React.FC = () => {
  const { t } = useTranslation();
  
  const toursLinks = [
    { href: '/tours/monkey-island', text: t('tours.monkeyIsland.title') },
    { href: '/tours/embera-village', text: t('tours.emberaVillage.title') },
    { href: '/tours/city-tour', text: t('tours.cityTour.title') },
    { href: '/tours/flash-city-tour', text: t('tours.flashCityTour.title') },
  ];

  const companyLinks = [
    { href: '/about', text: t('footer.links.about') },
    { href: '/team', text: t('footer.links.team') },
    { href: '/testimonials', text: t('footer.links.testimonials') },
    { href: '/blog', text: t('footer.links.blog') },
  ];

  const supportLinks = [
    { href: '/faq', text: t('footer.links.faq') },
    { href: '/contact', text: t('footer.links.contact') },
    { href: '/booking', text: t('footer.links.booking') },
    { href: '/terms', text: t('footer.links.terms') },
  ];

  const contactInfo = [
    { label: t('home.contact.email'), value: t('footer.contact.email'), href: 'mailto:info@elcaminotours.com' },
    { label: t('home.contact.phone'), value: t('footer.contact.phone'), href: 'tel:+34123456789' },
    { label: t('home.contact.office'), value: t('footer.contact.address') },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <FooterSection 
        title={t('footer.sections.tours')} 
        links={toursLinks}
        className="col-span-1"
      />
      <FooterSection 
        title={t('footer.sections.company')} 
        links={companyLinks}
        className="col-span-1"
      />
      <FooterSection 
        title={t('footer.sections.support')} 
        links={supportLinks}
        className="col-span-1"
      />
      <FooterContact 
        title={t('footer.sections.contact')} 
        contactInfo={contactInfo}
        className="col-span-1"
      />
    </div>
  );
};

export default FooterContent; 