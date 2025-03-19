import React from 'react'
import Shield from './icons/Shield';
import Repeat from './icons/Repeat';
import Truck from './icons/Truck';
import Briefcase from './icons/Briefcase';
import Users from './icons/Users';
import Gift from './icons/Gift';
import Invite from './icons/Invite';
import CreditCard from './icons/CreditCard';

export default function Topics() {
    const categories = [
        { title: 'روند ثبت اسناد', icon: <Briefcase /> },
        { title: 'پیگیری ارسال سفارش', icon: <Truck /> },
        { title: 'بازگرداندن کالا', icon: <Repeat /> },
        { title: 'شفافیت', icon: <Shield /> },
        { title: 'ورود و ثبت نام', icon: <Users /> },
        { title: 'کد تخفیف و کارت هدیه', icon: <Gift /> },
        { title: 'دعوت از دوستان', icon: <Invite /> },
        { title: 'اعتبارات', icon: <CreditCard /> },
    ];
    return (
        <div className='w-full grid grid-cols-4 gap-4 max-md:grid-cols-2 max-md:px-4 '>
            {categories.map((items, index) => (
                <div 
                    key={index} 
                    className='w-[204px] h-[136px] max-md:w-[156px] max-md:h-[74px] bg-lightBlueGray rounded-2xl flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer'
                >
                    <span className='mb-5 max-md:mb-2'>{items.icon}</span>
                    <p className='text-customGray font-light max-md:text-xs '>{items.title}</p>
                </div>
            ))}
        </div>
    )
}
