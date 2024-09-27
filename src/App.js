import React, { useEffect } from 'react';
import './App.css';
import { motion } from 'framer-motion';
import Hero from './Components/Sections/Hero';
import Services from './Components/Sections/Services';
import Story from './Components/Sections/Story';
import WhyChooseUs from './Components/Sections/WhyChooseUs';
import CaseStudy from './Components/Sections/CaseStudy';
import Testimonials from './Components/Sections/Testimonials';
import Footer from './Components/Sections/Footer';

const sections = [
   { Component: Hero, id: 'hero' },
   { Component: Services, id: 'services' },
   { Component: Story, id: 'story' },
   { Component: WhyChooseUs, id: 'why-choose-us' },
   { Component: CaseStudy, id: 'case-study' },
   { Component: Testimonials, id: 'testimonials' },
   { Component: Footer, id: 'footer' },
];

function App() {
   useEffect(() => {
      const handleWheel = (e) => {
         if (e.deltaY > 0) {
            const nextSection = document.querySelector(
               '.section:target + .section'
            );
            if (nextSection) {
               nextSection.scrollIntoView({ behavior: 'smooth' });
               e.preventDefault();
            }
         }
      };

      window.addEventListener('wheel', handleWheel, { passive: false });

      return () => {
         window.removeEventListener('wheel', handleWheel);
      };
   }, []);

   return (
      <div className="App font-gilroy font-light">
         {sections.map(({ Component, id }, index) => (
            <motion.div
               key={id}
               initial={{ opacity: 0, y: 50 }} // Initial state for parallax effect
               animate={{ opacity: 1, y: 0 }} // Final state
               transition={{ duration: 2, delay: index * 2, ease: 'easeInOut' }} // Delay for each section
               className="section"
               id={id} // Set id for scrolling
            >
               <Component />
            </motion.div>
         ))}
      </div>
   );
}

export default App;
