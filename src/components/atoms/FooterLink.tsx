import React from 'react';

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children, className = '' }) => {
  return (
    <a 
      href={href} 
      className={`text-gray-400 hover:text-white transition-colors ${className}`}
    >
      {children}
    </a>
  );
};

export default FooterLink; 