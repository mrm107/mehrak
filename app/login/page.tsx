"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import Login from '../../components/Login/Login';
import Password from '@/components/Login/Password';
import Sms from '@/components/Login/Sms';
import { useAppContext } from '../context';
import Back from '@/components/icons/Back';

const Page: React.FC = () => {
    const [step, setStep] = useState<number>(0)
    const [phoneNumber, setPhoneNumber] = useState('');
    const { hasPassword } = useAppContext();


    return (
        <div className="flex flex-col items-center justify-center h-screen p-4">
            {
                (step === 3 || step === 2) &&
                <span className='cursor-pointer md:hidden right-4 top-0 self-start mb-2 flex items-center gap-2' onClick={() => {
                    if (hasPassword) {
                        setStep(1)
                    } else {
                        setStep(0)
                    }
                }}>
                    <Back />
                    <span>
                        {
                            (step === 3 || step === 2) && "ورود کد تایید"
                        }
                    </span>
                </span>
            }
            <div className='bg-lightBlueGray rounded-2xl border max-w-[527px] w-full max-md:h-full border-lightGray' >
                <div className='w-full flex justify-center'>
                    <Image
                        className='mt-20'
                        alt='mehra-logo'
                        src={'/Mehra.png'}
                        width={163}
                        height={57}
                    />
                </div>
                {step === 0 && (
                    <Login phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} setStep={setStep} />
                )}
                {step === 1 && hasPassword && (
                    <Password phoneNumber={phoneNumber} setStep={setStep} />
                )}
                {step === 2 && (
                    <Sms setStep={setStep} phoneNumber={phoneNumber} />
                )}
                {step === 3 && (
                    <Sms setStep={setStep} phoneNumber={phoneNumber} />

                )}

            </div>
        </div>
    );
};

export default Page;
