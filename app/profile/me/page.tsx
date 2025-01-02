'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import MyOrderBox from '@/components/Profile/MyOrderBox';
import { useQuery } from '@tanstack/react-query';
import { getStatus } from '@/utils/api/status';

const Page: React.FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["status", "getOrdersStatus"],
    queryFn: getStatus,
  });


  return (
    <div>
      <div className="flex mb-3 max-md:mb-0 relative max-md:bg-lightBlueGray max-md:pt-4  max-md:border-b">

        <div
          className="relative"
        >
          <p
            className={`px-5 cursor-pointer mb-2  text-turquoise`}
          >
            فعالیت‌ها
          </p>
          <motion.div
            layoutId="underline"
            className="absolute rounded-2xl bottom-0 left-0 w-full mt-2"
            style={{
              height: '3px',
              backgroundColor: '#36BABB',
            }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        </div>
      </div>
      <div className='flex items-center justify-between max-md:px-4'>
        <p className='text-lg text-customGray mt-9 mb-2 max-md:text-sm'>سفارشات من</p>
        <Link href={"/profile/order"} className='text-aquaBlue text-lg max-md:text-xs	'>مشاهده همه</Link>
      </div>

      <div className='border w-full px-5 max-md:px-4 py-6 md:rounded-2xl bg-lightBlueGray border-lightGrayBlue2 grid grid-cols-3 gap-7 max-md:gap-4'>
        {isLoading && (
          <>
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="flex flex-row border-lightGrayBlue2 rounded-2xl border py-3 px-5 max-md:px bg-white animate-pulse max-md:flex-col max-md:items-center max-md:gap-3 max-md:py-4 max-md:px-0"
              >
                <div className="w-10 h-10 bg-lightGrayBlue2 rounded-full max-md:mb-3"></div>
                <div className="ml-5 max-md:ml-0 max-md:w-full max-md:text-center lg:mx-4">
                  <div className="h-4 bg-lightGrayBlue2 rounded w-20 mb-2 max-md:mx-auto"></div>
                  <div className="h-4 bg-lightGrayBlue2 rounded w-20 mb-2 max-md:mx-auto hidden max-md:block"></div>
                  <div className="h-4 bg-lightGrayBlue2 rounded w-32 max-md:mx-auto max-md:hidden"></div>
                </div>
              </div>
            ))}
          </>
        )}

        {data?.data?.length === 0 ? (
          <>
            <MyOrderBox data={{ title: "جاری", count: 0 }} />
            <MyOrderBox data={{ title: "تحویل شده", count: 0 }} />
            <MyOrderBox data={{ title: "لغو شده", count: 0 }} />
          </>

        ) : (
          data?.data?.map((item: { id: string; title: string; count: number }) => (
            <MyOrderBox key={item.id} data={item} />
          ))
        )}


      </div>
      <div className='flex items-center justify-between max-md:px-4'>
        <p className='text-lg text-customGray mt-9 mb-2 max-md:text-sm'>لیست و اطلاع رسانی‌ها</p>
        <Link href={"/profile/wishlists"} className='text-aquaBlue text-lg max-md:text-xs	'>مشاهده همه </Link>
      </div>

      <div className='border ronded-2xl w-full px-5 py-6 md:rounded-2xl bg-lightBlueGray border-lightGrayBlue2 grid grid-flow-col gap-7 max-md:gap-3'>
        <MyOrderBox data={{ title: "لیست های من", count: 0 }} />
        <MyOrderBox data={{ title: "ذخیره شده", count: 0 }} />
        <MyOrderBox data={{ title: "اطلاع رسانی", count: 0 }} />

      </div>

    </div>
  )
};

export default Page;