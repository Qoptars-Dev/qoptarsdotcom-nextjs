"use client";
import { Navbar } from 'flowbite-react';

export default function DefaultNavbar() {
  return (
    <div className='w-screen'>
      <Navbar className='bg-gray-900 top-0 z-50 max-w-[900px] 2xl:max-w-[2200px] mx-auto'>
        <Navbar.Brand
          href="https://qoptars.com"
        >
          <img
            alt="Qoptars Logo"
            className="2xl:my-4 mr-3 2xl:mr-0 h-4 py-1 2xl:py-0 sm:h-9 2xl:h-16"
            src="images/logo.png"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link
            active
            href="https://qoptars.com"
            className='text-gray-100 sm:text-sm xl:text-base 2xl:text-2xl'>
              Home
          </Navbar.Link>
          <Navbar.Link
            href="https://airfpv.in/" className='text-gray-100 sm:text-sm xl:text-base 2xl:text-2xl' target='_blank'
          >
            AirFPV
          </Navbar.Link>
          <Navbar.Link href="/vayu" className='text-gray-100 sm:text-sm xl:text-base 2xl:text-2xl'>
            Vayu
          </Navbar.Link>
          <Navbar.Link href="#" className='text-gray-100 sm:text-sm xl:text-base 2xl:text-2xl'>
            Contact
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

    </div>
  )
}


