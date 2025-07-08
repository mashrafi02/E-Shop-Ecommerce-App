import React from 'react';
import StarIcon from '../../assets/svg_icons/StarIcon';

const ProductInfo = () => {
  return (
    <div>
        <div className='flex items-center mb-4'>
            <StarIcon bg='#FED550' />
            <StarIcon bg='#FED550'/>
            <StarIcon bg='#FED550'/>
            <StarIcon bg='#FED550'/>
            <StarIcon bg='#FED550'/>
            <span className='ml-2 text-xl text-[#303030] font-[Montserrat] font-normal leading-[30px]'>( 142 )</span>
        </div>
        <h2 className='w-[631px] text-4xl text-[#303030] font-[Poppins] font-semibold leading-[46px] pb-6 border-b border-b-[#D9D9D9] mb-6'>
            NexSUS ROCK Strix Scar 17 Gaming Laptop 15.7” 1TB SSD 16GB RAM Pro
        </h2>
        <div className='relative mb-12'>
            <span className='inline-block text-[56px] text-[#FF624C] font-[Poppins] font-bold leading-[68px]'>$2,999.99</span>
            <span className='inline-block text-[#303030] text-xl font-[Montserrat] font-normal leading-[30px] opacity-50 absolute top-[27px] left-[288px]'><del>$5,499.99</del></span>
        </div>
        <ul className='flex flex-col gap-y-4 mb-[100px]'>
            <li className='flex items-center gap-x-[87px]'>
                <span className='block w-[83px] text-[#303030] text-xl font-[Poppins] font-semibold leading-[30px]'>Brand</span>
                <span className='block text-[#303030] text-xl font-[Montserrat] font-normal leading-[30px]'>NexSUS Tech Company</span>
            </li>
            <li className='flex items-center gap-x-[87px]'>
                <span className='block w-[83px] text-[#303030] text-xl font-[Poppins] font-semibold leading-[30px]'>Size</span>
                <span className='block text-[#303030] text-xl font-[Montserrat] font-normal leading-[30px]'>15.7 x 11.1 x 1.0 inches (W x D x H)</span>
            </li>
            <li className='flex items-center gap-x-[87px]'>
                <span className='block w-[83px] text-[#303030] text-xl font-[Poppins] font-semibold leading-[30px]'>Weight</span>
                <span className='block text-[#303030] text-xl font-[Montserrat] font-normal leading-[30px]'>6.28 pounds</span>
            </li>
            <li className='flex items-center gap-x-[87px]'>
                <span className='block w-[83px] text-[#303030] text-xl font-[Poppins] font-semibold leading-[30px]'>Delivery</span>
                <span className='block text-[#303030] text-xl font-[Montserrat] font-normal leading-[30px]'>Worldwide</span>
            </li>
            <li className='flex items-start gap-x-[87px]'>
                <span className='block w-[83px] text-[#303030] text-xl font-[Poppins] font-semibold leading-[30px]'>Variant</span>
                <div className='w-[460px] flex flex-wrap items-center gap-x-1 gap-y-2'>
                    <button className='px-8 py-4 rounded-[5px] border border-[#979797] text-base text-[#303030] font-[Montserrat] font-bold leading-6 hover:border-[#FFB0A5] hover:text-[#FF624C] duration-150 cursor-pointer'>Off White</button>
                    <button className='px-8 py-4 rounded-[5px] border border-[#979797] text-base text-[#303030] font-[Montserrat] font-bold leading-6 hover:border-[#FFB0A5] hover:text-[#FF624C] duration-150 cursor-pointer'>Space Gray</button>
                    <button className='px-8 py-4 rounded-[5px] border border-[#979797] text-base text-[#303030] font-[Montserrat] font-bold leading-6 hover:border-[#FFB0A5] hover:text-[#FF624C] duration-150 cursor-pointer'>Jet Black</button>
                    <button className='px-8 py-4 rounded-[5px] border border-[#979797] text-base text-[#303030] font-[Montserrat] font-bold leading-6 hover:border-[#FFB0A5] hover:text-[#FF624C] duration-150 cursor-pointer disabled:text-[#CBCBCB] disabled:border-[#CBCBCB]' disabled>Cinnamon Red</button>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default ProductInfo