"use client";
import React from "react";

import LastVisite from "@/components/Profile/LastVisite";
import { motion } from "framer-motion";
import Link from "next/link";
import Back from "@/components/icons/Back";

const Page: React.FC = () => {
  return (
    <div>
      <>
      <Link href={"/profile/me"} className="hidden max-md:block mt-7 px-4 ">
          <p className="text-text-sm flex text-customGray items-center	">
            <Back />
            <span className="mr-4">بازدید‌های اخیر</span>
          </p>
        </Link>
        <div className="flex relative pr-10  max-md:mt-8 max-md:border-b ">
          <div className="relative">
            <p
              className={`px-5 cursor-pointer mb-2  text-turquoise
`}
            >
              بازدید های اخیر{" "}
            </p>
            <motion.div
              layoutId="underline"
              className="absolute rounded-2xl bottom-0 left-0 w-full mt-2 max-md:px-4"
              style={{
                height: "3px",
                backgroundColor: "#36BABB",
              }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          </div>
        </div>
        <div className="border max-md:border-none rounded-2xl py-6 px-7 max-md:px-4 flex flex-col gap-2">
          <LastVisite />
          <LastVisite />
          <LastVisite />
          <LastVisite />
          <LastVisite />
          <LastVisite />
          <LastVisite />
        </div>
      </>
    </div>
  );
};

export default Page;
