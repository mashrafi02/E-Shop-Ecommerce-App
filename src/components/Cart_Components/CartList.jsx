import React from 'react';
import QuantityButtons from './QuantityButtons';
import { GoShareAndroid } from "react-icons/go";
import TrashIcon from '../../assets/svg_icons/TrashIcon';

const CartList = ({
                imageSrc="/images/Offer1.png",
                productGroup="TELEVISION",
                productName="LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color USB HQ",
                productVariant="Jet Black",
                price="00.00",
                total="00.00"
}) => {
  return (
    <div className='px-9 pt-6 pb-[56px] rounded-[10px] border border-transparent hover:border-[#CBCBCB] duration-150 group relative'>
        <div className='flex items-center'>
            <div className='w-[712px] flex'>
                <div className='w-[237px] h-[214px] overflow-hidden mr-[62px]'>
                    <img src={imageSrc} alt="---" className='w-full h-full object-cover' />
                </div>
                <div className='pt-10 pb-2'>
                    <h5 className='text-[#303030] text-sm font-[Montserrat] font-normal leading-5  tracking-[0.2em] mb-4'>{productGroup}</h5>
                    <p className='w-[314px] text-[#303030] text-xl font-[Poppins] font-semibold leading-[30px] group-hover:text-[#FF624C] group-hover:underline cursor-pointer mb-[46px]'>{productName}</p>
                    <p className='text-base text-[#303030] font-[Montserrat] font-normal leading-6'><span className='font-bold mr-2'>Variant:</span>{productVariant}</p>
                </div>
            </div>
            <div className='w-[223px]'>
                <span className='text-xl text-[#303030] font-[Poppins] font-semibold leading-[30px]'>${price}</span>
            </div>
            <div className='w-[237px]'>
                <QuantityButtons />
            </div>
            <div>
                <span className='text-xl text-[#303030] font-[Poppins] font-semibold leading-[30px]'>${total}</span>
            </div>
        </div>
        <div className="hover-options scale-0 group-hover:scale-100 duration-300 flex flex-col justify-center gap-y-[38px] absolute top-[64px] right-[48px]">
            <div className="w-[64px] h-[64px] text-[#FF624C] rounded-full border border-[#FF624C] bg-white flex justify-center items-center hover:text-white hover:bg-[#FF624C] duration-200 cursor-pointer">
                <TrashIcon />
            </div>
            <div className="w-[64px] h-[64px] rounded-full border border-[#FF624C] bg-white flex justify-center items-center hover:bg-[#FF624C] duration-200 group/nested cursor-pointer">
                <GoShareAndroid className="text-[#FF624C] text-[32px] font-light group-hover/nested:text-white duration-200"/>
            </div>
        </div>
    </div>
  )
}

export default CartList