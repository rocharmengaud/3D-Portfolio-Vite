import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Experience, Hero, Navbar, Works, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        {/* this bg-hero-pattern is setup in the tailwind.config.js */}
        <div className="bg-hero-pattern bg-center bg-no-repeat bg-cover">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        {/* faire un isMobile pour faire apparaitre les spheres sur pc mais pas mobile, reduire les spheres, imgs pr mobile*/}
        {/* <Tech /> */}
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
