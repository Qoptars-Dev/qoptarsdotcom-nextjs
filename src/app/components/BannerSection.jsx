
'use client';

import { Banner, Button } from 'flowbite-react';

function BannerSection() {
  return (
    <Banner>
      <div className="w-screen bg-amber-500 px-10 py-6 2xl:py-8 md:flex-row ">
        <div className="mb-3 flex flex-col justify-around md:mb-0 md:flex-row md:items-center lg:max-w-7xl mx-auto">

            <div className="flex flex-col items-start text-sm mb-4 md:mb-0">
                <p>Want to try VAYU for your application?</p>
                <p>Book Your Demo Now.</p>
            </div>
            <div className="flex flex-shrink-0 items-center">
                <Button className='bg-amber-700 hover:bg-amber-800' href="https://calendly.com/qoptars/vayu-product-booking" target='_blank'>Book A Demo</Button>
            </div>
        </div>
      </div>
    </Banner>
  );
}
export default BannerSection