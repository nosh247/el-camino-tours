import react, { type JSX } from 'react';
import { useTranslation } from 'react-i18next';
import Section from '../atoms/Section';
import TourCard from '../molecules/TourCard';
import TourSectionCard from '../molecules/TourSectionCard';

interface TourData {
  id: string;
  title: string;
  description: string;
  price: string;
  imageAlt: string;
  background?: JSX.Element;
}

interface SectionData {
  id: string;
  title: string;
  content: JSX.Element;
  background?: JSX.Element;
}

// ✅ Better approach - Move static data outside component
const TOURS_DATA: TourData[] = [
  {
    id: 'monkey-island',
    title: 'Monkey Island',
    description: 'The most popular and iconic route of the Camino de Santiago. This 780km journey from Saint-Jean-Pied-de-Port to Santiago de Compostela takes you through the stunning Pyrenees, the rolling hills of Navarra, the vast plains of Castilla y León, and the lush landscapes of Galicia.',
    price: '€1,200',
    imageAlt: 'Monkey Island Image',
    // background: (
    //   <div className='absolute top-0 left-0 w-full h-full z-0'>
    //     <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1632505702897-cc41b0ba3b64?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About Our Tours" />
    //   </div>
    // )
  },
  {
    id: 'embera-village',
    title: 'Emberá Village',
    description: 'Experience the coastal beauty of Portugal and Spain on this 620km route from Lisbon to Santiago. Walk through charming Portuguese villages, along stunning Atlantic beaches, and through the historic cities of Porto and Vigo before reaching your final destination.',
    price: '€980',
    imageAlt: 'Emberá Village Image'
  },
  {
    id: 'city-tour',
    title: 'City Tour',
    description: 'Follow the stunning Cantabrian coast on this 825km route from Irún to Santiago. This path offers breathtaking ocean views, charming fishing villages, and the rich cultural heritage of the Basque Country, Cantabria, and Asturias regions.',
    price: '€1,350',
    imageAlt: 'City Tour Image'
  },
  {
    id: 'flash-city-tour',
    title: 'Flash-City Tour',
    description: 'The original Camino route from Oviedo to Santiago, covering 321km through the rugged mountains of Asturias and Galicia. This challenging but rewarding path offers spectacular mountain scenery and a true sense of the medieval pilgrimage experience.',
    price: '€1,100',
    imageAlt: 'Flash-City Tour Image'
  }
];



const HomePage: react.FC = () => {
  const { t } = useTranslation();
  
  const SECTIONS_DATA: SectionData[] = [
    {
      id: 'about',
      title: 'About Our Tours',
      content: (
        <div className="text-center">
          <div className='mb-10'>
            <p className="text-xl mb-6">
              {t('home.about.description')}
            </p>
            <p className="text-lg text-gray-600">
              {t('home.about.subDescription')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TOURS_DATA.map((tour) => {
              // Convert kebab-case to camelCase for translation keys
              const tourKey = tour.id === 'monkey-island' ? 'monkeyIsland' :
                             tour.id === 'embera-village' ? 'emberaVillage' :
                             tour.id === 'city-tour' ? 'cityTour' :
                             tour.id === 'flash-city-tour' ? 'flashCityTour' : tour.id;
              
              return (
                <TourCard
                  key={tour.id}
                  title={t(`tours.${tourKey}.title`)}
                  description={t(`tours.${tourKey}.description`)}
                  price={`From ${t(`tours.${tourKey}.price`)}`}
                  imageAlt={t(`tours.${tourKey}.title`)}
                  scrollToId={tour.id}
                />
              );
            })}
          </div>
        </div>
      ),
      background: (
        <div className='absolute top-0 left-0 w-full h-full'>
          <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1632505702897-cc41b0ba3b64?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About Our Tours" />
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 from-[10%] to-transparent to-[40%]' />
        </div>
      )
    },
    {
      id: 'experience',
      title: 'The Experience',
      content: (
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">{t('home.experience.subtitle')}</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                {t('home.experience.features.guides')}
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                {t('home.experience.features.accommodations')}
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                {t('home.experience.features.cuisine')}
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                {t('home.experience.features.immersion')}
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                {t('home.experience.features.support')}
              </li>
            </ul>
          </div>
          <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
            <p className="text-gray-500 text-lg">Experience Image Placeholder</p>
          </div>
        </div>
      )
    },
    {
      id: 'testimonials',
      title: 'Traveler Stories',
      content: (
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4 italic">
              "{t('home.testimonials.testimonial1.text')}"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <p className="font-semibold">{t('home.testimonials.testimonial1.author')}</p>
                <p className="text-sm text-gray-500">{t('home.testimonials.testimonial1.tour')}</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4 italic">
              "{t('home.testimonials.testimonial2.text')}"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <p className="font-semibold">{t('home.testimonials.testimonial2.author')}</p>
                <p className="text-sm text-gray-500">{t('home.testimonials.testimonial2.tour')}</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'contact',
      title: 'Start Your Journey',
      content: (
        <div className="text-center">
          <p className="text-xl mb-8">
            {t('home.contact.description')}
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">{t('home.contact.email')}</h4>
              <p className="text-blue-600">{t('footer.contact.email')}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">{t('home.contact.phone')}</h4>
              <p className="text-blue-600">{t('footer.contact.phone')}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">{t('home.contact.office')}</h4>
              <p className="text-gray-600">{t('home.contact.officeAddress')}</p>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            {t('home.contact.button')}
          </button>
        </div>
      )
    }
  ];
  
  return (
    <div className='flex flex-col gap-10 bg-black relative'>

      {SECTIONS_DATA.map((section) => (
        <Section
          key={section.id}
          id={section.id}
          title={t(`home.${section.id}.title`)}
          background={section.background}
        >
          {section.content}
        </Section>
      ))}

      {TOURS_DATA.map((tour) => {
        // Convert kebab-case to camelCase for translation keys
        const tourKey = tour.id === 'monkey-island' ? 'monkeyIsland' :
                       tour.id === 'embera-village' ? 'emberaVillage' :
                       tour.id === 'city-tour' ? 'cityTour' :
                       tour.id === 'flash-city-tour' ? 'flashCityTour' : tour.id;
        
        return (
          <TourSectionCard
            key={tour.id}
            id={tour.id}
            title={t(`tours.${tourKey}.title`)}
            description={t(`tours.${tourKey}.fullDescription`)}
            price={t(`tours.${tourKey}.price`)}
            imageAlt={t(`tours.${tourKey}.title`)}
            background={tour.background}
          />
        );
      })}
    </div>
  );
};

export default react.memo(HomePage); 