import React from 'react';

interface MediaFile {
  main_link: string;
}

interface Gallery {
  media_files: MediaFile[];
}

interface AllPublisherProps {
  data: Gallery[];
}

export default function AllPublisher({ data }: AllPublisherProps) {
  return (
    <div>
      <div className='w-full flex items-center justify-between max-md:px-4'>
        <p className='text-2xl font-bold text-customGray max-md:text-base'>ناشرین منتخب</p>
        <p className='text-aquaBlue font-light text-xl max-md:text-xs'>مشاهده همه </p>
      </div>
      <div className='flex justify-between  max-md:grid max-md:grid-cols-4'>
        {data.map((item: Gallery) => (
          <img
            key={item.media_files[0].main_link} // Add a unique key prop
            className='w-[133px] h-[133px] max-md:w-[86px] max-md:h-[86px]'
            src={item.media_files[0].main_link}
            alt="Publisher"
          />
        ))}
      </div>
    </div>
  );
}
