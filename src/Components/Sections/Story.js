import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Text from '../Common/Text';
import Founder from '../../Assets/Founder.png';
import FounderMd from '../../Assets/Founder-md.png';
import FounderSm from '../../Assets/Founder-sm.png';

// Animation variants
const fadeInUp = {
   hidden: { opacity: 0, y: 30 },
   visible: { opacity: 1, y: 0, transition: { duration: 2 } },
};

const fadeInLeft = {
   hidden: { opacity: 0, x: -100 },
   visible: { opacity: 1, x: 0, transition: { duration: 2 } },
};

const Story = () => {
   // Reference for the section
   const ref = useRef(null);
   // Trigger animation when in view
   const isInView = useInView(ref, { once: true, threshold: 0.3 });

   return (
      <motion.section
         ref={ref}
         className="h-screen"
         initial="hidden"
         animate={isInView ? 'visible' : 'hidden'}
         variants={{
            visible: { transition: { staggerChildren: 0.3 } },
            hidden: {},
         }}
      >
         {/* PC layout */}
         <div className="hidden lg:grid lg:grid-cols-1 min-h-screen p-4 px-48">
            <motion.div className="h-full grid grid-rows-9 gap-y-2">
               {/* Text Section */}
               <motion.div className="row-span-2 py-2" variants={fadeInUp}>
                  <div className="h-full flex flex-col justify-between">
                     <Text
                        content={'OUR STORY'}
                        styles="text-red-500 font-semibold text-xs"
                     />
                     <div>
                        <Text
                           content={'We know how everything works'}
                           styles="text-black font-semibold text-2xl"
                        />
                        <Text
                           content={'and why your business is failing'}
                           styles="text-black font-semibold text-2xl"
                        />
                        <Text
                           content={'over and over again'}
                           styles="text-black font-semibold text-2xl"
                        />
                     </div>
                  </div>
               </motion.div>

               {/* Image Section */}
               <motion.div className="row-span-5" variants={fadeInLeft}>
                  <div className="h-full grid grid-cols-5">
                     {/* Left-side image */}
                     <div className="col-span-2 flex justify-start items-end h-full">
                        <img
                           src={Founder}
                           className="h-80 w-full object-contain rounded-lg"
                           alt="Founder"
                        />
                     </div>

                     {/* Right-side images */}
                     <div className="col-span-3">
                        <div className="h-full grid grid-rows-3">
                           <motion.div
                              className="row-span-2 grid grid-cols-3 gap-x-12"
                              variants={fadeInUp}
                           >
                              <div className="col-span-1">
                                 <img
                                    src={FounderMd}
                                    className="object-contain h-56"
                                    alt="founder-md"
                                 />
                              </div>
                              <div className="col-span-2 flex items-end">
                                 <img
                                    src={FounderSm}
                                    className="object-contain h-24"
                                    alt="founder-sm"
                                 />
                              </div>
                           </motion.div>
                           <motion.div
                              className="row-span-1 px-4 pr-16 flex items-center"
                              variants={fadeInUp}
                           >
                              <Text
                                 content={
                                    'We share common trends and strategies for improving your rental income and making sure you stay in high demand. With lots of unique blocks, you can easily build a page without coding.'
                                 }
                                 styles="text-gray-600 text-md"
                              />
                           </motion.div>
                        </div>
                     </div>
                  </div>
               </motion.div>

               {/* Statistics Section */}
               <motion.div className="row-span-2" variants={fadeInUp}>
                  <div className="h-full grid grid-cols-3 gap-12">
                     <div className="flex flex-col justify-center text-center px-12 gap-y-2">
                        <Text content={'1M+'} styles="text-3xl font-bold" />
                        <Text
                           content={
                              'Customers visit Omega every month to get their service done'
                           }
                           styles="text-sm"
                        />
                     </div>
                     <div className="flex flex-col justify-center text-center px-12 gap-y-2">
                        <Text content={'92%'} styles="text-3xl font-bold" />
                        <Text
                           content={
                              'Satisfaction rate comes from our awesome customers'
                           }
                           styles="text-sm"
                        />
                     </div>
                     <div className="flex flex-col justify-center text-center px-16 gap-y-2">
                        <Text content={'4.9/5.0'} styles="text-3xl font-bold" />
                        <Text
                           content={
                              'Average customer ratings we have got all over the internet'
                           }
                           styles="text-sm"
                        />
                     </div>
                  </div>
               </motion.div>
            </motion.div>
         </div>
      </motion.section>
   );
};

export default Story;
