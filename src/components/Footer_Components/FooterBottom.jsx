import { Link } from 'react-router-dom'
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { ImLocation } from "react-icons/im";

const FooterBottom = () => {
  return (
    <>
      <section className='flex flex-col sm:flex-row px-2 sm:px-0 justify-between font-[Montserrat] text-[#303030] text-base font-normal leading-6 mb-[80px]'>
        <div className='mb-10 sm:mb-10 sm:mr-[167px]'>
            <div className="logo mb-10 sm:mb-[158px]">
                <img src="/images/logo.png" alt="logo" />
            </div>

            <ul>
                <li className='pl-8 relative mb-3'>
                    <FaPhoneAlt className='text-xl absolute left-0 top-0 text-[#646464]'/>
                    <Link to='tel:123456789'>+1 (555) 123-4567</Link>
                </li>
                <li className='pl-8 relative mb-3'>
                    <IoIosMail className='text-xl absolute left-0 top-0 text-[#646464]'/>
                    <Link to='mailto:information@eshop.com'>information@eshop.com</Link>
                </li>
                <li className='pl-8 relative mb-3'>
                    <ImLocation className='text-xl absolute left-0 top-0 text-[#646464]'/>
                    <Link to='https://maps.app.goo.gl/jC8wKByXR5RisGeK7' target='_blank'>123 Main Street, Suite 105, Anytown USA</Link>
                </li>
            </ul>
        </div>
        <div className='flex flex-col sm:flex-row gap-y-10 sm:gap-y-0'>
            <div className='sm:mr-[96px]'>
                <h4 className='font-[Poppins] text-xl font-semibold leading-[30px] mb-6'>Links</h4>
                <ul className='flex flex-col gap-y-3'>
                    <li className='hover:text-[#FF624C] duration-200'><Link to="/product-lists">Products List</Link></li>
                    <li className='hover:text-[#FF624C] duration-200'><Link to="#">Order Tracking</Link></li>
                    <li className='hover:text-[#FF624C] duration-200'><Link to="#">Products Guide</Link></li>
                    <li className='hover:text-[#FF624C] duration-200'><Link to="#">Shopping Cart</Link></li>
                    <li className='hover:text-[#FF624C] duration-200'><Link to="#">Tech Blog</Link></li>
                </ul>
            </div>
            <div className='sm:mr-[96px]'>
                <h4 className='font-[Poppins] text-xl font-semibold leading-[30px] mb-6'>Supports</h4>
                <ul className='flex flex-col gap-y-3'>
                    <li className='hover:text-[#FF624C] duration-200'><Link to="#">About Us</Link></li>
                    <li className='hover:text-[#FF624C] duration-200'><Link to="#">Privacy Policy</Link></li>
                    <li className='hover:text-[#FF624C] duration-200'><Link to="#">Return Policy</Link></li>
                    <li className='hover:text-[#FF624C] duration-200'><Link to="#">Help Centre</Link></li>
                    <li className='hover:text-[#FF624C] duration-200'><Link to="#">Store Locations</Link></li>
                    <li className='hover:text-[#FF624C] duration-200'><Link to="#">Careers</Link></li>
                </ul>
            </div>
            <div className='sm:mr-[80px]'>
                <h4 className='font-[Poppins] text-xl font-semibold leading-[30px] mb-6'>Categories</h4>
                <ul className='flex flex-col gap-y-3'>
                    <li className='hover:text-[#FF624C] duration-200'><Link to="#">Computers & Tablets</Link></li>
                    <li className='hover:text-[#FF624C] duration-200'><Link to="#">Mobile Phones & Accessories</Link></li>
                    <li className='hover:text-[#FF624C] duration-200'><Link to="#">TV & Home Theater</Link></li>
                    <li className='hover:text-[#FF624C] duration-200'><Link to="#">Audio & Headphones</Link></li>
                    <li className='hover:text-[#FF624C] duration-200'><Link to="#">Cameras & Camcorders</Link></li>
                    <li className='hover:text-[#FF624C] duration-200'><Link to="#">Gaming Equipment</Link></li>
                    <li className='hover:text-[#FF624C] duration-200'><Link to="#">Home Appliances</Link></li>
                </ul>
            </div>
            <div>
                <div className="top mb-[73px]">
                    <h4 className='font-[Poppins] text-xl font-semibold leading-[30px] mb-6'>Payments</h4>
                    <img src="/images/payments.png" alt="payment-methods" />
                </div>
                <div className="bottom">
                    <h4 className='font-[Poppins] text-xl font-semibold leading-[30px] mb-6'>Follow Us</h4>
                    <ul className='flex flex-col gap-y-3'>
                        <li className='hover:text-[#FF624C] duration-200'><Link to="#">Twitter</Link></li>
                        <li className='hover:text-[#FF624C] duration-200'><Link to="#">Instagram</Link></li>
                        <li className='hover:text-[#FF624C] duration-200'><Link to="#">Facebook</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <section className='flex flex-wrap px-2 sm:px-0 justify-center sm:justify-between border-t border-[#BFBFBF] mb-8 sm:mb-[80px] pt-2 font-[Montserrat] text-[#303030] text-[14px] font-normal leading-5 opacity-75'>
        <span>Copyright © 2023 E-Shop. All Rights Reserved.</span>
        <span>
            <Link to="#" className='mr-2'>Privacy Policy</Link>  |  
            <Link to="#" className='mr-2 ml-2'>Terms & Condition</Link>  |  
            <Link to="#" className=' ml-2'>Sitemap</Link>
        </span>
    </section>
    </>
  )
}

export default FooterBottom