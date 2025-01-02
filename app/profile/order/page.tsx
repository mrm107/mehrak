"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

import BoxOrder from "@/components/BoxOrder";
import { getOrdersStatus } from "@/utils/api/getOrderStatus";
import { useQuery } from "@tanstack/react-query";
import { fetchOrders } from "@/utils/api/getOrder";
import { SkeletonOrder } from "@/components/Skeleton/SkeletonOrder";
import Shop from "@/components/icons/Shop";
import Link from "next/link";
import Back from "@/components/icons/Back";

interface OrderStatus {
  id: number;
  title: string;
  count: number;
}
interface OrderItem {
  id: string;
}
interface OrderItem {
  id: string;
  line_item_type: string;
  media_files: { main_link: string }[];
  number: number;
  total_formatted: string;
}

interface OrderData {
  id: string;
  status_formatted: string;
  total_final_price_formatted: string;
  date: string;
  items: OrderItem[];
}

interface Order {
  id: string;
  data: OrderData;
}

interface Order {
  id: string;
  status_formatted: string;
  total_final_price_formatted: string;
  date: string;
  items: OrderItem[];
}

const Page: React.FC = () => {
  const items = [
    { id: 1, title: "جاری" },
    { id: 2, title: "تحویل شده" },
    { id: 3, title: "لغو شده" },
  ];

  const [activeItem, setActiveItem] = useState<number>(1);
  const page = 1;

  const { data, isLoading } = useQuery<{ data: OrderStatus[] }>({
    queryKey: ["status", "getOrdersStatus"],
    queryFn: getOrdersStatus,
  });
  console.log(data);

  const { data: ordersData, isLoading: ordersIsLoading } = useQuery<{
    data: Order[];
  }>({
    queryKey: ["status", "fetchOrders", page, activeItem],
    queryFn: () => fetchOrders(page, activeItem),
  });

  return (
    <div>
      <>
        <Link href={"/profile/me"} className="hidden max-md:block mt-7 px-4">
          <p className="text-text-sm flex text-customGray items-center	">
            <Back />
            <span className="mr-4"> سفارشات من</span>
          </p>
        </Link>
        <div className="flex relative pr-10 max-md:border-b max-md:mt-9">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative"
              onClick={() => setActiveItem(item.id)}
            >
              <p
                className={`px-5 max-md:text-xs cursor-pointer mb-2  py-1 ${
                  activeItem === item.id ? "text-turquoise" : "text-customGray"
                }`}
              >
                {item.title}
                {data?.data.find((order) => order.id === item.id)?.title ===
                  item.title &&
                  data?.data.find((order) => order.id === item.id)?.count !==
                    0 && (
                    <span className="mr-2 bg-lightGray px-2 rounded-md">
                      {data?.data.find((order) => order.id === item.id)?.count}
                    </span>
                  )}
              </p>
              {activeItem === item.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute rounded-2xl bottom-0 left-0 w-full mt-2"
                  style={{ height: "3px", backgroundColor: "#36BABB" }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </div>
          ))}
        </div>

        <div className="border max-md:border-none rounded-2xl border-lightGrayBlue2 py-6 px-4">
          {isLoading || ordersIsLoading ? (
            <>
              <SkeletonOrder />
              <SkeletonOrder />
              <SkeletonOrder />
            </>
          ) : ordersData?.data.length === 0 ? (
            <div className="w-full h-[426px]">
              <div className="flex justify-center items-center flex-col h-full">
                <div className="flex justify-center items-center flex-col">
                  <p className="px-5 py-5 bg-lightBlueGray rounded-full text-aquaBlue">
                    <Shop />
                  </p>
                  <p className="text-lg text-customGray mt-4">
                    هنوز سفارشی ثبت نکرده‌اید{" "}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              {ordersData?.data.map((order: Order) => (
                <BoxOrder key={order.id} data={order} wich={activeItem} />
              ))}
            </div>
          )}
        </div>
      </>
    </div>
  );
};

export default Page;
