import React from 'react';
import ClientPage from '../ClientPage';
// import { Metadata } from 'next';


// صفحه اصلی که اطلاعات محصول را از API می‌گیرد و به ClientPage ارسال می‌کند
export default function Page() {

  return (
    <div>
      <ClientPage /> {/* ارسال اطلاعات محصول به ClientPage */}
    </div>
  );
}