import React from 'react';
import { Link } from 'react-scroll';

interface TourCardProps {
  title: string;
  description: string;
  price: string;
  imageAlt: string;
  className?: string;
  scrollToId?: string;
}

const TourCard: React.FC<TourCardProps> = ({
  title,
  description,
  price,
  imageAlt,
  className = '',
  scrollToId
}) => {
  return (
    <div className={`bg-white p-4 md:p-6 rounded-lg shadow-md ${className}`}>
      <div className="bg-gray-200 h-40 md:h-48 rounded-lg mb-4 flex items-center justify-center">
        <img src="https://placehold.co/600x400" alt={imageAlt} className="w-full h-full object-cover rounded-lg" />
      </div>
      <h3 className="text-xl md:text-2xl font-semibold mb-4 text-black">{title}</h3>
      <p className="hidden md:block text-gray-600 mb-4">{description}</p>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <span className="text-blue-600 font-semibold">{price}</span>
        {scrollToId ? (
          <Link
            to={scrollToId}
            smooth={true}
            duration={800}
            offset={-80}
            className="bg-blue-600 text-xs md:text-base  text-white px-2 md:px-6 py-1 md:py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Book now
          </Link>
        ) : (
          <button className="bg-blue-600 text-white text-sm md:text-base px-2 py-1 md:px-6 md:py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors">
            Book now
          </button>
        )}
      </div>
    </div>
  );
};

export default TourCard; 