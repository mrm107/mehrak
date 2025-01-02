"use client";
import Image from "next/image";
import React from "react";
import Card from "./icons/Card";
import Login from "./icons/Login";
import Search from "./icons/Search";
import Link from "next/link";
import Category from "./Category";
import { useUserContext } from "@/app/UserContext";
import ProfileIcons from "./icons/ProfileIcons";
import HambergerMenu from "./icons/HambergerMenu";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const { mobile } = useUserContext();
  const rout = usePathname();
  console.log(rout);

  return (
    <div
      className={`w-full md:pt-4 font-vazirmatn sticky top-0 max-md:static bg-white z-40 max-md:px-4 max-md:border-b max-md:border-aquaBlue max-md:py-2 ${
        (rout === "/profile/me" || rout === "/profile/address/new" || rout.includes("/profile/order/info")) &&
        "max-md:hidden"
      }`}
    >
      <div className="container mx-auto py-4 max-md:py-0 max-md:pt-4  ">
        <div className="flex justify-between w-full">
          <div className="flex items-end w-[60%]">
            <i className="ml-4 hidden max-md:block">
              <HambergerMenu />
            </i>
            <Link href={"/"}>
              <Image
                alt="logo-mehra"
                src={"/Mehra.png"}
                width={167}
                height={27}
                className="w-[167px] max-md:w-[92px] max-md:h-9"
              />
            </Link>

            <div className="border  max-md:hidden lightGrayBlue2 rounded-3xl w-[573px] px-6 py-3 mr-14 flex items-center justify-between text-customGray ">
              <input
                type="text"
                className="w-[90%]  border-none outline-none  text-lg "
                placeholder="جستجوی محصول ، تولیدکننده و.."
              />
              <Search />
            </div>
          </div>
          <div className="flex items-center w-[30%] justify-end">
            {mobile ? (
              <>
                <Link href={"/profile/me"} className="cursor-pointer">
                  <ProfileIcons />
                </Link>
              </>
            ) : (
              <Link
                href={"/login"}
                className="flex border rounded-lg py-3 px-3 max-md:px-1 max-md:py-1 items-center cursor-pointer text-slate-custom font-medium"
                aria-label="Login/Register"
              >
                <Login />
                <span className="mr-4 max-md:hidden">ورود / ثبت نام</span>
              </Link>
            )}
            <i className="cursor-pointer mr-6">
              <Card />
            </i>
          </div>
        </div>
      </div>
      <Category />
    </div>
  );
};

export default Navbar;
