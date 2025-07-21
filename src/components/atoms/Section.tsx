import React, { type JSX } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  background?: JSX.Element;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '', background }) => {
  return (
    <section id={id} className={`min-h-screen flex flex-col justify-center items-center p-8 relative ${className}`}>
      {background}
      <h2 className="text-4xl font-bold mb-8 text-center z-10">{title}</h2>
      <div className="max-w-4xl w-full z-10">
        {children}
      </div>
    </section>
  );
};

export default Section; 