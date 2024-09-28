import React from 'react';
import { motion } from 'framer-motion';
import Text from '../Common/Text';
import PM from '../../Assets/PM.png';
import Task from '../../Assets/Task.png';
import Feedback from '../../Assets/Feedback.png';
import Deadline from '../../Assets/Deadline.png';
import Button from '../Common/Button';
import { useNavigate } from 'react-router-dom';

const WhyChooseUs = () => {
   const navigate = useNavigate();

   const navigateHandler = () => {
      console.log('hi');
      navigate('/contact');
   };

   return (
      <motion.section
         className="h-screen "
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
      >
         {/* Mobile */}
         <div className="grid md:hidden grid-cols-1 h-full gap-4 p-4"></div>

         {/* tablets */}
         <div className="hidden sm:grid sm:grid-cols-1 lg:hidden h-full"></div>

         {/* PC */}
         <div className="hidden lg:grid lg:grid-cols-1 min-h-screen p-4 px-44">
            <div className="h-full grid grid-rows-4 gap-y-12">
               <div className="row-span-1 ">
                  <div className="h-full flex flex-col justify-center gap-y-4 items-center">
                     <Text
                        styles="text-red-500 font-semibold text-xs"
                        content={'WHY CHOOSE US'}
                     />
                     <div className="flex flex-col max-w-sm text-center">
                        <Text
                           styles="text-black font-semibold text-2xl"
                           content={`People choose us because we `}
                        />
                        <Text
                           styles="text-black font-semibold text-2xl"
                           content={`serve the best for everyone`}
                        />
                     </div>
                  </div>
               </div>
               <div className="row-span-2 0">
                  <div className="h-full grid grid-rows-2 gap-y-6">
                     <div className="0 h-full grid grid-cols-2 gap-x-8">
                        <div className=" flex justify-end gap-x-4">
                           <img src={PM} className="h-16" alt="features" />
                           <div className="flex flex-col gap-y-4">
                              <Text
                                 content={'Dedicated Product Manager'}
                                 styles={'text-md text-black font-semibold'}
                              />
                              <div className="flex flex-col max-w-sm text-center">
                                 <Text
                                    styles="text-gray-600 font-thin text-sm"
                                    content={
                                       'With lots of unique blocks, you can'
                                    }
                                 />
                                 <Text
                                    styles="text-gray-600 font-thin text-sm"
                                    content={
                                       'easily build a page without coding'
                                    }
                                 />
                                 <Text
                                    styles="text-gray-600 font-thin text-sm"
                                    content={'Build your next landing page.'}
                                 />
                              </div>
                           </div>
                           <div className="bg-violet-400"></div>
                        </div>
                        <div className=" flex justify-start gap-x-4">
                           <img src={Task} className="h-16" alt="features" />
                           <div className="flex flex-col gap-y-4">
                              <Text
                                 content={'Organized tasks'}
                                 styles={'text-md text-black font-semibold'}
                              />
                              <div className="flex flex-col max-w-sm text-center">
                                 <Text
                                    styles="text-gray-600 font-thin text-sm"
                                    content={
                                       'With lots of unique blocks, you can'
                                    }
                                 />
                                 <Text
                                    styles="text-gray-600 font-thin text-sm"
                                    content={
                                       'easily build a page without coding'
                                    }
                                 />
                                 <Text
                                    styles="text-gray-600 font-thin text-sm"
                                    content={'Build your next landing page.'}
                                 />
                              </div>
                           </div>
                           <div className="bg-violet-400"></div>
                        </div>
                     </div>
                     <div className=" h-full grid grid-cols-2 gap-x-8">
                        <div className=" flex justify-end gap-x-4">
                           <img
                              src={Feedback}
                              className="h-16"
                              alt="features"
                           />
                           <div className="flex flex-col gap-y-4">
                              <Text
                                 content={'Easy feedback sharing'}
                                 styles={'text-md text-black font-semibold'}
                              />
                              <div className="flex flex-col max-w-sm text-center">
                                 <Text
                                    styles="text-gray-600 font-thin text-sm"
                                    content={
                                       'With lots of unique blocks, you can'
                                    }
                                 />
                                 <Text
                                    styles="text-gray-600 font-thin text-sm"
                                    content={
                                       'easily build a page without coding'
                                    }
                                 />
                                 <Text
                                    styles="text-gray-600 font-thin text-sm"
                                    content={'Build your next landing page.'}
                                 />
                              </div>
                           </div>
                           <div className=""></div>
                        </div>
                        <div className="flex justify-start gap-x-4">
                           <img
                              src={Deadline}
                              className="h-16"
                              alt="features"
                           />
                           <div className="flex flex-col gap-y-4">
                              <Text
                                 content={'Never miss deadline'}
                                 styles={'text-md text-black font-semibold'}
                              />
                              <div className="flex flex-col max-w-sm text-center">
                                 <Text
                                    styles="text-gray-600 font-thin text-sm"
                                    content={
                                       'With lots of unique blocks, you can'
                                    }
                                 />
                                 <Text
                                    styles="text-gray-600 font-thin text-sm"
                                    content={
                                       'easily build a page without coding'
                                    }
                                 />
                                 <Text
                                    styles="text-gray-600 font-thin text-sm"
                                    content={'Build your next landing page.'}
                                 />
                              </div>
                           </div>
                           <div className="bg-violet-400"></div>
                        </div>
                     </div>
                  </div>
                  <div className="row-span-1 bg-red-600"></div>
               </div>
               <div className="row-span-1  h-full">
                  <div className="h-full w-full flex justify-between px-36">
                     <div className=" h-full grid grid-rows-2">
                        <div className="flex items-center">
                           <Text
                              content={'Ready to launch your next project?'}
                              styles="text-lg font-bold"
                           />
                        </div>
                        <div className="">
                           <Text
                              content={
                                 'With lots of unique blocks, you can easily build a page without'
                              }
                              styles="text-gray-600 font-thin text-sm"
                           />
                           <Text
                              content={'coding. Build your next landing page.'}
                              styles="text-gray-600 font-thin text-sm"
                           />
                        </div>
                     </div>
                     <div className="flex items-center">
                        <Button
                           text="Get Started a Project"
                           styles="bg-primary text-white w-48"
                           onClick={navigateHandler}
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </motion.section>
   );
};

export default WhyChooseUs;
