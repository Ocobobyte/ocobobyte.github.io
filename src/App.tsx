import { Navbar } from '@/components/navbar/navbar';

import { AlertMessage } from './components/alertMessage/alertMessage';
import { Footer } from './components/footer/footer';
import { HeroPage } from './components/hero-page/hero-page';
import { NewEvents } from './components/newEvents/newEvents';
import { Sponsors } from './components/sponsors/sponsors';

function App() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <Sponsors />
      <NewEvents />
      <AlertMessage />
      <Footer />
    </>
  );
}

export default App;
