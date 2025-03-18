import { Navbar } from '@/components/navbar/navbar';

import { AlertMessage } from './components/alert-message/alert-message';
import { Footer } from './components/footer/footer';
import { HeroPage } from './components/hero-page/hero-page';
import { Events } from './components/events/events';
import { Sponsors } from './components/sponsors/sponsors';

function App() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <Sponsors />
      <Events />
      <AlertMessage />
      <Footer />
    </>
  );
}

export default App;
