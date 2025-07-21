import React from 'react';

interface FooterHeadingProps {
  children: React.ReactNode;
  className?: string;
}

const FooterHeading: React.FC<FooterHeadingProps> = ({ children, className = '' }) => {
  return (
    <h3 className={`text-white font-semibold text-lg mb-4 ${className}`}>
      {children}
    </h3>
  );
};

export default FooterHeading; 