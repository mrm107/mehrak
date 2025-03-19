"use client"
import React, { useEffect, useState } from 'react';
import Back from '../icons/Back';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../ui/input-otp';
import { Button } from '../ui/button';
import toast from 'react-hot-toast';
import { SendOtpForgetPass } from '@/utils/api/SendOtpForgetPass';
import { verifyOtpPass } from '@/utils/api/verifyOtpPass';
import { useAppContext } from '@/app/context/context';

interface SmsProps {
    setStep: React.Dispatch<React.SetStateAction<number>>;
    phoneNumber: string;
}

const ForgetPassOtp: React.FC<SmsProps> = ({ setStep, phoneNumber }) => {
    const [value, setValue] = React.useState<string>("")
    const [timeLeft, setTimeLeft] = useState<number>(120);
    const [loading, setLoading] = useState<boolean>(false)
    const Token: string = localStorage.getItem("temporary_token_Foreget_Password") ?? "";
    const { hasPassword } = useAppContext();


  const HandelerOpt = ()=>{
    verifyOtpPass(value , Token)
    .then(res =>{
        
        if(res.success){
            localStorage.setItem('temporary_token_Foreget_Password', res.data.temporary_token);

            toast.success(res.data.message)
            setStep(5)
        }
        else{
            toast.error(res.data.message)
        }
    }
    )

  }



    useEffect(() => {
        if (value.length === 6) {
            HandelerOpt()
        }
    }, [value])
    useEffect(() => {
        if (timeLeft <= 0) {
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    const handleResend = () => {

  SendOtpForgetPass(phoneNumber)
  .then(res =>{
    if(res.success){
      setStep(4)
      localStorage.setItem('temporary_token_Foreget_Password', res.data.temporary_token);
      toast.success("کد با موفقیت ارسال شد")
      setLoading(false)


    }
    
  })
        if (timeLeft > 0) return;

        setTimeLeft(120);


    };

    return (
        <div className='px-14 max-md:px-4'>
            <div className='mt-8 flex items-center justify-between w-full relative'>
                <span className='cursor-pointer hidden md:block absolute right-0' onClick={() => {
                    if (hasPassword) {
                        setStep(1)
                    } else {
                        setStep(0)
                    }
                }}>
                    <Back />
                </span>
                <p className='text-darkGray md:text-2xl text-base text-center w-full'>کد تایید</p>
            </div>
            <p className='mt-9 text-aquaBlue md:text-lg text-sm font-medium'>کد تایید برای شماره {phoneNumber} پیامک شد</p>
            <p className='text-base text-darkGray mt-7 md:text-lg font-normal'>کد تایید را وارد کنید</p>
            <div className='w-full flex justify-center mt-2'>
                <div className="space-y-2">
                    <InputOTP dir='ltr'
                        maxLength={6}
                        value={value}
                        autoFocus
                        onChange={(value) => setValue(value)}
                    >
                        <InputOTPGroup autoFocus  className='flex gap-4'>
                            <InputOTPSlot autoFocus className='md:rounded-2xl rounded-xl border border-vibrantOrange md:size-14' index={5} />
                            <InputOTPSlot className='md:rounded-2xl rounded-xl border border-vibrantOrange md:size-14' index={4} />
                            <InputOTPSlot className='md:rounded-2xl rounded-xl border border-vibrantOrange md:size-14' index={3} />
                            <InputOTPSlot className='md:rounded-2xl rounded-xl border border-vibrantOrange md:size-14' index={2} />
                            <InputOTPSlot className='md:rounded-2xl rounded-xl border border-vibrantOrange md:size-14' index={1} />
                            <InputOTPSlot className='md:rounded-2xl rounded-xl border border-vibrantOrange md:size-14' index={0} />
                        </InputOTPGroup>
                    </InputOTP>
                </div>
            </div>

            <div className='flex w-full justify-center mt-8 flex-col items-center'>
                <p className='text-darkGray text-lg max-md:text-sm'>
                    {!minutes && !seconds ? (
                        <span
                            className="cursor-pointer text-aquaBlue"
                            onClick={handleResend}
                        >
                            دریافت مجدد
                        </span>
                    ) : (
                        <>
                            {minutes < 10 ? `0${minutes}` : minutes}:
                            {seconds < 10 ? `0${seconds}` : seconds}
                            <span className='ml-2'>مانده تا دریافت مجدد کد</span>
                        </>
                    )}
                </p>

                <Button
                    onClick={() => HandelerOpt()}
                    disabled={value.length !== 6 || loading}
                    className="bg-aquaBlue max-md:h-[44px] hover:bg-teal-500 mb-12 px-[135px] py-3 max-md:w-full mt-16 rounded-md transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                    {loading ? (
                        <div className="flex justify-center items-center space-x-2">
                            <div className="animate-spin border-t-2 border-b-2 border-white border-solid w-6 h-6 rounded-full"></div>
                            <span>در حال بارگذاری...</span>
                        </div>
                    ) : (
                        'ورود'
                    )}
                </Button>
            </div>
        </div>
    );
};

export default ForgetPassOtp;
