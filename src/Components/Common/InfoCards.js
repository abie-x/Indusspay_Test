import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaTrash } from 'react-icons/fa';

const InfoCards = () => {
   const [data, setData] = useState([]);

   useEffect(() => {
      // Fetch data from API
      const fetchData = async () => {
         const response = await fetch(
            'https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile'
         );
         const result = await response.json();
         setData(result);
      };

      fetchData();
   }, []);

   const handleDelete = async (id) => {
      //Placeholder for delete functionality
      await fetch(
         `https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile/${id}`,
         {
            method: 'DELETE',
         }
      );
      setData(data.filter((item) => item.id !== id)); // Update local state
   };

   return (
      <div className="max-h-screen overflow-y-auto">
         {' '}
         {/* Enable scrolling */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 pt-16">
            {data.map((item) => (
               <div key={item.id} className="border rounded-lg p-4 shadow-lg">
                  <h3 className="text-xl font-semibold">
                     {item.first_name ? item.first_name : 'Steve'}{' '}
                     {item.last_name ? item.last_name : 'Jobs'}
                  </h3>
                  <p>Email: {item.emailId}</p>
                  <p>Age: {item.age}</p>
                  {/* Other fields... */}
                  <div className="flex justify-between mt-4">
                     <Link to={`/contact/${item.id}`} className="text-blue-500">
                        <FaEdit /> Edit
                     </Link>
                     <button
                        onClick={() => handleDelete(item.id)}
                        className="text-red-500"
                     >
                        <FaTrash /> Delete
                     </button>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
};

export default InfoCards;
