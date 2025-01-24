import { Navbar } from '@/components/navbar/navbar';

import { Footer } from './components/footer/footer';
import { HeroPage } from './components/hero-page/hero-page';
import { Sponsors } from './components/sponsors/sponsors';

function App() {
  return (
    <>
      <Navbar />
      <HeroPage />
      <Sponsors />
      <Footer />
    </>
  );
}

export default App;
