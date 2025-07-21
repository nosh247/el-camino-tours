import react, { type JSX } from 'react';

interface TourSectionCardProps {
  id: string;
  title: string;
  description: string;
  price: string;
  imageAlt: string;
  background?: JSX.Element;
}

const TourSectionCard: react.FC<TourSectionCardProps> = ({
  id,
  title, 
  description, 
  price, 
  imageAlt,
  background
}) => {
  return (
    <section id={id} className="min-h-screen flex flex-col justify-center items-center p-8 relative">
      {background}
      <h2 className="text-4xl font-bold mb-8 text-center relative z-10">{title}</h2>
      <div className="max-w-4xl w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 text-lg">{imageAlt}</p>
          </div>
          <div>
            <p className="text-lg text-gray-600 mb-6">
              {description}
            </p>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold text-blue-600">{price}</span>
              <span className="text-gray-500">per person</span>
            </div>
            <button className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors">
              Book now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourSectionCard; 