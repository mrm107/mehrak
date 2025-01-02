"use client"
import React from 'react';
import Book from './icons/Book';
import Stationery from './icons/Stationery';
import Stuf from './icons/Stuf';
import Toy from './icons/Toy';
import Blog from './icons/Blog';

const Category: React.FC = () => {
  const category = [
    { id: 1, title: "کتاب", icon: <Book /> },
    { id: 2, title: "لوازم التحریر", icon: <Stationery /> },
    { id: 3, title: "خنزل ، پنزل", icon: <Stuf></Stuf> },
    { id: 4, title: "اسباب بازی", icon: <Toy /> },
    { id: 5, title: "مجله مهرا", icon: <Blog /> }
  ]

  return (
    <div className='w-full bg-lightBlueGray max-md:hidden'>
      <div className='container mx-auto border-t border-t-lightGrayBlue border-b border-b-turquoise'>
        <ul className='flex'>
          {category.map(item => (

              <li
              key={item.id}

                className='px-3 text-charcoal text-lg py-4 cursor-pointer border-l border-l-lightGrayBlue2 flex items-center transform transition-all duration-300 ease-in-out  hover:text-aquaBlue hover:scale-105'
              >
                <i className='ml-2'>{item.icon}</i> {item.title}
              </li>

            
          ))}
        </ul>

      </div>
    </div>
  );
};

export default Category;