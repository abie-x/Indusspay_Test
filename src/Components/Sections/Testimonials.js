import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
   return (
      <motion.section
         className="h-[50vh] bg-red-200"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
      ></motion.section>
   );
};

export default Testimonials;
