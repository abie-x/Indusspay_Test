import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Button from './Button';
import Logo from '../../Assets/Logo.png';

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   return (
      <nav className="bg-white fixed w-full z-10 text-black font-medium px-2">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
               {/* Left side: logo + navlinks */}
               <div className="flex items-center">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                     <Link to="/" className="text-2xl font-bold">
                        <img
                           src={Logo}
                           alt="Logo"
                           className="w-36 h-auto object-contain" // Adjust width as needed
                        />
                     </Link>
                  </div>

                  {/* Nav Links - Hidden on tablets and smaller */}
                  <div className="hidden lg:flex ml-10 space-x-8">
                     <Link
                        to="#"
                        className="text-black hover:text-primary px-3 py-2 text-md font-semibold"
                     >
                        Demos
                     </Link>
                     <Link
                        to="#"
                        className="text-black hover:text-primary px-3 py-2 text-md font-semibold"
                     >
                        Pages
                     </Link>
                     <Link
                        to="#"
                        className="text-black hover:text-primary px-3 py-2 text-md font-semibold"
                     >
                        Support
                     </Link>
                     <Link
                        to="/contact" // Navigate to '/contact' route
                        className="text-black hover:text-primary px-3 py-2 text-md font-semibold"
                     >
                        Contact
                     </Link>
                  </div>
               </div>

               {/* Right side: CTA button - Hidden on tablets and smaller */}
               <div className="hidden lg:flex items-center">
                  <Button
                     text="Get Started a Project"
                     styles="bg-primary text-white"
                  />
               </div>

               {/* Hamburger Menu - Visible on tablets and smaller */}
               <div className="lg:hidden flex items-center">
                  <button onClick={toggleMenu}>
                     {isOpen ? (
                        <FaTimes className="text-2xl text-primary" />
                     ) : (
                        <FaBars className="text-2xl text-primary" />
                     )}
                  </button>
               </div>
            </div>
         </div>

         {/* Mobile/Tablet Menu */}
         {isOpen && (
            <div className="lg:hidden bg-white px-2 pt-2 pb-3 space-y-1">
               <Link to="#" className="text-gray-600 block px-3 py-2">
                  Demos
               </Link>
               <Link to="#" className="text-gray-600 block px-3 py-2">
                  Pages
               </Link>
               <Link to="#" className="text-gray-600 block px-3 py-2">
                  Support
               </Link>
               <Link to="/contact" className="text-gray-600 block px-3 py-2">
                  Contact
               </Link>
               <div className="mt-2">
                  <Button
                     text="Get Started a Project"
                     styles="bg-primary text-white"
                  />
               </div>
            </div>
         )}
      </nav>
   );
};

export default Navbar;
