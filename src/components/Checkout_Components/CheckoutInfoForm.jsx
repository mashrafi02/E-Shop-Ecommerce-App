import React from 'react';
import CheckOutInfoDropdown from './CheckOutInfoDropdown';

const CheckoutInfoForm = () => {
  return (
    <div className='w-[870px]'>
        <h3 className='text-[#303030] text-4xl font-[Poppins] font-semibold leading-[46px] mb-10'>Billing Details</h3>
        <form onSubmit={(e) => e.preventDefault()} className='flex flex-wrap justify-between gap-y-8'>
            <div className='w-[424px]'>
                <label className='block text-[#303030] text-xl font-[Montserrat] font-bold leading-[30px] mb-3' htmlFor="fname">First Name <span className='text-[#FF624C]'>*</span></label>
                <input type="text" 
                       id='fname'
                       placeholder='Amelia Robert' 
                       className='w-full h-[80px] rounded-[10px] border border-[#CBCBCB] px-8 py-[25px] text-[#303030] placeholder:text-[#959595] text-xl font-[Montserrat] font-normal leading-[30px]'/>
            </div>
            <div className='w-[430px]'>
                <label className='block text-[#303030] text-xl font-[Montserrat] font-bold leading-[30px] mb-3' htmlFor="lname">Last Name <span className='text-[#FF624C]'>*</span></label>
                <input type="text" 
                       id='lname'
                       placeholder='Watson' 
                       className='w-full h-[80px] rounded-[10px] border border-[#CBCBCB] px-8 py-[25px] text-[#303030] placeholder:text-[#959595] text-xl font-[Montserrat] font-normal leading-[30px]'/>
            </div>
            <div className='w-[424px]'>
                <label className='block text-[#303030] text-xl font-[Montserrat] font-bold leading-[30px] mb-3' htmlFor="phone">Phone Number <span className='text-[#FF624C]'>*</span></label>
                <input type="number" 
                       id='phone'
                       placeholder='+123 456 7890' 
                       className='w-full h-[80px] rounded-[10px] border border-[#CBCBCB] px-8 py-[25px] text-[#303030] placeholder:text-[#959595] text-xl font-[Montserrat] font-normal leading-[30px]'/>
            </div>
            <div className='w-[430px]'>
                <label className='block text-[#303030] text-xl font-[Montserrat] font-bold leading-[30px] mb-3' htmlFor="mail">Email Address <span className='text-[#FF624C]'>*</span></label>
                <input type="email" 
                       id='mail'
                       placeholder='amelia.watson@eshop.com' 
                       className='w-full h-[80px] rounded-[10px] border border-[#CBCBCB] px-8 py-[25px] text-[#303030] placeholder:text-[#959595] text-xl font-[Montserrat] font-normal leading-[30px]'/>
            </div>
            <div className='w-full'>
                <label className='block text-[#303030] text-xl font-[Montserrat] font-bold leading-[30px] mb-3' htmlFor="address">Address <span className='text-[#FF624C]'>*</span></label>
                <input type="text" 
                       id='address'
                       placeholder='Home Address, Auxiliary St. 12345, Anywhere State' 
                       className='w-full h-[80px] rounded-[10px] border border-[#CBCBCB] px-8 py-[25px] text-[#303030] placeholder:text-[#959595] text-xl font-[Montserrat] font-normal leading-[30px]'/>
            </div>
            <div className='w-[424px]'>
                <label className='block text-[#303030] text-xl font-[Montserrat] font-bold leading-[30px] mb-3'>Country <span className='text-[#FF624C]'>*</span></label>
                <CheckOutInfoDropdown categories={['Indonesia','Bangladesh','Singapore','Malaysia','Bahrain','Iraq','England','UAE','USA','Canada','China','France','Russia']}/>
            </div>
            <div className='w-[430px]'>
                <label className='block text-[#303030] text-xl font-[Montserrat] font-bold leading-[30px] mb-3'>State <span className='text-[#FF624C]'>*</span></label>
                <CheckOutInfoDropdown categories={["Kalimantan Timur", "Jakarta", "Bali", "West Java", "Central Java", "East Java", "Yogyakarta", "North Sumatra", "South Sulawesi", "Banten", "West Sumatra"]}/>
            </div>
            <div className='w-[424px]'>
                <label className='block text-[#303030] text-xl font-[Montserrat] font-bold leading-[30px] mb-3'>City <span className='text-[#FF624C]'>*</span></label>
                <CheckOutInfoDropdown categories={["Samarinda","Jakarta", "Surabaya", "Bandung", "Medan", "Denpasar", "Yogyakarta", "Makassar", "Semarang", "Palembang", "Bekasi"]}/>
            </div>
            <div className='w-[424px]'>
                <label className='block text-[#303030] text-xl font-[Montserrat] font-bold leading-[30px] mb-3' htmlFor="zip">ZIP Code</label>
                <input type="number" 
                       id='zip'
                       placeholder='555555' 
                       className='w-full h-[80px] rounded-[10px] border border-[#CBCBCB] px-8 py-[25px] text-[#303030] placeholder:text-[#959595] text-xl font-[Montserrat] font-normal leading-[30px]'/>
            </div>
            <div className='w-full'>
                <label className='block text-[#303030] text-xl font-[Montserrat] font-bold leading-[30px] mb-3' htmlFor="notes">Order Notes</label>
                <textarea id="notes"
                          placeholder='Enter your order notes ...'
                          className='w-full h-[173px] rounded-[10px] border border-[#CBCBCB] px-8 py-[25px] text-[#303030] placeholder:text-[#959595] text-xl font-[Montserrat] font-normal leading-[30px] resize-none'/>
            </div>
        </form>
    </div>
  )
}

export default CheckoutInfoForm