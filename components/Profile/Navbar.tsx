"use client"
import React from "react";
import Profile from "../icons/Profile";
import Address from "../icons/Address";
import Notif from "../icons/Notif";
import Message from "../icons/Message";
import LastSeen from "../icons/LastSeen";
import UserDetaile from "../icons/UserDetaile";
import Order from "../icons/Order";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { deleteCookie } from "cookies-next/client";
import LogOut from "../icons/LogOut";

const Navbar: React.FC = () => {

  const currentPath = usePathname()

  const itemMenu = [
    { id: 1, title: "پروفایل من", icon: <Profile />, path: "/profile/me" },
    { id: 2, title: "سفارشات من", icon: <Order />, path: "/profile/order" },
    { id: 3, title: "آدرس‌های من", icon: <Address />, path: "/profile/address" },
    { id: 4, title: "لیست و اطلاع رسانی‌ها", icon: <Notif />, path: "/profile/wishlists" },
    { id: 5, title: "پیغام‌ها", icon: <Message />, path: "/profile/message" },
    { id: 6, title: "بازدیدهای اخیر", icon: <LastSeen />, path: "/profile/recents" },
    { id: 7, title: "اطلاعات کاربری", icon: <UserDetaile />, path: "/profile/edit" },
    { id: 8, title: "خروج", icon: <LogOut />, path: "/" },
  ];

  return (
    <div>
      <ul className="mt-7 max-md:hidden">
        {itemMenu.map((item) => (
          <Link href={item.path} key={item.path}
            onClick={() => {

              if (item.id === 8) {
                deleteCookie("token")
              }
            }}
          >
            <li
              className={`flex mb-6 items-center cursor-pointer transition-all duration-300 hover:text-aquaBlue hover:scale-105 ${currentPath === item.path ? "text-aquaBlue font-bold" : "text-darkGray"
                }`}
            >
              <span className="ml-5 flex justify-center">{item.icon}</span>
              <span className="not-italic">{item.title}</span>
            </li>
          </Link>
        ))}

      </ul>
      {currentPath === "/profile/me" && (
        <ul className="hidden max-md:block">

          <div className={`w-full flex flex-col`}>
            {itemMenu.map((item) => (
              <Link href={item.path} key={item.path} className="border-t w-full p-1">
                <li className="py-2 px-4 flex text-customGray">
                  <span className="ml-5 flex justify-center">{item.icon}</span>
                  <span className="not-italic">{item.title}</span>
                </li>
              </Link>
            ))}

          </div>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
