import Link from "next/link";
import { Bell, LogOut } from "lucide-react";
import Image from "next/image";
import Avatar from "@/public/ibnfadilou.jpg";
import Online from "@/public/Small.svg";

export default function Header() {
  return (
    <header className=" mt-3 pb-3 border-b">
      <div className="flex items-center justify-between">
        <div>
          <Link href="/dashboard" className="font-bold text-2xl">
            Dashboard
          </Link>
        </div>
        <div className="flex items-center space-x-5">
          <div>
            <input
              type="text"
              placeholder="Recherche"
              className="pl-8 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-400"
            />
          </div>
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Bell />
            </div>
            <div className="relative">
              <Image
                src={Avatar}
                alt="avatar"
                width={18}
                className="rounded-full "
              />
              <Image
                src={Online}
                alt="avatar"
                width={10}
                className="z-20 absolute top-6 left-5"
              />
            </div>
            <div>
              <LogOut />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


// "use client";
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { Bell, LogOut } from "lucide-react";
// import Image from "next/image";
// import Avatar from "@/public/ibnfadilou.jpg";
// import Online from "@/public/Small.svg";
// import Link from "next/link";

// interface Admin {
//   nom: string;
//   email: string;
// }

// export default function Header() {
//   const [admin, setAdmin] = useState<Admin | null>(null);
//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem('token');

//     if (token) {
//       fetch('http://localhost:3002/api/admin', {
//         method: 'GET',
//         headers: {
//           Authorization: token,
//         },
//       })
//         .then(response => response.json())
//         .then(data => setAdmin(data))
//         .catch(error => console.error('Erreur lors de la récupération des informations de l\'utilisateur :', error));
//     }
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setAdmin(null);
//     router.push('/login');
//   };

//   return (
//     <header className="mt-3 pb-3 border-b">
//       <div className="flex items-center justify-between">
//         <div>
//           <Link href="/dashboard" className="font-bold text-2xl">
//             Dashboard
//           </Link>
//         </div>
//         <div className="flex items-center space-x-5">
//           <div>
//             <input
//               type="text"
//               placeholder="Recherche"
//               className="pl-8 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-blue-400"
//             />
//           </div>
//           <div className="flex items-center space-x-3">
//             <div className="relative">
//               <Bell />
//             </div>
//             <div className="relative">
//               {admin && (
//                 <>
//                   <Image
//                     src={Avatar}
//                     alt="avatar"
//                     width={18}
//                     className="rounded-full"
//                   />
//                   <Image
//                     src={Online}
//                     alt="online status"
//                     width={10}
//                     className="z-20 absolute top-6 left-5"
//                   />
//                   <span className="text-white">{admin.nom}</span>
//                 </>
//               )}
//             </div>
//             <div>
//               <LogOut onClick={handleLogout} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
