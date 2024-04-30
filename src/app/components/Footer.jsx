
import {
    Footer,
    FooterBrand,
    FooterCopyright,
    FooterDivider,
    FooterIcon,
    FooterLink,
    FooterLinkGroup,
  } from 'flowbite-react';

import { BsFacebook, BsInstagram, BsLinkedin } from 'react-icons/bs';

export default function FooterNew() {
    return (
      <Footer className='bg-black rounded-none p-8'>
        <div className="w-full">
          <div className="lg:grid lg:grid-cols-3 lg">
              <FooterBrand
              className='pb-1 flex-col gap-2 lg:items-start'
                href="#"
                src="/images/logo.png"
                alt="Qoptars Logo"
              >
              <div className='text-slate-500 text-center md:py-4 lg:text-left'>
              Qoptars is a drone manufacturing startup, Specialized building UAV’s that are  efficient and easy to use. Our mission is to provide our customers with the best drone experience.
              </div>
            </FooterBrand>
                <div className="flex py-6 gap-2 items-center justify-center flex-wrap lg:col-span-2 lg:flex-col">
                  <div className="">
                      
                      <FooterLinkGroup>
                      <FooterLink className='font-Mont font-medium text-slate-300' href="#">About Us</FooterLink>
                      <FooterLink className='font-Mont font-medium text-slate-300' href="#">Contact Us</FooterLink>
                      </FooterLinkGroup>
                  </div>
                  <div>
                      <FooterLinkGroup>
                      <FooterLink className='font-Mont font-medium text-slate-300' href="#">Privacy Policy</FooterLink>
                      <FooterLink className='font-Mont font-medium text-slate-300' href="#">Terms &amp; Conditions</FooterLink>
                      </FooterLinkGroup>
                  </div>
                  <div className='flex basis-full justify-center pt-4'>
                      <FooterLinkGroup className='flex-col'>
                      <div className='pb-2 font-Mont font-medium text-slate-300 text-center' href="#">Reach Out To Us</div>
                      <FooterLink className='font-Mont font-medium text-slate-400' href="tel:+919707114708">📞 +91 9707114708</FooterLink>
                      <FooterLink className='font-Mont font-medium text-slate-400' href="mailto:info@qoptars.com">✉ info@qoptars.com</FooterLink>
                      </FooterLinkGroup>
                  </div>
                </div>
          </div>
          <FooterDivider />
          <div className="w-full flex flex-col lg:flex-row items-center justify-center sm:flex sm:items-center sm:justify-between md:gap-2">
            <div className="m-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <FooterIcon href="https://www.facebook.com/Qoptars" icon={BsFacebook} target='_blank'/>
              <FooterIcon href="https://www.instagram.com/qoptars" icon={BsInstagram} target='_blank'/>
              <FooterIcon href="https://linkedin.com/company/qoptars" icon={BsLinkedin} target='_blank'/>
            </div>
            <div className='text-gray-500'>All Copyrights Reserved &#169; | Qoptars | 2024</div>
            <div className="flex space-x-6 sm:mt-0 sm:justify-center">
              <img className='max-w-[210px]' src='/images/badges.png' />
            </div>
          </div>
        </div>
      </Footer>
    );
  }
  