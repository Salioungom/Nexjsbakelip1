
import React from 'react';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Link from "next/link";
import ListHotel from '@/components/listhotel'; // Importez correctement ListHotel

const Page = () => {
  return (
    <div>
      <nav> 
        <Header />
        <div className="relative">
          <div className="absolute top-0 right-0 mt-4 mr-4">
            <Link href="/dashboard/add-hotels">
              <button className="bg-slate-600 text-white px-4 py-2 rounded-md hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Ajoutez un hotel
              </button>
            </Link>
          </div>
          <Hero />
        </div>
      </nav>
      <div>
        <ListHotel /> {/* Utilisez correctement ListHotel ici */}
      </div>
    </div>
  );
};

export default Page;
