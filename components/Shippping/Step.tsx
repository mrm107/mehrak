'use client'
import ShopCart from "../icons/ShopCart";
import Send from "../icons/Send";
import Pay from "../icons/Pay";
import { useRouter } from "next/navigation";

interface StepProps {
    currentStep: number;
  }
  
const Step: React.FC<StepProps> = ({ currentStep }) => {
  const steps = [
    { id: 0, label: "سبد خرید", icon: <ShopCart />, route: "/cart" },
    { id: 1, label: "ارسال", icon: <Send />, route: "/shipping" },
    { id: 2, label: "پرداخت", icon: <Pay />, route: "/payment" },
  ];
const rout = useRouter()
  return (
    <div>
      <div className="mt-16 w-[637px] max-md:hidden ">
        <div className="flex justify-between items-center">
          {steps.map((step) => (
            <div
            onClick={()=>{
              if(step.id === currentStep || step.id <= currentStep ){
                rout.push(`${step.route}`)
              }
            }}
              key={step.id}
              className="flex flex-col items-center justify-center cursor-pointer"
            >
              <p
                className={`text-2xl ${
                  currentStep >= step.id ? "text-teal-500" : "text-gray-400"
                }`}
              >
                {step.icon}
              </p>
              <p
                className={`text-xl mt-1 ${
                  currentStep === step.id
                    ? "text-teal-500 font-medium" 
                    : currentStep > step.id
                    ? "text-teal-500 font-light"
                    : "text-customGray font-extralight"
                }`}
              >
                {step.label}
              </p>
            </div>
          ))}
        </div>

        <div className="relative mt-6">
          <div className="absolute top-1/2 left-0 w-full border-t border-gray-300 transform -translate-y-1/2"></div>

          <div
            className="absolute top-1/2 transform -translate-y-1/2 border-t-[1px] border-[#76D7D7] transition-all duration-300"
            style={{
              width: `${(currentStep / (steps.length - 1)) * 100}%`, 
            }}
          ></div>

          <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full border-2 ${
                  currentStep >= index
                    ? "bg-teal-500 border-turquoise"
                    : "bg-lightGrayBlue2"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step;
