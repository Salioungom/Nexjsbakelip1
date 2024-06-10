


"use client";

import React, { useState } from 'react';

interface FormData {
  hotelName: string;
  address: string;
  email: string;
  phone: string;
  price: string;
  currency: string;
  photo: File | null;
}

const AddHotel = () => {
  const [formData, setFormData] = useState<FormData>({
    hotelName: '',
    address: '',
    email: '',
    phone: '',
    price: '',
    currency: 'F XOF',
    photo: null,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        photo: e.target.files[0],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle form submission
    console.log('Form data:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <a href="/dashboard/hotels" className="flex items-center text-gray-500 text-base font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
            </svg>
            Créer un nouveau hôtel
          </a>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="hotelName" className="block text-sm font-medium text-gray-700">
                Nom de l'hôtel
              </label>
              <input
                id="hotelName"
                name="hotelName"
                type="text"
                required
                className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Nom de l'hôtel"
                value={formData.hotelName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Adresse
              </label>
              <input
                id="address"
                name="address"
                type="text"
                required
                className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Adresse"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Numéro de téléphone
              </label>
              <input
                id="phone"
                name="phone"
                type="text"
                required
                className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Numéro de téléphone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="relative">
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                Prix par nuit
              </label>
              <input
                id="price"
                name="price"
                type="number"
                required
                className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pr-10"
                placeholder="Prix par nuit"
                value={formData.price}
                onChange={handleChange}
              />
              <div className="absolute inset-y-10 right-0  pr-3 flex items-center pointer-events-none">
                <span className="text-gray-500 sm:text-sm" id="currency">
                  {formData.currency}
                </span>
              </div>
            </div>
            <div>
              <label htmlFor="currency" className="block text-sm font-medium text-gray-700">
                Devise
              </label>
              <select
                id="currency"
                name="currency"
                required
                className="appearance-none rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={formData.currency}
                onChange={handleChange}
              >
                <option value="F XOF">F XOF</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                {/* Add other currencies as needed */}
              </select>
            </div>
            <div className="col-span-2">
              <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                Ajouter une photo
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  {formData.photo ? (
                    <img
                      src={URL.createObjectURL(formData.photo)}
                      alt="Preview"
                      className="mx-auto h-48 w-48 object-cover rounded-md"
                    />
                  ) : (
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H20C18.3431 8 17 9.34315 17 11V21C17 22.6569 18.3431 24 20 24H28C29.6569 24 31 22.6569 31 21V11C31 9.34315 29.6569 8 28 8Z"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M41 20C41 21.1046 40.1046 22 39 22C37.8954 22 37 21.1046 37 20C37 18.8954 37.8954 18 39 18C40.1046 18 41 18.8954 41 20Z"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4 24V41C4 42.1046 4.89543 43 6 43H42C43.1046 43 44 42.1046 44 41V24"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="photo"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-transparent-100 hover:text-black  "
                    >
                      <span>Ajouter une photo</span>
                      <input
                        id="photo"
                        name="photo"
                        type="file"
                        accept="image/*"
                        className="sr-only"
                        onChange={handlePhotoChange}
                      />
                    </label>
                  </div>
                  {/* <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p> */}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <a href="/dashboard/hotels">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Enregistrer
            </button>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddHotel;

// pages/dashboard/add-hotels.js

// import React, { useState } from 'react';
// import axios from 'axios';
// import React, { useState } from 'react';
// const AddHotel = () => {
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');
//   const [email, setEmail] = useState('');
//   const [telephone, setTelephone] = useState('');
//   const [devise, setDevise] = useState('');
//   const [pricePerNight, setPricePerNight] = useState('');
//   const [image, setImage] = useState<File | null>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('address', address);
//     formData.append('email', email);
//     formData.append('telephone', telephone);
//     formData.append('devise', devise);
//     formData.append('pricePerNight', pricePerNight);
//     if (image) {
//       formData.append('image', image);
//     }

//     try {
//       const response = await axios.post('/add-hotel', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       console.log('Hôtel ajouté:', response.data);
//     } catch (error) {
//       console.error('Erreur lors de l\'ajout de l\'hôtel:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" placeholder="Nom" value={name} onChange={(e) => setName(e.target.value)} required />
//       <input type="text" placeholder="Adresse" value={address} onChange={(e) => setAddress(e.target.value)} required />
//       <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//       <input type="text" placeholder="Téléphone" value={telephone} onChange={(e) => setTelephone(e.target.value)} required />
//       <input type="text" placeholder="Devise" value={devise} onChange={(e) => setDevise(e.target.value)} />
//       <input type="number" placeholder="Prix par nuit" value={pricePerNight} onChange={(e) => setPricePerNight(e.target.value)} required />
//       <input type="file" onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)} />
//       <button type="submit">Ajouter l'hôtel</button>
//     </form>
//   );
// };

// export default AddHotel;
