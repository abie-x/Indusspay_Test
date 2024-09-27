import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUs = () => {
   return (
      <motion.section
         className="h-screen bg-indigo-200"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
      ></motion.section>
   );
};

export default WhyChooseUs;
