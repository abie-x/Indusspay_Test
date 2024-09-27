import React from 'react';
import { motion } from 'framer-motion'; // Import motion
import Navbar from '../Common/Navbar';
import Text from '../Common/Text';
import Button from '../Common/Button';
import HeroImage from '../../Assets/Image.png';

const Hero = () => {
   return (
      <motion.section
         className="h-screen bg-white"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
      >
         <div>
            <Navbar />
            <div className="pt-4">
               {' '}
               {/* Add padding-top to avoid overlap with navbar */}
               <div className="h-[calc(100vh-4rem)] ">
                  {' '}
                  {/* Adjust 4rem based on your navbar height */}
                  {/* Add your content here */}
                  {/* Responsive grid layout for different screen sizes */}
                  {/* Mobile */}
                  <div className="grid grid-cols-1 h-full sm:hidden">
                     <div className="col-span-1 bg-red-200 h-full p-52">hi</div>
                  </div>
                  {/* tablets */}
                  <div className="hidden sm:grid sm:grid-cols-1 lg:hidden h-full">
                     <div className="col-span-1 bg-green-200 h-full p-52">
                        hi
                     </div>
                  </div>
                  {/* PC */}
                  <div className="hidden lg:grid lg:grid-cols-2 h-full ">
                     <div className="col-span-1  h-full flex flex-col pl-40 pr-12 justify-center items-center">
                        <div className="flex flex-col gap-6">
                           <Text
                              styles="text-xs text-red-500 font-semibold"
                              content={`LET'S SHIFT YOUR BUSINESS`}
                           />
                           <Text
                              styles="text-5xl font-extrabold"
                              content={`Shift your business fast with Shade Pro`}
                           />
                           <Text
                              styles="text-base text-gray-500"
                              content={
                                 <>
                                    <span>
                                       With lots of unique blocks, you can
                                       easily build a page without coding.
                                    </span>
                                    <br /> {/* Line break */}
                                    <span>
                                       Build your next consultancy website
                                       within few minutes.
                                    </span>
                                    <br /> {/* Line break */}
                                    <span></span>
                                 </>
                              }
                           />
                           <Button
                              text="Get Started a Project"
                              styles="bg-primary text-white w-48"
                           />
                        </div>
                     </div>
                     <div className="col-span-1 h-full flex justify-center items-center">
                        <div className="h-full py-20">
                           <img src={HeroImage} />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </motion.section>
   );
};

export default Hero;
