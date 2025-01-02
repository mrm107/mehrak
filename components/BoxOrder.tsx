import React from "react";
import Tick from "./icons/Tick";
import OrderHow from "./OrderHow";
import Arrow from "./icons/Arrow";
import Cancel from "./icons/Cancel";
import Link from "next/link";

interface OrderItem {
  id: string;
}

interface OrderData {
  id: string;
  status_formatted: string;
  total_final_price_formatted: string;
  date: string;
  items: OrderItem[];
}

interface BoxOrderProps {
  wich: number;
  data: OrderData;
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

const BoxOrder: React.FC<BoxOrderProps> = ({ wich, data }) => {
  return (
    <div className="w-full bg-lightBlueGray rounded-2xl py-9 px-8">
      <div className="flex justify-between items-center">
        <div className="flex flex-row items-center">
          {wich === 1 && (
            <p className="flex bg-white py-1 px-4 items-center w-fit text-aquaBlue max-md:hidden rounded-2xl">
              <Tick />
              <span className="mr-2">{data.status_formatted}</span>
            </p>
          )}
          {wich === 2 && (
            <p className="flex bg-white py-1 px-4 items-center w-fit text-aquaBlue rounded-2xl max-md:hidden">
              <Tick />
              <span className="mr-2">{data.status_formatted}</span>
            </p>
          )}
          {wich === 3 && (
            <p className="flex bg-white py-1 px-4 items-center w-fit max-md:hidden text-soft-red rounded-2xl">
              <Cancel />
              <span className="mr-2">{data.status_formatted}</span>
            </p>
          )}

          <p className="text-darkGray mx-6 max-md:mx-4 max-md:text-xs	 ">
            کد سفارش {data.id}
          </p>
          <p className="text-darkGray max-md:text-xs	">{data.date}</p>
        </div>
        <div>
          <p className="text-darkGray max-md:text-xs 	">
            {data.total_final_price_formatted} تومان
          </p>
        </div>
      </div>
      <div className="mt-5 flex gap-4 justify-between  items-center">
    <div className="flex gap-4">
    {data.items.map((items, _) => (
          <OrderHow key={`${items.id}-${_}`} items={items} />
        ))}
    </div>
        <Link
          href={`/profile/order/info/${data.id}`}
          className="flex text-customGray cursor-pointer"
        >
          <span className="mr-2">
            <Arrow />
          </span>
        </Link>{" "}
      </div>
      <div className="w-full flex justify-end mt-3 max-md:hidden">
        <p className="flex text-customGray mx-6 cursor-pointer">
          دریافت فاکتور{" "}
          <span className="mr-2">
            <Arrow />
          </span>
        </p>
        <Link
          href={`/profile/order/info/${data.id}`}
          className="flex text-customGray cursor-pointer"
        >
          جزئیات سفارش{" "}
          <span className="mr-2">
            <Arrow />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BoxOrder;
