"use client"
import React, { useEffect, useState } from 'react';
import Back from '../icons/Back';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../ui/input-otp';
import { Button } from '../ui/button';
import { useAppContext } from '@/app/context';
import { sendOtpForce } from '@/utils/api/otpforce';
import toast from 'react-hot-toast';
import { VerifyOtp } from '@/utils/api/VerifyOtp';
import { setToken } from '@/utils/helper/setToken';
import { useRouter } from 'next/navigation';
import { useUserContext } from '@/app/UserContext';

interface SmsProps {
    setStep: React.Dispatch<React.SetStateAction<number>>;
    phoneNumber: string;
}

const Sms: React.FC<SmsProps> = ({ setStep, phoneNumber }) => {
    const [value, setValue] = React.useState<string>("")
    const [timeLeft, setTimeLeft] = useState<number>(120);
    const [loading, setLoading] = useState<boolean>(false)
    const Token: string = localStorage.getItem("temporary_token") ?? "";
    const { hasPassword } = useAppContext();
    const { setUserData } = useUserContext();

    const rout = useRouter()
    const sendOtpForced = () => {

        sendOtpForce(phoneNumber, Token)
            .then(res => {
                if (res.success) {

                    toast.success(res.data.message)
                    setStep(2)
                }
            })
    }
    const HandelerOpt = () => {
        setLoading(true)
        VerifyOtp(value, Token)
            .then(res => {

                if (res.success) {
                    toast.success("با موفقیت وارد شدید")
                    setToken(res.data.token)

                    localStorage.removeItem("temporary_token")

                    rout.push("/")
                    setUserData(res.data.user)

                }
                else {
                    toast.error(res.data.message)
                }

            }).catch(() => {
                toast.error("مشکلی پیش آمد")
            }).finally(() => {
                setLoading(false)
                setValue("")
            })
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
        sendOtpForced()
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
                        onChange={(value) => setValue(value)}
                    >
                        <InputOTPGroup className='flex gap-4'>
                            <InputOTPSlot className='md:rounded-2xl rounded-xl border border-vibrantOrange md:size-14' index={5} />
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
                    className="bg-aquaBlue hover:bg-teal-500 mb-12 w-[70%] max-md:w-full mt-16 rounded-md transition-all duration-300 transform hover:scale-105 active:scale-95"
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

export default Sms;
