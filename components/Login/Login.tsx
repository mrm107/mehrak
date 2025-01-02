import { useAppContext } from '@/app/context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { sendOtp } from '@/utils/api/otp';

import React, { useState } from 'react';
import toast from 'react-hot-toast';

interface LoginProps {
  phoneNumber: string;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
}


const Login: React.FC<LoginProps> = ({ phoneNumber, setPhoneNumber, setStep }) => {
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false)
  const { setHasPassword } = useAppContext();
  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPhoneNumber(value);

    const phoneRegex = /^(09|989)[0-9]{9}$/;
    if (!phoneRegex.test(value)) {
      setError("شماره را صحیح وارد کنید");
    } else {
      setError('');
    }
  };

  const handleSubmit = () => {
    const phoneRegex = /^(09|989)[0-9]{9}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setError("شماره را صحیح وارد کنید");
    }
    else {
      setLoading(true)
      sendOtp(phoneNumber)
        .then(res => {
          if (res.success) {

            setHasPassword(res.data.has_password)
            localStorage.setItem('temporary_token', res.data.temporary_token)
            setError('');
            if (res.data.has_password) {
              setStep(1)

            } else {
              setStep(3)
            }
          }
        }).catch(() => {
          toast.error("مشکلی پیش آمد لطفا مجدد تلاش کنید")
          setLoading(false)
        })
        .finally(() => {
          setLoading(false)
        })
    }

  };

  return (
    <div>
      <div className='w-full flex justify-center'>
        <p className='md:text-2xl w-full flex justify-center text-darkGray mt-8'>ورود / ثبت نام</p>
      </div>
      <div className='max-md:px-4'>
        <div className='px-14 max-md:px-0'>
          <p className='text-darkGray md:text-lg md:mt-27 mt-10'>لطفا شماره موبایل خود را وارد کنید</p>            
          <Input
            className='border border-vibrantOrange rounded-[8px] md:rounded-2xl text-base md:text-xl mt-4 outline-none py-6 text-darkGray px-7'
            dir='ltr'
            type='number'
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />

          {error && <p className="text-customRed mt-2 text-lg">{error}</p>}
        </div>
        <div className='w-full flex justify-center'>
          <Button
            disabled={!!error || !phoneNumber || loading}
            className='bg-aquaBlue hover:bg-teal-500 mb-12 w-[50%] max-md:w-full mt-16 rounded-md transition-all duration-300 transform hover:scale-105 active:scale-95'
            onClick={handleSubmit}
          >
            {loading ? (
              <div className="w-5 h-5 border-4 border-t-4 border-teal-500 border-solid rounded-full animate-spin"></div>
            ) : (
              'ورود'
            )}
          </Button>
        </div>

      </div>
    </div>
  );
};

export default Login;
