import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = () => {
   const [rating, setRating] = useState(0);
   const [hover, setHover] = useState(null);

   return (
      <div className="flex">
         {[...Array(5)].map((star, index) => {
            const ratingValue = index + 1;
            return (
               <label key={index}>
                  <input
                     type="radio"
                     name="rating"
                     value={ratingValue}
                     onClick={() => setRating(ratingValue)}
                     className="hidden"
                  />
                  <FaStar
                     className="cursor-pointer"
                     color={
                        ratingValue <= (hover || rating) ? '#FCAD38' : '#FCAD38'
                     }
                     size={16}
                     onMouseEnter={() => setHover(ratingValue)}
                     onMouseLeave={() => setHover(null)}
                  />
               </label>
            );
         })}
      </div>
   );
};

export default Rating;
