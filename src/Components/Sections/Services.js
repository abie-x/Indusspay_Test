import React from 'react';
import { motion } from 'framer-motion';
import Text from '../Common/Text';
import Card from '../Common/Card';
import DesignService from '../../Assets/DesignService.svg';
import ProgrammingService from '../../Assets/ProgrammingService.svg';
import WritingService from '../../Assets/WritingService.svg';
import Customer from '../../Assets/Oval.png';
import Rating from '../Common/Rating';

const Services = () => {
   return (
      <motion.section
         className="h-screen bg-whit"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
      >
         {/* Mobile */}
         <div className="grid md:hidden grid-cols-1 h-full gap-4 p-4">
            <div className="h-full grid grid-rows-8">
               <div class="row-span-1 ">
                  <div className="h-full flex flex-col items-center justify-center gap-y-4">
                     <Text
                        styles="text-xs text-red-500 font-semibold"
                        content={`OUR SERVICES`}
                     />
                     <div className="flex flex-col max-w-sm text-center">
                        <Text
                           styles="text-xl font-extrabold"
                           content={`We provide great services for our`}
                        />
                        <Text
                           styles="text-xl font-extrabold"
                           content={`customers based on needs`}
                        />
                     </div>
                  </div>
               </div>
               <div class="row-span-6  flex flex-col justify-between gap-6 px-8">
                  <Card
                     imageSrc={DesignService}
                     heading="Graphic Design"
                     description="With lots of unique blocks, you can easily build a page without coding. Build your next landing page"
                     cardStyle={'bg-green-400'}
                     imageStyles={'h-2/3'}
                  />
                  <Card
                     imageSrc={ProgrammingService}
                     heading="Web Development"
                     description="With lots of unique blocks, you can easily build a page without coding. Build your next landing page"
                     cardStyle={'bg-indigo-500'}
                     imageStyles={'h-2/3'}
                  />
               </div>
               <div class="row-span-1 p-3">
                  <div className="h-full grid grid-cols-3">
                     <div className="col-span-1  flex justify-center">
                        <img
                           src={Customer}
                           className="h-20"
                           alt="services-img"
                        />
                     </div>
                     <div className="col-span-2 ">
                        <div className="flex flex-col justify-between items-start gap-y-1">
                           <Rating />
                           <Text
                              styles="text-xs"
                              content={
                                 'I cannot believe that I have got a brand new landing page after getting Albino. It was super easy to edit and publish.'
                              }
                           />
                           <div className="flex gap-1 pb-1">
                              <Text
                                 styles="text-xs font-semibold text-black"
                                 content={'Franklin Hicks'}
                              />
                              <Text
                                 styles="text-xs text-black"
                                 content={'Web Developer'}
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* tablets */}
         <div className="hidden sm:grid sm:grid-cols-1 lg:hidden h-full"></div>

         {/* PC */}
         <div className="hidden lg:grid lg:grid-cols-1 min-h-screen p-4">
            <div className="h-full grid grid-rows-12">
               <div className="row-span-2 h-full">
                  <div className="h-full flex flex-col justify-center items-center gap-6">
                     <Text
                        styles="text-xs text-red-500 font-semibold"
                        content={`OUR SERVICES`}
                     />
                     <div className="flex flex-col max-w-sm text-center">
                        <Text
                           styles="text-xl font-extrabold"
                           content={`We provide great services for our`}
                        />
                        <Text
                           styles="text-xl font-extrabold"
                           content={`customers based on needs`}
                        />
                     </div>
                  </div>
               </div>
               <div className="row-span-7 ">
                  <div className="h-full grid grid-cols-3 gap-20 px-48 p-8">
                     {' '}
                     {/* Added grid class */}
                     <div className=" h-full">
                        <Card
                           imageSrc={DesignService}
                           heading="Graphic Design"
                           description="With lots of unique blocks, you can easily build a page without coding. Build your next landing page"
                           cardStyle={'bg-green-400'}
                           imageStyles={'h-2/3'}
                        />
                     </div>
                     <div className=" h-full">
                        {/* Content goes here if needed */}
                        <Card
                           imageSrc={ProgrammingService}
                           heading="Web Development"
                           description="With lots of unique blocks, you can easily build a page without coding. Build your next landing page"
                           cardStyle={'bg-indigo-500'}
                           imageStyles={'h-2/3'}
                        />
                     </div>
                     <div className=" h-full">
                        {/* Content goes here if needed */}
                        <Card
                           imageSrc={WritingService}
                           heading="Content Writing"
                           description="With lots of unique blocks, you can easily build a page without coding. Build your next landing page"
                           cardStyle={'bg-red-400'}
                           imageStyles={'h-2/3'}
                        />
                     </div>
                  </div>
               </div>

               <div className="row-span-3 p-2">
                  <div className="h-full grid grid-cols-3">
                     <div className="col-span-1  flex pt-1 justify-center ">
                        <img src={Customer} className="h-3/5" />
                     </div>

                     <div className="col-span-2  h-full py-2">
                        <div className="h-full flex flex-col justify-between">
                           {/* Rating Component */}
                           <Rating />

                           {/* Text section in violet background */}
                           <div className=" pb-6">
                              <Text
                                 styles="text-lg font-semibold"
                                 content={`"I cannot believe that I have got a brand new landing page after getting Albino.`}
                              />
                              <Text
                                 styles="text-lg font-semibold"
                                 content={`It was super easy to edit and publish."`}
                              />
                              <div className="flex gap-1 pt-1">
                                 <Text
                                    styles="text-xs font-semibold text-black"
                                    content={'Franklin Hicks'}
                                 />
                                 <Text
                                    styles="text-xs text-black"
                                    content={'Web Developer'}
                                 />
                              </div>
                           </div>

                           {/* Red background section with text */}
                           <div className="flex gap-2 p-2">
                              {/* Add text color */}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </motion.section>
   );
};

export default Services;
