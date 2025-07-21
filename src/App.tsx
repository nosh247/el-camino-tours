import './App.scss';
import AppTemplate from './components/template/AppTemplate';
import { lazy, Suspense } from 'react';

const HeaderTemplate = lazy(() => import('./components/template/HeaderTemplate'));
const HomePage = lazy(() => import('./components/pages/HomePage'));
const Footer = lazy(() => import('./components/Footer'));
const Loading = lazy(() => import('./components/atoms/Loading'));

function App() {
  return (
    <AppTemplate>
      <Suspense fallback={<Loading />}>
        <HeaderTemplate />
        <HomePage />
        <Footer />
      </Suspense>
    </AppTemplate>
  )
}

export default App
