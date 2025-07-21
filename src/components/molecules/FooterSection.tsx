import React from 'react';
import FooterHeading from '../atoms/FooterHeading';
import FooterLink from '../atoms/FooterLink';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';

interface FooterLinkData {
  href: string;
  text: string;
  icon?: IconProp;
}

interface FooterSectionProps {
  title: string;
  links: FooterLinkData[];
  className?: string;
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, links, className = '' }) => {
  return (
    <div className={className}>
      <FooterHeading>{title}</FooterHeading>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <FooterLink href={link.href}>
              {link.icon && <FontAwesomeIcon icon={link.icon} />} {link.text}
            </FooterLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection; 