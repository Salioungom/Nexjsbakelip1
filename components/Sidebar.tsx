"use client";

import Image from "next/image";
import { Home, Bell } from "lucide-react";

import Link from "next/link";
import Avatar from "@/public/ibnfadilou.jpg";
import Online from "@/public/Small.svg";

export default function Sidebar() {
  const menuList = [
    {
      group: "Principal",
      items: [
        {
          link: "/dashboard",
          icon: <Home />,
          text: "Dashboard",
        },
        {
          link: "/dashboard/hotels",
          icon: <Bell />,
          text: "Hotels",
        },
      ],
    },
  ];

  return (
    <>
      <div className="">
        <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] p-4 min-h-screen  bg-custom-bg bg-cover bg-center">
          <div>
            <h3 className="uppercase font-bold text-2xl text-white">
              red product
            </h3>
          </div>
          <div className="grow">
            <div style={{ overflow: "visible" }} className="mt-3">
              <div style={{ overflow: "visible" }}>
                {menuList.map((menu: any, key: number) => (
                  <ul key={key} className="">
                    <span className="text-white">{menu.group}</span>
                    <div className="pt-2 space-y-6">
                      {menu.items.map((option: any, optionKey: number) => (
                        <li
                          key={optionKey}
                          className="flex gap-2 cursor-pointer bg-slate-300 py-2 px-4 rounded-md hover:bg-gray-100 transition-all duration-300"
                        >
                          <Link
                            href={option.link}
                            className="flex items-center gap-2"
                          >
                            {option.icon}
                            {option.text}
                          </Link>
                        </li>
                      ))}
                    </div>
                  </ul>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-5">
            <div>
              <Image
                src={Avatar}
                alt="avatar"
                width={28}
                className="rounded-full"
              />
            </div>
            <div className="text-white text-[15px]">
              <h4 className="">Ibn Fadillou</h4>

              <div className="flex items-center space-x-2 text-sm">
              <Image src={Online} alt="Online" width={16} height={10} className="w-4 h-4" />
              <span className="text-xs">En ligne</span>
            </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
