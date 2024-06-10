import React from 'react';

const hotels = [
  {
    id: 1,
    name: 'Hôtel de la Plage',
    slug: 'hotel-de-la-plage',
    imageUrl: 'https://collezione.starhotels.com/assets/uploads/Starhotels-Collezione/Hotel-d-inghilterra/GALLERY/hir-exterior-2023.jpg',
    pricePerNight: 50000, // Prix par nuit en XOF
    // Autres propriétés de l'hôtel
  },
  {
    id: 2,
    name: 'Hôtel du Lac',
    slug: 'hotel-du-lac',
    imageUrl: 'https://files.guidedanmark.org/files/382/100175_Hotel_dAngleterre.jpg',
    pricePerNight: 75000, // Prix par nuit en XOF
    // Autres propriétés de l'hôtel
  },
  
  {
    id: 10,
    name: 'Hôtel des Palmiers',
    slug: 'hotel-des-palmiers',
    imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/8f/4f/1d/hotel-d-angleterre.jpg?w=700&h=-1&s=1',
    pricePerNight: 73000, // Prix par nuit en XOF
    // Autres propriétés de l'hôtel
  },
  
  {
    id: 3,
    name: 'Hôtel des Roses',
    slug: 'hotel-des-roses',
    imageUrl: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/37/1c/17/piscine.jpg?w=700&h=-1&s=1',
    pricePerNight: 23000, // Prix par nuit en XOF
    // Autres propriétés de l'hôtel
  },
  
  {
    id: 4,
    name: 'Hôtel du Solei',
    slug: 'Hôtel-du-Solei',
    imageUrl: 'https://www.alibabuy.com/img_hotel/9/4/4/1_336177_1.jpg',
    pricePerNight: 35000, // Prix par nuit en XOF
    // Autres propriétés de l'hôtel
  },
  
  {
    id: 5,
    name: 'Hôtel de la Tour',
    slug: 'Hôtel-de-la-Tour',
    imageUrl: 'https://mediaim.expedia.com/destination/1/353c9858e6db53842ca87bb556434e7d.jpg?impolicy=fcrop&w=360&h=224&q=medium',
    pricePerNight: 40000, // Prix par nuit en XOF
    // Autres propriétés de l'hôtel
  },
  
  {
    id: 6,
    name: 'Hôtel de la Forêt',
    slug: 'hotel-de-la-foret',
    imageUrl: 'https://images.trvl-media.com/lodging/2000000/1700000/1695700/1695660/b585ccaa.jpg?impolicy=fcrop&w=357&h=201&p=1&q=medium',
    pricePerNight: 89000, // Prix par nuit en XOF
    // Autres propriétés de l'hôtel
  },
  
  {
    id: 7,
    name: 'Hôtel de la Mer',
    slug: 'Hôtel-de-la-Mer',
    imageUrl: 'https://senegal-excursions.com/wp-content/uploads/2023/05/63cea1dc7a29e9439630b634_15.Restauration_Le-Saly-Hotel%C2%A9Lucien-Letellier-_2022-p-1600-1024x683.jpg',
    pricePerNight: 84000, // Prix par nuit en XOF
    // Autres propriétés de l'hôtel
  },
  
  {
    id: 8,
    name: 'Hôtel-du-Parc',
    slug: 'hotel-du-parc',
    imageUrl: 'https://pegase.be/fr-be/senegal/lamantin-beach-hotel/-/media/project/pegase/products/senegal/lamantin-beach-hotel/piscine-lamantin.ashx',
    pricePerNight: 75000, // Prix par nuit en XOF
    // Autres propriétés de l'hôtel
  },
  
  {
    id: 9,
    name: 'Hôtel des Champs',
    slug: 'hotel-des-champs',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxZ_pmx1xiW-44YP5UCNG5_XpQvQ8So_cM9w&s',
    pricePerNight: 55000, // Prix par nuit en XOF
    // Autres propriétés de l'hôtel
  },
  
  // Ajoutez d'autres hôtels selon votre besoin
];

const ListHotel = () => {
  return (
    <div className="flex flex-wrap">
      {hotels.map((hotel) => (
        <div key={hotel.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={hotel.imageUrl} alt={hotel.name} className="w-full h-48 object-cover" />
            <div className="p-4">
            <p className="text-red-600 mb-2">{hotel.slug}</p>
              <h3 className="text-2xl font-semibold">{hotel.name}</h3>
              <p className="text-gray-700 font-medium mb-2">{hotel.pricePerNight} XOF par nuit</p>
              {/* Autres informations sur l'hôtel */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListHotel;
