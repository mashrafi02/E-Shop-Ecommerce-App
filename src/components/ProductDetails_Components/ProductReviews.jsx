import React from 'react'

const ProductReviews = () => {
  return (
    <div className='flex justify-between flex-wrap gap-y-8'>
        <div className='w-[748px] flex gap-x-[68px] items-start'>
            <span className='block w-[120px] text-[#303030] text-xl font-[Poppins] font-semibold leading-[30px]'>Brand</span>
            <p className='max-w-[560px] text-[#303030] text-xl font-[Montserrat] font-normal leading-[30px]'>NexSUS Tech Company</p>
        </div>
        <div className='w-[748px] flex gap-x-[68px] items-start'>
            <span className='block w-[120px] text-[#303030] text-xl font-[Poppins] font-semibold leading-[30px]'>Audio</span>
            <p className='max-w-[560px] text-[#303030] text-xl font-[Montserrat] font-normal leading-[30px]'>2 x 4W speakers with Smart Amp technology</p>
        </div>
        <div className='w-[748px] flex gap-x-[68px] items-start'>
            <span className='block w-[120px] text-[#303030] text-xl font-[Poppins] font-semibold leading-[30px]'>Display</span>
            <p className='max-w-[560px] text-[#303030] text-xl font-[Montserrat] font-normal leading-[30px]'>
                17.3-inch Full HD (1920 x 1080) IPS panel, 144Hz refresh rate, 3ms response time, 100% sRGB color gamut, Adaptive-Sync technology, anti-glare
            </p>
        </div>
        <div className='w-[748px] flex gap-x-[68px] items-start'>
            <span className='block w-[120px] text-[#303030] text-xl font-[Poppins] font-semibold leading-[30px]'>Connection</span>
            <p className='max-w-[560px] text-[#303030] text-xl font-[Montserrat] font-normal leading-[30px]'>
                Wi-Fi 6 (802.11ax), Bluetooth 5.1, Gigabit Ethernet, HDMI 2.0b, USB 3.2 Gen 2 Type-C with DisplayPort 1.4 and Power Delivery, 3 x USB 3.2 Gen 1 Type-A, 3.5mm audio
            </p>
        </div>
        <div className='w-[748px] flex gap-x-[68px] items-start'>
            <span className='block w-[120px] text-[#303030] text-xl font-[Poppins] font-semibold leading-[30px]'>Processor</span>
            <p className='max-w-[560px] text-[#303030] text-xl font-[Montserrat] font-normal leading-[30px]'>
                10th Gen Intel Core i9-10980HK (8 cores, 16 threads, 2.4GHz base clock speed, up to 5.3GHz turbo boost)
            </p>
        </div>
    </div>
  )
}

export default ProductReviews