"use client";

import Arrow from "@/components/icons/Arrow";
import Back from "@/components/icons/Back";
import Factore from "@/components/icons/Factore";
import Rotate from "@/components/icons/Rotate";
import Tick from "@/components/icons/Tick";
import ByProduct from "@/components/Profile/ByProduct";
import Pay from "@/components/Profile/Pay";
import getOrderByID from "@/utils/api/getOrderByID";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
interface PayItem {
  id: string;
  is_paid: boolean;
  amount: number;
  created_at: string;
  gateway: string;
  transaction_id: string;
}

interface ByProductProps {
  id: string;

  line_item_type: string;
  media_files: { main_link: string }[];
  title: string;
  sub_title: string;
  price_formatted: string;
  discount: string;
  total_formatted: string;
}
const Page = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const { id } = useParams();
  const router = useRouter();
  const { data, isLoading } = useQuery({
    queryKey: ["Address", id],
    queryFn: () => getOrderByID(id as string),
  });
  console.log(data);

  if (isLoading) {
    return (
      <>
        <div className="border border-lightBlueGray text-darkGray">
          <div className="bg-lightBlueGray rounded-t-lg px-7 py-9">
            <div className="flex justify-between items-center">
              <div className="w-1/2 h-8 bg-gray-300 animate-pulse"></div>
              <div className="w-1/3 h-8 bg-gray-300 animate-pulse"></div>
            </div>
            <div className="flex justify-between items-end mt-6">
              <div className="flex mt-10 text-lg items-center">
                <div className="w-32 h-6 bg-gray-300 animate-pulse"></div>
                <div className="w-32 h-6 bg-gray-300 animate-pulse"></div>
              </div>
              <div className="w-32 h-6 bg-gray-300 animate-pulse"></div>
            </div>
            <hr className="mt-6" />
            <div className="flex mt-10 text-lg items-center">
              <div className="w-32 h-6 bg-gray-300 animate-pulse"></div>
              <div className="w-32 h-6 bg-gray-300 animate-pulse"></div>
            </div>
            <br />
            <div className="w-full h-6 bg-gray-300 animate-pulse"></div>
          </div>
          <div className="px-7 border-lightBlueGray mt-4 border rounded-md mx-7 py-4">
            <div className="w-1/3 h-6 bg-gray-300 animate-pulse"></div>
            <div
              className={`mt-4 overflow-hidden transition-all duration-500 ease-in-out ${
                isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <hr className="mt-4" />
              <div className="w-full h-6 bg-gray-300 animate-pulse mt-4"></div>
              <div className="w-full h-6 bg-gray-300 animate-pulse mt-4"></div>
            </div>
          </div>
          <div className="px-7 mt-7">
            <div className="flex gap-2 flex-col">
              <div className="w-full h-16 bg-gray-300 animate-pulse mt-4"></div>
              <div className="w-full h-16 bg-gray-300 animate-pulse mt-4"></div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="hidden w-full justify-between items-center max-md:flex py-4 px-3 text-customGray">
        <p className="text-sm flex items-center">
          <i className="cursor-pointer ml-3" onClick={() => router.back()}>
            <Back />
          </i>
          جزئیات سفارش
        </p>
        <p className="flex mx-6 cursor-pointer text-sm">
          <span className="ml-3">
            <Factore />
          </span>
          دریافت فاکتور
        </p>
      </div>
      <div className="border border-lightBlueGray text-darkGray">
        <div className="bg-lightBlueGray rounded-t-lg px-7 py-9">
          <div className="flex max-md:hidden justify-between items-center">
            <p className="text-2xl flex items-center">
              <i className="cursor-pointer" onClick={() => router.back()}>
                <Back />
              </i>
              جزئیات سفارش
            </p>
            <p className="flex mx-6 cursor-pointer">
              دریافت فاکتور
              <span className="mr-2">
                <Arrow />
              </span>
            </p>
          </div>
          <div className="flex justify-between items-end">
            <div className="flex mt-10 text-lg items-center max-md:hidden">
              <p className="mx-5">
                کد سفارش <span className="mx-3">{data.id}</span>
              </p>
              <p className="">
                {" "}
                تاریخ ثبت سفارش <span className="mx-3">{data.date}</span>
              </p>
            </div>
            <div className="hidden max-md:flex justify-between w-full">
              <div>
                <p>کد سفارش</p>
                <p className="mt-3">تاریخ ثبت سفارش</p>
              </div>
              <div>
                <p>{data.id}</p>
                <p className="mt-3">{data.date}</p>
              </div>
            </div>
            <p
              className={`flex items-center py-1 px-2 max-md:hidden ${
                data.status_formatted === "لغو شده توسط سیستم"
                  ? "text-customRed"
                  : "text-emeraldGreen"
              }  bg-light-gray rounded-full`}
            >
              <i className="mx-2">
                {data.status_formatted != "لغو شده توسط سیستم" && <Tick />}
              </i>
              {data.status_formatted}
            </p>
          </div>
          <hr className="mt-6" />
          <div className="flex mt-10 text-lg items-center max-md:hidden">
            <p className="mx-5">
              تحویل گیرنده{" "}
              <span className="mx-3">
                {data.address.first_name} {data.address.last_name}
              </span>
            </p>
            <p>
              شماره تلفن همراه
              <span className="mx-3">{data.address.mobile}</span>
            </p>
          </div>
          <div className="hidden max-md:flex justify-between w-full mt-5">
            <div>
              <p>تحویل گیرنده</p>
              <p className="mt-3">شماره تلفن همراه</p>
            </div>
            <div>
              <p>
                {" "}
                {data.address.first_name} {data.address.last_name}
              </p>
              <p className="mt-3">{data.address.mobile}</p>
            </div>
          </div>
          <br />
          <p className="mx-5 max-md:mx-0">
            آدرس <span className="mx-3">{data.address.full_address}</span>
          </p>
        </div>
        <div className="px-7 max-md:px-0 border-lightBlueGray mt-4 border rounded-md mx-7 py-4">
          <div className="flex justify-between items-center">
            <p className="ml-5 max-md:text-sm">
              مبلغ سفارش{" "}
              <span className="mx-3">{data.total_final_price_formatted}</span>
            </p>
            <p
              className="flex items-center cursor-pointer max-md:text-sm"
              onClick={toggleDropdown}
            >
              تاریخچه تراکنش‌ها
              <i
                className={`mx-2 max-md:mx-1 transform transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                <Rotate />
              </i>
            </p>
          </div>
          <div
            className={`mt-4 overflow-hidden transition-all duration-500 ease-in-out ${
              isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <hr className="mt-4" />
            {data.profit ? (
              <div className="flex justify-between  items-center mt-5 max-md:hidden">
                <p className="text-customRed max-md:text-sm line-clamp-1 ">
                  مبلغ تخفیف
                  <span className="mx-3 max-md:text-sm">
                    {data.profit_formatted}
                  </span>
                </p>
                <p>
                  {" "}
                  سود شما از این خرید
                  <span className="mx-3 max-md:text-sm">
                    {data.profit_formatted}
                  </span>
                </p>
              </div>
            ) : (
              ""
            )}
            {data.profit ? (
              <div className="hidden justify-between  items-center mt-5 max-md:block">
                <div className="w-full flex justify-between">
                  <p className="text-customRed max-md:text-sm line-clamp-1 ">
                    مبلغ تخفیف
                  </p>
                  <span className="mx-3 max-md:text-sm text-customRed ">
                    {data.profit_formatted}
                  </span>
                </div>
                <div className="w-full flex justify-between mt-3">
                  <p> سود شما از این خرید</p>
                  <span className="mx-3 max-md:text-sm">
                    {data.profit_formatted}
                  </span>
                </div>
              </div>
            ) : (
              ""
            )}
            <div className="mt-8 flex flex-col gap-4">
              {data.payments.map((items: PayItem, i: number) => (
                <Pay items={items} key={`${items.id}-${i}`} />
              ))}
            </div>

            <div className="px-7 mt-7 max-md:px-0">
              <div className="flex gap-2 flex-col ">
                {data.items.map((items: ByProductProps, i: number) => (
                  <ByProduct items={items} key={`${items.id}-${i}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
