import Image from "next/image";
import React from "react";
interface ByProductProps {
  items: {
    line_item_type: string;
    media_files: { main_link: string }[];
    title: string;
    sub_title: string;
    price_formatted: string;
    discount: string;
    total_formatted: string;
  };
}
const ByProduct: React.FC<ByProductProps> = ({ items }) => {
  return (
    <>
      {items.line_item_type === "product" && (
        <div className="w-full border px-4 max-md:px-0 flex py-4 bg-lightBlueGray rounded-md">
          <Image
            alt="product image"
            src={items.media_files[0].main_link || "fallback-image-url"}
            className="w-36 h-48 max-md:w-[113px] max-md:h-[113px]"
            loading="lazy"
            width={36}
            height={36}
            onLoadingComplete={(e) => e.classList.remove("blur-sm")}
          />
          <div className="mr-10 flex flex-col justify-between">
            <p className="text-customGray text-2xl max-md:text-sm">
              {items.title}
            </p>
            <p className="text-dark-gray max-md:text-sm">مجموعه شعر</p>
            <p className="text-dark-gray max-md:text-sm">انتشارات مهرک</p>
            {/* <p className='text-customRed'>25 تومان تخفیف</p> */}
            <p className="text-dark-gray text-lg max-md:text-sm">
              {items.total_formatted}{" "}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ByProduct;
