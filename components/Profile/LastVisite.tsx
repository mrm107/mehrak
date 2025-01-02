'use client'
import React from "react";
import { Button } from "../ui/button";
import Delete from "../icons/Delete";
import Shop from "../icons/Shop";
import Image from "next/image";

const LastVisite: React.FC = () => {
  return (
    <div className="w-full border px-4  py-4 bg-lightBlueGray rounded-md">
      <div className="flex">
        {/* <img
          className="w-36 h-48 max-md:h-[113px] max-md:w-[113px] "
          alt=""
        /> */}
        <Image
          className="w-36 h-48 max-md:h-[113px] max-md:w-[113px] "
          alt="mehra-logo"
          src="https://mehra.liara.run/storage/pooyawoods/pooyawood/_conversions/1351.jpg/thumbnail_192_192.jpg"
          width={163}
          height={57}
        />
      <div className="w-full flex  justify-between">
      <div className="flex justify-between w-full ">
          <div className="mr-10 flex flex-col justify-between">
            <p className="text-customGray text-2xl max-md:text-sm line-clamp-2">
              اینجا برای تو
            </p>
            <p className="text-dark-gray">مجموعه شعر</p>
            <p className="text-dark-gray">انتشارات مهرک</p>
            <p className="text-customRed">25 تومان تخفیف</p>
            <p className="text-dark-gray text-lg max-md:text-sm">
              4,900,000 تومان{" "}
            </p>
          </div>
          <div className="mt-14 ml-5 flex gap-4 max-md:mt-2 max-md:hidden">
            <Button className="py-1 px-4 border bg-white text-CloudGray hover:bg-CloudGray hover:text-white">
              {" "}
              <i>
                <Delete />
              </i>{" "}
              حذف
            </Button>
            <Button className="py-1 px-4 text-customRed border border-customRed bg-white hover:bg-red-500 hover:text-white transition-all">
              {" "}
              <i>
                <Shop />{" "}
              </i>{" "}
              انتقال به سبد خرید{" "}
            </Button>
          </div>
        </div>
      
      </div>
      </div>
      <div className="mt-14 ml-5 hidden gap-4 max-md:mt-2 max-md:flex w-full">
            <Button className="py-1 px-4 border bg-white text-CloudGray hover:bg-CloudGray hover:text-white">
              {" "}
              <i>
                <Delete />
              </i>{" "}
              حذف
            </Button>
            <Button className="py-1 px-4 text-customRed border border-customRed bg-white hover:bg-red-500 hover:text-white transition-all">
              {" "}
              <i>
                <Shop />{" "}
              </i>{" "}
              انتقال به سبد خرید{" "}
            </Button>
          </div>
    </div>
  );
};

export default LastVisite;
