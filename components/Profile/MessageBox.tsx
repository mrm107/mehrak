import React from "react";
import Copy from "../icons/Copy";

const MessageBox: React.FC = () => {
  return (
    <div className="w-full rounded-2xl bg-lightBlueGray text-customGray p-6 max-md:p-4">
      <p className="text-lg font-light max-md:text-xs ">
        به پاس اینکه در نظر سنجی ما شرکت کردید یک کد تخفیف 200 هزارتومنی تقدیم
        شما می گردد.
      </p>
      <div className="flex w-fit">
        <p className="bg-lightGrayBlue text-lg px-7 py-3 rounded-lg my-5">Mehra@1401takhfif</p>
        <button className="bg-aquaBlue mr-2 text-lg px-3 rounded-lg my-5"><Copy/></button>

      </div>
      <div className="flex justify-between w-full">
        <p className="font-medium max-md:text-xs	">قابل استفاده تا 28 فروردین 1401</p>
        <p className="font-light max-md:hidden	">28 اسفند 1400</p>
      </div>
    </div>
  );
};

export default MessageBox;
