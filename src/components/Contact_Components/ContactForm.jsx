import React from 'react';
import Button from '../../Pagelayouts/Button';

const ContactForm = () => {
  return (
    <div>
        <h2 className='text-[#303030] text-4xl font-[Poppins] font-semibold leading-[46px] mb-3'>Contact Us</h2>
        <p className='text-[#303030] text-xl font-[Montserrat] font-normal leading-[30px] mb-12'>Have any questions for us? Don’t hesitate to contact us.</p>
        <form onSubmit={(e) => e.preventDefault()} className='flex flex-wrap justify-between gap-y-8'>
            <div className='w-full'>
                <label className='block text-[#303030] text-xl font-[Montserrat] font-bold leading-[30px] mb-3' htmlFor="fname">Name <span className='text-[#FF624C]'>*</span></label>
                <input type="text" 
                       id='fname'
                       placeholder='Amelia Robert Watson' 
                       className='w-full h-[80px] rounded-[10px] border border-[#CBCBCB] px-8 py-[25px] text-[#303030] placeholder:text-[#959595] text-xl font-[Montserrat] font-normal leading-[30px]'/>
            </div>
            <div className='w-[345px]'>
                <label className='block text-[#303030] text-xl font-[Montserrat] font-bold leading-[30px] mb-3' htmlFor="phone">Phone Number </label>
                <input type="number" 
                       id='phone'
                       placeholder='+123 456 7890' 
                       className='w-full h-[80px] rounded-[10px] border border-[#CBCBCB] px-8 py-[25px] text-[#303030] placeholder:text-[#959595] text-xl font-[Montserrat] font-normal leading-[30px]'/>
            </div>
            <div className='w-[510px]'>
                <label className='block text-[#303030] text-xl font-[Montserrat] font-bold leading-[30px] mb-3' htmlFor="mail">Email Address <span className='text-[#FF624C]'>*</span></label>
                <input type="email" 
                       id='mail'
                       placeholder='amelia.watson@eshop.com' 
                       className='w-full h-[80px] rounded-[10px] border border-[#CBCBCB] px-8 py-[25px] text-[#303030] placeholder:text-[#959595] text-xl font-[Montserrat] font-normal leading-[30px]'/>
            </div>
            <div className='w-full'>
                <label className='block text-[#303030] text-xl font-[Montserrat] font-bold leading-[30px] mb-3' htmlFor="notes">Message <span className='text-[#FF624C]'>*</span></label>
                <textarea id="notes"
                          placeholder='Enter your message ...'
                          className='w-full h-[241px] rounded-[10px] border border-[#CBCBCB] px-8 py-[25px] text-[#303030] placeholder:text-[#959595] text-xl font-[Montserrat] font-normal leading-[30px] resize-none'/>
            </div>
            <Button text="Submit"/>
        </form>
    </div>
  )
}

export default ContactForm