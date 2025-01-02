"use client";
import React, { useState } from "react";
import Back from "../icons/Back";
import { Input } from "../ui/input";
import ShowPass from "../icons/ShowPass";
import UnShowPass from "../icons/UnShowPass";
import Arrow from "../icons/Arrow";
import { Button } from "../ui/button";
import { sendOtpForce } from "@/utils/api/otpforce";
import toast from "react-hot-toast";
import { VerifyPass } from "@/utils/api/VerifyPass";
import { useUserContext } from '@/app/UserContext';
import { setToken } from "@/utils/helper/setToken";
import { useRouter } from "next/navigation";
interface PasswordProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  phoneNumber: string;
}
const Password: React.FC<PasswordProps> = ({ setStep, phoneNumber }) => {
  const [password, setPassword] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);
  const Token: string = localStorage.getItem("temporary_token") ?? "";
  const [loading, setLoading] = useState<boolean>(false);
  const rout = useRouter()

  const { setUserData } = useUserContext();



  const checkPass = () => {
    setLoading(true);
    VerifyPass(password, Token)
      .then((res) => {

        if (res.success) {
          toast.success("با موفقیت وارد شدید")
          setToken(res.data.token)

          localStorage.removeItem("temporary_token")

          rout.push("/")
          setUserData(res.data.user)
        } else {
          toast.error(res.data.message);
        }
      })
      .catch(() => {
        toast.error("مشکلی پیش آمد");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const sendOtpForced = () => {
    sendOtpForce(phoneNumber, Token).then((res) => {
      if (res.success) {
        toast.success(res.data.message);
        setStep(2);
      }
    });
  };
  return (
    <div className="px-14 max-md:px-4">
      <div className="mt-8 flex items-center w-[60%] justify-between">
        <i className="cursor-pointer" onClick={() => setStep(0)}>
          <Back />
        </i>
        <p className="text-darkGray text-2xl">رمز عبور</p>
      </div>
      <div>
        <div >
          <p className="text-lg text-darkGray mt-24 max-md:mt-9">رمز عبور خود را وارد کنید</p>
          <div className="bg-white flex items-center justify-center mt-4 border rounded-2xl px-4 border-vibrantOrange ">
            {!show ? (
              <i onClick={() => setShow(true)} className="cursor-pointer">
                <ShowPass />
              </i>
            ) : (
              <i className="cursor-pointer" onClick={() => setShow(false)}>
                <UnShowPass />
              </i>
            )}
            <Input
              value={password}
              dir="ltr"
              onChange={(e) => setPassword(e.target.value)}
              type={!show ? "password" : "text"}
              className="text-2xl w-[90%] border-none rounded-2xl py-6"
            />
          </div>
        </div>
        <ul className="mt-8">
          <li
            className="my-4 text-customGray text-lg flex items-center  cursor-pointer "
            onClick={() => {
              sendOtpForced();
            }}
          >
            ورود با رمز یکبار مصرف{" "}
            <i className="mx-2">
              <Arrow />
            </i>
          </li>
          <li
            className="text-customGray text-lg flex items-center cursor-pointer  "
            onClick={() => {
              sendOtpForced();
            }}
          >
            فراموشی رمز عبور{" "}
            <i className="mx-2">
              <Arrow />
            </i>
          </li>
        </ul>
        <div className="w-full flex justify-center">
          <Button
            onClick={() => { checkPass() }}
            disabled={password.length < 4 || loading}
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
    </div>
  );
};

export default Password;
