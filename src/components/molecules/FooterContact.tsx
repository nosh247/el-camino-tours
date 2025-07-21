import React from 'react';
import FooterHeading from '../atoms/FooterHeading';

interface ContactInfo {
  label: string;
  value: string;
  href?: string;
}

interface FooterContactProps {
  title: string;
  contactInfo: ContactInfo[];
  className?: string;
}

const FooterContact: React.FC<FooterContactProps> = ({ title, contactInfo, className = '' }) => {
  return (
    <div className={className}>
      <FooterHeading>{title}</FooterHeading>
      <div className="space-y-3">
        {contactInfo.map((info, index) => (
          <div key={index} className="flex flex-col">
            <span className="text-gray-400 text-sm">{info.label}</span>
            {info.href ? (
              <a 
                href={info.href} 
                className="text-white hover:text-blue-400 transition-colors"
              >
                {info.value}
              </a>
            ) : (
              <span className="text-white">{info.value}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterContact; 