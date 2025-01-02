import React from 'react';
import NowOrder from '../icons/NowOrder';
import Notifictions from '../icons/Notifictions';
import Saved from '../icons/Saved';
import Backed from '../icons/Backed';

interface MyOrderBoxProps {
    data: {
        title: string;
        count: number;
    };
}

const MyOrderBox: React.FC<MyOrderBoxProps> = ({ data }) => {
    return (
        <div className="flex flex-row border-lightGrayBlue2 rounded-2xl border max-md:relative max-md:text-xs py-3 px-5 max-md:px-0 max-md:py-4 bg-white max-md:flex-col max-md:items-center max-md:gap-3">
            {data.title === "اطلاع رسانی" && <Notifictions />}
            {(data.title === "ذخیره شده" || data.title === "لیست های من") && <Saved />}
            {data.title === "جاری" && <NowOrder color='#A3A3A3' />}
            {data.title === "تحویل شده" && <NowOrder color='#36BABB' />}
            {data.title === "لغو شده" && <Backed />}

           <div>

   <div className='mx-5 text-customGray'>
   <p className=' max-md:hidden'> {data.count} سفارش </p>
   <p>{data.title}</p>
   </div>
            
           </div>
        </div>
    );
};


export default MyOrderBox;
