import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { motion } from 'framer-motion';
import Hero from './Components/Sections/Hero';
import Services from './Components/Sections/Services';
import Story from './Components/Sections/Story';
import WhyChooseUs from './Components/Sections/WhyChooseUs';
import Contact from './Pages/Contact'; // Import the Contact component
import Info from './Pages/Info';

const sections = [
   { Component: Hero, id: 'hero', animate: true },
   { Component: Services, id: 'services', animate: true },
   { Component: Story, id: 'story', animate: false },
   { Component: WhyChooseUs, id: 'why-choose-us', animate: true },
   // { Component: CaseStudy, id: 'case-study', animate: true },
   // { Component: Testimonials, id: 'testimonials', animate: true },
   // { Component: Footer, id: 'footer', animate: true },
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
      <Router>
         <div className="App font-gilroy font-light">
            <Routes>
               {/* Route for the contact page */}
               {/* Route for creating a new contact */}
               <Route path="/contact" element={<Contact />} />
               {/* Route for editing an existing contact */}
               <Route path="/contact/:id" element={<Contact />} />
               <Route path="/info" element={<Info />} />
               {/* Default route for other sections */}
               <Route
                  path="/"
                  element={
                     <>
                        {sections.map(({ Component, id, animate }, index) => (
                           <motion.div
                              key={id}
                              initial={animate ? { opacity: 0, y: 50 } : {}}
                              animate={animate ? { opacity: 1, y: 0 } : {}}
                              transition={
                                 animate
                                    ? {
                                         duration: 1,
                                         delay: index * 0.5,
                                         ease: 'easeInOut',
                                      }
                                    : {}
                              }
                              className="section"
                              id={id}
                           >
                              <Component />
                           </motion.div>
                        ))}
                     </>
                  }
               />
            </Routes>
         </div>
      </Router>
   );
}

export default App;
