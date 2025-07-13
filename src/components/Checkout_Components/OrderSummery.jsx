import React from 'react'
import OrderList from './OrderList';
import MoreInfo from '../../assets/svg_icons/MoreInfo';
import Button from '../../Pagelayouts/Button';

const OrderSummery = () => {
  return (
    <div className='self-start w-[594px] bg-[#F4F4F4] rounded-[25px] p-10'>
        <h2 className='text-[#303030] text-2xl font-[Poppins] font-semibold leading-[30px] mb-12'>Order Summery</h2>
        <ul className='flex flex-col gap-y-5 mb-5'>
            <OrderList productName='2019 Smart Laptop 256 GB 13 inch Pro Chip Core 1 TB HD SSD' productQuantity={1} productPrice="1,659.00"/>
            <OrderList productName='Mobile Watch A Series GPS 7/144 45 mm Red Rubber Band' productQuantity={1} productPrice="999.00"/>
            <OrderList productName='LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color USB HQ' productQuantity={2} productPrice="4,598.00"/>
            <OrderList productName='Console Game Stick HD Wireless Bluetooth Connect' productQuantity={2} productPrice="218.00"/>
            <OrderList productName='Mini Tablet Pro 16 inch HD Pencil 128 GB System RAM 28' productQuantity={1} productPrice="259.00"/>
        </ul>
        <div className='mb-12'>
            <p className='inline-block relative text-xl text-[#303030] font-[Montserrat] font-normal leading-[30px] mr-[254px]'>
                Shipping Fee
                <span className='absolute top-[0px] right-[-24px] cursor-pointer'>
                    <MoreInfo />
                </span>
            </p>
            <span className='inline-block text-xl text-[#303030] font-[Poppins] font-semibold leading-[30px]'>$10.00</span>
        </div>
        <div className='w-full bg-white rounded-[10px] pt-[27px] pb-6'>
            <p className='flex justify-between px-6 mb-[27px]'>
                <span className='text-base text-[#303030] font-[Poppins] font-semibold leading-[24px]'>Total</span>
                <span className='text-xl text-[#303030] font-[Poppins] font-semibold leading-[30px]'>$4,999.00</span>
            </p>
            <div className='text-center'>
                <Button py='24px' px='179px' text="Order Now"/>
            </div>
        </div>
    </div>
  )
}

export default OrderSummery