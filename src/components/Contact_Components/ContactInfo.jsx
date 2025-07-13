import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import { Link } from 'react-router-dom';

const ContactInfo = () => {
  return (
    <div className='bg-[#F4F4F4] rounded-[25px] p-10'>
        <h3 className='text-2xl text-[#303030] font-[Poppins] font-semibold leading-[30px] mb-4'>Let’s Keep in Touch!</h3>
        <p className='w-[467px] text-xl text-[#303030] font-[Montserrat] font-normal leading-[30px] mb-10'>We would love to hear from you. Contact us for any inquiries you might have for us.</p>
        <ul className='flex flex-col gap-y-3 mb-14'>
            <li className='flex items-center gap-x-6'>
                <FaPhoneAlt className='text-xl text-[#646464]'/>
                <Link to='tel:123456789' className='text-base text-[#303030] font-[Montserrat] font-bold leading-6'>+1 (555) 123-4567</Link>
            </li>
            <li className='flex items-center gap-x-6'>
                <IoIosMail className='text-xl text-[#646464]'/>
                <Link to='mailto:information@eshop.com' className='text-base text-[#303030] font-[Montserrat] font-bold leading-6'>information@eshop.com</Link>
            </li>
            <li className='flex items-center gap-x-6'>
                <ImLocation className='text-xl text-[#646464]'/>
                <Link to='https://maps.app.goo.gl/jC8wKByXR5RisGeK7' target='_blank' className='text-base text-[#303030] font-[Montserrat] font-bold leading-6'>123 Main Street, Suite 105, Anytown USA</Link>
            </li>
        </ul>
        <div>
            <h4 className='inline-block text-xl text-[#303030] font-[Montserrat] font-bold leading-[30px] pb-1 border-b-[4px] border-b-[#FF624C] mb-6'>Opening Hours</h4>
            <ul className='flex flex-col gap-y-2'>
                <li className='text-base text-[#303030] font-[Montserrat] font-normal leading-6'><span className='font-bold mr-3'>MON to FRI:</span>08:00 AM - 04:00 PM</li>
                <li className='text-base text-[#303030] font-[Montserrat] font-normal leading-6'><span className='font-bold mr-3'>SAT to SUN:</span>09:00 AM - 03:00 PM</li>
            </ul>
        </div>

    </div>
  )
}

export default ContactInfo