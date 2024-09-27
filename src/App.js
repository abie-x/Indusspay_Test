import './App.css';
import Hero from './Components/Sections/Hero';
import Services from './Components/Sections/Services';
import Story from './Components/Sections/Story';
import WhyChooseUs from './Components/Sections/WhyChooseUs';
import CaseStudy from './Components/Sections/CaseStudy';
import Testimonials from './Components/Sections/Testimonials';
import Footer from './Components/Sections/Footer';

function App() {
   return (
      <div className="App">
         <Hero />
         <Services />
         <Story />
         <WhyChooseUs />
         <CaseStudy />
         <Testimonials />
         <Footer />
      </div>
   );
}

export default App;
