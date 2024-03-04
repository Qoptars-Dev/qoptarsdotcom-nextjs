
'use client';

import { Banner, Button } from 'flowbite-react';

function BannerSection() {
  return (
    <Banner>
      <div className="w-screen bg-teal-500 text-slate-200 p-4 md:flex-row ">
        <div className="mb-3 flex flex-col justify-around md:mb-0 md:flex-row md:items-center lg:max-w-7xl mx-auto">

            <div className="flex flex-col items-start text-sm font-Mont mb-4 md:mb-0">
                <p>Want to try VAYU for your application?</p>
                <p>Book Your Demo Now.</p>
            </div>
            <div className="flex flex-shrink-0 items-center">
                <Button className='hover:bg-teal-700' href="#">Book A Demo</Button>
            </div>
        </div>
      </div>
    </Banner>
  );
}
export default BannerSection