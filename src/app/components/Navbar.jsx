
import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react';

function NavbarNew() {
  return (
    <Navbar className='bg-black fixed top-0 z-50 w-screen px-4'>
      <NavbarBrand href="https://qoptars.com">
        <img src="/images/logo.png" className="mr-3 h-6 sm:h-9" alt="Qoptars Logo" />
      </NavbarBrand>
      <div className="flex md:order-2 gap-2">
        <Button className='enabled:hover:bg-none focus:ring-0 focus:ring-transparent' outline={false} href="https://calendly.com/qoptars/vayu-product-booking" target='_blank'>Book Now</Button>
        <NavbarToggle className='mx-[2px] hover:bg-transparent focus:ring-0 focus:ring-transparent' />
      </div>
      <NavbarCollapse className='text-center'>
        <NavbarLink href="#" active className='text-slate-100'>
          Home
        </NavbarLink>
        <NavbarLink href="#" className='text-slate-100'>About</NavbarLink>
        <NavbarLink href="#" className='text-slate-100'>Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

export default NavbarNew