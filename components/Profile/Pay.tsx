import React from 'react';
// import moment from 'moment-jalaali';

interface PayProps {
    items: {
        id: string;
        is_paid: boolean;
        amount: number;
        created_at: string;
        gateway: string;
        transaction_id: string;
    };
}
const Pay: React.FC<PayProps> = ({ items }) => {
    return (
        <div className='w-full bg-lightBlueGray border rounded-md px-6 py-4'>
            <div className='flex justify-between text-lg max-md:text-sm'>
                {items.is_paid ? (

                    <p className='text-turquoise '>پرداخت موفق</p>
                ) : <p className='text-customRed '>پرداخت ناموفق</p>
                }

                <div className='flex'>
                    <p className='ml-16'>{items.amount.toLocaleString()} تومان</p>
                    {/* <p>{moment(items.created_at).locale('fa').format('jD jMMMM jYYYY - HH:mm')}</p> */}
                </div>
            </div>
            <p className='mt-3'>درگاه : {items.gateway}</p>
            <p className='mt-3 max-md:hidden'>شماره پیگیری پرداخت : {items.transaction_id}</p>

        </div>
    );
};

export default Pay;