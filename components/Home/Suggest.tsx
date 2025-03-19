import Link from "next/link";
import React from "react";

interface MediaFile {
  conversion_links?: {
    large_thumbnail_260_260?: string;
  };
}

// Define the type for each item in the data
interface Item {
  media_files: MediaFile[];
}

// Define the type for the Suggest component's data prop
interface SuggestProps {
  data: {
    id: string;
    title: string;
    items: Item[];
  };
  dark: boolean;
}

export default function Suggest({ data, dark }: SuggestProps) {

  const getRandomImage = () => {
    // جستجو در media_files هر item و پیدا کردن large_thumbnail_260_260
    const availableImages = data.items.flatMap(
      (item) =>
        item.media_files
          .map((media) => media.conversion_links?.large_thumbnail_260_260)
          .filter((link) => link) // فقط لینک‌هایی که وجود دارند
    );

    if (availableImages.length === 0) return; // اگر هیچ تصویری موجود نبود

    // انتخاب یک تصویر به‌صورت تصادفی
    const randomIndex = Math.floor(Math.random() * availableImages.length);
    return availableImages[randomIndex];
  };

  return (
    <div
      className={`w-full   rounded-2xl p-4 ${
        dark ? "bg-[#101010]" : "bg-white border border-lightGrayBlue2 "
      } `}
    >
      <div className="w-full  justify-center flex-col items-center mb-5 hidden max-md:flex">
        <p className={`${dark ?"text-white" : 'text-charcoal'} text-[10px] font-light`}>پیشنهاد مهرا</p>
        <p className={`${dark ? "text-white" :"text-customGray"} font-black mt-1`}>دیگه وقتشه زبان یاد بگیری!</p>

      </div>
      <div className="grid grid-cols-[auto_414px] gap-4 max-md:grid-cols-1">
        <div className="grid grid-cols-4 gap-4 max-md:grid-cols-3">
          <div className=" col-span-2 mt-7 max-md:hidden" >
            <p
              className={`${
                dark ? "text-CloudGray" : "text-charcoal"
              } font-light`}
            >
              پیشنهاد اینطوریاس
            </p>
            <p
              className={`${
                !dark ? "text-customGray" : "text-white"
              } font-bold text-2xl`}
            >
              {data.title}
            </p>
            <Link
              href={`/collections/show/${data.id}`}
              className={`flex items-center mt-3 ${
                dark ? "text-[#C4C4C4]" : "text-charcoal"
              }  font-light text-xl cursor-pointer`}
            >
              مشاهده همه
              <span className="mr-3">
                <svg
                  width="19"
                  height="17"
                  viewBox="0 0 19 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.914062 9.20312C0.71875 9.00781 0.640625 8.77344 0.640625 8.5C0.640625 8.26562 0.71875 8.03125 0.914062 7.83594L7.78906 1.27344C8.17969 0.921875 8.76562 0.921875 9.11719 1.3125C9.46875 1.66406 9.46875 2.28906 9.07812 2.64062L3.88281 7.5625H17.2031C17.7109 7.5625 18.1406 7.99219 18.1406 8.5C18.1406 9.04688 17.7109 9.4375 17.2031 9.4375H3.88281L9.07812 14.3984C9.46875 14.75 9.46875 15.3359 9.11719 15.7266C8.76562 16.1172 8.17969 16.1172 7.78906 15.7656L0.914062 9.20312Z"
                    fill="#36BABB"
                  />
                </svg>
              </span>
            </Link>
          </div>
          <div
            className={`"rounded-lg w-[197px] h-[197px]  max-md:w-[98px] max-md:h-[98px] ${
              dark ? "border-none" : "border  rounded-lg"
            } p-2"`}
          >
            <img
              src={getRandomImage()}
              alt="Random Product"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>{" "}
          <div
            className={`"rounded-lg w-[197px] h-[197px]  max-md:w-[98px] max-md:h-[98px] ${
              dark ? "border-none" : "border  rounded-lg"
            } p-2"`}
          >
            <img
              src={getRandomImage()}
              alt="Random Product"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>{" "}
          <div
            className={`"rounded-lg w-[197px] h-[197px] max-md:w-[98px] max-md:h-[98px] ${
              dark ? "border-none" : "border  rounded-lg"
            } p-2"`}
          >
            <img
              src={getRandomImage()}
              alt="Random Product"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>{" "}
          <div
            className={`"rounded-lg w-[197px] h-[197px] max-md:w-[98px] max-md:h-[98px] ${
              dark ? "border-none" : "border rounded-lg "
            } p-2"`}
          >
            <img
              src={getRandomImage()}
              alt="Random Product"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>{" "}
          <div
            className={`"rounded-lg w-[197px] h-[197px] max-md:w-[98px] max-md:h-[98px] ${
              dark ? "border-none" : "border  rounded-lg "
            } p-2"`}
          >
            <img
              src={getRandomImage()}
              alt="Random Product"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>{" "}
          <div
            className={`"rounded-lg w-[197px] max-md:w-[98px] max-md:h-[98px] h-[197px] ${
              dark ? "border-none" : "border  rounded-lg"
            } p-2"`}
          >
            <img
              src={getRandomImage()}
              alt="Random Product"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>{" "}
        </div>

        <div
          className={` h-[416px] rounded-lg max-md:hidden ${
            dark ? "border-none" : "border  rounded-lg"
          } p-2`}
        >
          <img
            src={getRandomImage()}
            alt="Random Product"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
