'use client';
import React, { useRef, useState } from "react";
import { Swiper as SwiperComponent, SwiperSlide, SwiperRef } from "swiper/react"; // Import SwiperRef
import { Swiper } from "swiper/types"; // Import Swiper type
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

interface MediaFile {
    order: number;
    tag: string;
    collection_name: 'desktop_slide' | 'mobile_slide';
    main_link: string;
    conversion_links: {
      cover_1300_268: string;
      thumbnail_192_192: string;
    };
  }
  
  interface Slider {
    id: number;
    title: string;
    link: string;
    color: string;
    media_files: MediaFile[];
    media_file_collection_names: string[];
  }
  
  interface SliderProps {
    data: {
      data: {
        sliders: Slider[];
      };
    };
  }
  
  export default function Slider({ data }: SliderProps) {
    const [isBeginning, setIsBeginning] = useState<boolean>(true);
    const [isEnd, setIsEnd] = useState<boolean>(false);
    const swiperRef = useRef<SwiperRef | null>(null); // Use SwiperRef instead of any

    // Handle next and previous slide navigation
    const handleNext = (): void => {
      if (swiperRef.current && !isEnd) {
        swiperRef.current.swiper.slideNext();
      }
    };

    const handlePrev = (): void => {
      if (swiperRef.current && !isBeginning) {
        swiperRef.current.swiper.slidePrev();
      }
    };

    // Update isBeginning and isEnd when slide changes
    const handleSlideChange = (swiper: Swiper): void => { // Add Swiper type
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };

    return (
      <div>
        <div className="relative">
          <SwiperComponent
            ref={swiperRef}
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            spaceBetween={10}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            className="w-full"
            onSlideChange={handleSlideChange}
          >
            {data?.data.sliders.map((slider, index) => (
              <SwiperSlide key={index}>
                {slider.media_files
                  .filter((file) => file.collection_name === "desktop_slide")
                  .map((filteredFile, fileIndex) => (
                    <img
                      key={fileIndex}
                      src={filteredFile.main_link}
                      alt="Slide Image"
                      className="w-full hidden md:block h-[370px] max-md:h-[225px]"
                    />
                  ))}

                {slider.media_files
                  .filter((file) => file.collection_name === "mobile_slide")
                  .map((filteredFile, fileIndex) => (
                    <img
                      key={fileIndex}
                      src={filteredFile.main_link}
                      alt="Slide Image"
                      className="w-full block md:hidden"
                    />
                  ))}
              </SwiperSlide>
            ))}
          </SwiperComponent>
          
          {/* Navigation buttons */}
          <div className="absolute bottom-0 z-30 mb-10 mr-[260px] max-md:hidden">
            <button
              className={`px-4 py-2 w-[45px] h-[45px] bg-white rounded-2xl ml-4 ${
                isBeginning ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              }`}
              onClick={handlePrev}
              disabled={isBeginning}
            >
              <svg
                width="12"
                height="22"
                viewBox="0 0 12 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.1094 10.7656C11.25 10.9062 11.25 11.1406 11.1094 11.2812L0.984375 21.4062C0.84375 21.5469 0.609375 21.5469 0.46875 21.4062C0.328125 21.2656 0.328125 21.0312 0.46875 20.8906L10.3125 11L0.46875 1.15625C0.328125 1.01562 0.328125 0.78125 0.46875 0.640625C0.609375 0.5 0.84375 0.5 0.984375 0.640625L11.1094 10.7656Z"
                  fill="#515869"
                />
              </svg>
            </button>
            <button
              className={`px-4 py-2 w-[45px] h-[45px] bg-white rounded-2xl ${
                isEnd ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
              }`}
              onClick={handleNext}
              disabled={isEnd}
            >
              <svg
                width="12"
                height="22"
                viewBox="0 0 12 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.84375 10.7656L10.9688 0.640625C11.1094 0.5 11.3438 0.5 11.4844 0.640625C11.625 0.78125 11.625 1.01562 11.4844 1.15625L1.64062 11L11.4844 20.8906C11.625 21.0312 11.625 21.2656 11.4844 21.4062C11.3438 21.5469 11.1094 21.5469 10.9688 21.4062L0.84375 11.2812C0.703125 11.1406 0.703125 10.9062 0.84375 10.7656Z"
                  fill="#515869"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }