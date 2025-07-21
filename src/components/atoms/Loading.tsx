import React from 'react';
import { useTranslation } from 'react-i18next';

const Loading: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-2xl font-semibold text-gray-600">{t('common.loading')}</div>
    </div>
  );
};

export default Loading; 