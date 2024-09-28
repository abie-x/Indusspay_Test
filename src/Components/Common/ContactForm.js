import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ContactForm = () => {
   const [formData, setFormData] = useState({
      first_name: '',
      last_name: '',
      emailId: '',
      age: '',
      gender: '',
      mobilenumber: '',
      pan_no: '',
      adhaar_no: '',
   });
   const { id } = useParams(); // Get ID from the URL
   const navigate = useNavigate(); // Use navigate instead of useHistory

   useEffect(() => {
      if (id) {
         // Fetch the contact data and pre-fill the form for editing
         fetch(
            `https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile/${id}`
         )
            .then((response) => response.json())
            .then((data) => setFormData(data));
      }
   }, [id]);

   const handleSubmit = async (e) => {
      e.preventDefault();
      if (id) {
         // PUT request if ID is present
         await fetch(
            `https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile/${id}`,
            {
               method: 'PUT',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(formData),
            }
         );
      } else {
         // POST request if no ID is present
         await fetch(
            'https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile',
            {
               method: 'POST',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(formData),
            }
         );
      }

      navigate('/info'); // Redirect to the main page after submission
   };

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
         ...prevData,
         [name]: value,
      }));
   };

   //    const handleSubmit = async (e) => {
   //       e.preventDefault();
   //       try {
   //          if (id) {
   //             // PUT request to update an existing contact
   //             await fetch(
   //                `https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile/${id}`,
   //                {
   //                   method: 'PUT',
   //                   headers: { 'Content-Type': 'application/json' },
   //                   body: JSON.stringify(formData),
   //                }
   //             );
   //          } else {
   //             // POST request to create a new contact
   //             await fetch(
   //                'https://65c0cfa6dc74300bce8cc64d.mockapi.io/Contact/profile',
   //                {
   //                   method: 'POST',
   //                   headers: { 'Content-Type': 'application/json' },
   //                   body: JSON.stringify(formData),
   //                }
   //             );
   //          }
   //          history.push('/'); // Redirect to home or list page after submission
   //       } catch (error) {
   //          console.error('Error submitting data:', error);
   //       }
   //    };

   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6 pt-24">
         <div className="bg-white p-8 rounded-lg shadow-md max-w-lg w-full">
            <h2 className="text-2xl font-bold mb-6 text-gray-700">
               {id ? 'Edit Contact' : 'Create Contact'}
            </h2>

            <form onSubmit={handleSubmit}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {/* First Name */}
                  <div>
                     <label
                        htmlFor="first_name"
                        className="block text-sm font-medium text-gray-700"
                     >
                        First Name
                     </label>
                     <input
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="First Name"
                     />
                  </div>

                  {/* Last Name */}
                  <div>
                     <label
                        htmlFor="last_name"
                        className="block text-sm font-medium text-gray-700"
                     >
                        Last Name
                     </label>
                     <input
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Last Name"
                     />
                  </div>
               </div>

               {/* Email */}
               <div className="mb-4">
                  <label
                     htmlFor="emailId"
                     className="block text-sm font-medium text-gray-700"
                  >
                     Email
                  </label>
                  <input
                     type="email"
                     name="emailId"
                     value={formData.emailId}
                     onChange={handleChange}
                     className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                     placeholder="Email"
                  />
               </div>

               {/* Age and Gender */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {/* Age */}
                  <div>
                     <label
                        htmlFor="age"
                        className="block text-sm font-medium text-gray-700"
                     >
                        Age
                     </label>
                     <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Age"
                     />
                  </div>

                  {/* Gender */}
                  <div>
                     <label
                        htmlFor="gender"
                        className="block text-sm font-medium text-gray-700"
                     >
                        Gender
                     </label>
                     <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                     >
                        <option value="" disabled>
                           Select Gender
                        </option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                     </select>
                  </div>
               </div>

               {/* Mobile Number */}
               <div className="mb-4">
                  <label
                     htmlFor="mobilenumber"
                     className="block text-sm font-medium text-gray-700"
                  >
                     Mobile Number
                  </label>
                  <input
                     type="tel"
                     name="mobilenumber"
                     value={formData.mobilenumber}
                     onChange={handleChange}
                     className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                     placeholder="Mobile Number"
                  />
               </div>

               {/* PAN and Aadhar Number */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {/* PAN Number */}
                  <div>
                     <label
                        htmlFor="pan_no"
                        className="block text-sm font-medium text-gray-700"
                     >
                        PAN Number
                     </label>
                     <input
                        type="text"
                        name="pan_no"
                        value={formData.pan_no}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="PAN Number"
                     />
                  </div>

                  {/* Aadhar Number */}
                  <div>
                     <label
                        htmlFor="adhaar_no"
                        className="block text-sm font-medium text-gray-700"
                     >
                        Aadhar Number
                     </label>
                     <input
                        type="text"
                        name="adhaar_no"
                        value={formData.adhaar_no}
                        onChange={handleChange}
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder="Aadhar Number"
                     />
                  </div>
               </div>

               {/* Submit Button */}
               <div className="mt-6">
                  <button
                     type="submit"
                     className="w-full bg-indigo-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none"
                  >
                     {id ? 'Update' : 'Submit'}
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default ContactForm;
