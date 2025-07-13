import React from 'react';
import Container from '../Pagelayouts/Container';
import CartList from '../components/Cart_Components/CartList';
import Button  from '../Pagelayouts/Button';
import Facility from '../components/HomePage_Components/Facility';

const Cart = () => {
  return (
    <>
        <Container>
            <div>
                <div className="product-path flex items-center gap-x-10 mb-12 mt-16">
                    <span className='text-[#303030] text-base font-[Montserrat] font-normal leading-6 relative after:content-[""] after:w-[1px] after:h-[15px] after:bg-[#303030] after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-5'>Home</span>
                    <span className='text-[#303030] text-base font-[Montserrat] font-bold leading-6'>Cart</span>
                </div>
                <h2 className='text-[#303030] text-[56px] font-[Poppins] font-bold leading-[68px] mb-7'>Your Cart</h2>
                <div className='bg-[#F4F4F4] px-9 py-8 rounded-[15px] flex items-center mb-2'>
                    <span className='block w-[712px] pl-5 text-[#303030] text-base font-[Montserrat] font-bold leading-6'>PRODUCT</span>
                    <span className='block w-[223px] text-[#303030] text-base font-[Montserrat] font-bold leading-6'>PRICE</span>
                    <span className='block w-[237px] text-[#303030] text-base font-[Montserrat] font-bold leading-6'>QTY</span>
                    <span className='block text-[#303030] text-base font-[Montserrat] font-bold leading-6'>TOTAL</span>
                </div>
                <div className='mb-2'>
                    <CartList productGroup='LAPTOP' productName='2019 Smart Laptop 256 GB 13 inch Pro Chip Core 1 TB HD SSD' productVariant='Space Gray' price='1,659.00' total='1,659.00'/>
                    <CartList productGroup='WATCH' productName='Mobile Watch A Series GPS 7/144 45 mm Red Rubber Band' productVariant='Fiery Red' price='999.00' total='999.00'/>
                    <CartList price='2,299.00' total='4,598.00'/>
                    <CartList productGroup='GAMING' productName='Console Game Stick HD Wireless Bluetooth Connect' productVariant='White' price='109.00' total='218.00'/>
                    <CartList productGroup='TABLET' productName='Mini Tablet Pro 16 inch HD Pencil 128 GB System RAM 28' productVariant='Space Gray (with Case)' price='259.00' total='259.00'/>
                </div>
                <div className='flex justify-between mb-8'>
                    <div className='w-[618px] relative'>
                        <input type="text"
                            placeholder='Enter coupon code (ex: FIRSTPAY)'
                            className='w-full h-[94px] border border-[#CBCBCB] rounded-[10px] py-[35px] pl-9 pr-[160px] text-[#303030] text-base font-[Montserrat] font-normal leading-6 placeholder:text-[#9f9f9f]' />
                        <span className='underline text-xl text-[#303030] font-[Poppins] font-semibold leading-[30px] absolute top-8 right-9 cursor-pointer'>Apply code</span>
                    </div>
                    <div className='w-[618px] bg-[#F4F4F4] rounded-[10px] flex items-center gap-x-[176px] px-9 py-8'>
                        <span className='text-base text-[#303030] font-[Montserrat] font-bold leading-6'>SUB TOTAL</span>
                        <p className='text-sm text-[#303030] font-[Montserrat] font-normal leading-5'><span className='text-2xl text-[#FF624C] font-[Poppins] font-semibold leading-[30px] mr-[23px]'>$7,733.00</span>( excl. shipping fee )</p>
                    </div>
                </div>
                <div className='flex items-center justify-end gap-x-[56px]'>
                    <span className='text-xl text-[#303030] font-[Poppins] font-semibold leading-[30px] cursor-pointer'>Continue Shopping</span>
                    <Button text="Update Cart"/>
                </div>
            </div>
        </Container>
        <div className='h-[1px] bg-[#CBCBCB] mt-[100px] mb-[80px]'/>
        <Facility />
    </>
  )
}

export default Cart