import React from 'react';

const Button = ({ isIcon = false, icon, styles, text, onClick }) => {
   return (
      <button
         className={`px-4 py-2 rounded-lg transition duration-300 ${styles} font-semibold`}
         onClick={onClick}
      >
         {isIcon ? (
            <span className="flex items-center">
               {icon} {/* Insert icon if provided */}
               <span className="ml-2">{text}</span>{' '}
               {/* Add text with spacing */}
            </span>
         ) : (
            text
         )}
      </button>
   );
};

export default Button;
