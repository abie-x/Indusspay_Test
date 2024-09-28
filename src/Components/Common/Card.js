import React from 'react';
import Button from './Button'; // Import your Button component
import { FaArrowRight } from 'react-icons/fa'; // Import right arrow icon

const Card = ({ imageSrc, heading, description, imageStyles, cardStyle }) => {
   return (
      <div
         className={`rounded-xl shadow-md overflow-hidden h-full ${cardStyle}`}
      >
         <div className="h-full grid grid-rows-5">
            {' '}
            {/* Set a fixed height for the grid container */}
            <div className=" row-span-2 h-full p-0 flex items-center justify-center">
               <img
                  src={imageSrc}
                  className={`${imageStyles}`}
                  alt="card-img"
               />
            </div>
            <div className="row-span-2 h-full">
               <div className="flex flex-col justify-center items-center h-full px-8 gap-y-4 text-center">
                  <p className="text-xl font-semibold text-white">{heading}</p>
                  <p className="text-sm font-extralight text-white">
                     {description}
                  </p>
               </div>
            </div>
            <div className="-span-1 h-full">
               <div className="h-full flex justify-center items-center">
                  <Button
                     styles={'text-white'}
                     isIcon={true}
                     icon={<FaArrowRight className="text-md text-white" />}
                     text={'know more'}
                  />
               </div>
            </div>{' '}
            {/* Adjust row-span to fit the grid */}
         </div>
      </div>
   );
};

export default Card;
