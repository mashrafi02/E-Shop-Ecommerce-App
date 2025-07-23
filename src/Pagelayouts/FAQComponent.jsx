import React from 'react';
import { RiArrowRightSLine } from "react-icons/ri";


const FAQComponent = ({que="",ans="", isOpen, onToggle}) => {
  return (
    <div onClick={onToggle} 
        className='px-4 sm:px-12 py-[33px] bg-white rounded-[25px] relative cursor-pointer'>
        <div className={`w-[32px] h-[32px] flex justify-center items-center bg-[#FF624C] border border-[#FF624C] rounded-full absolute top-8 left-3 sm:left-12 ${isOpen && 'bg-white'} duration-200`}>
            <RiArrowRightSLine style={{color:isOpen && "#FF624C", transform:isOpen? "rotate(90deg)":"rotate(0deg)"}} className='text-base text-white duration-200'/>
        </div>
        <div className='pl-10 sm:pl-[64px] duration-200'>
            <h4 className='font-[Poppins] text-[#303030] text-xl sm:text-2xl font-semibold leading-[30px]'
                style={{marginBottom:isOpen && "16px"}}>{que}</h4>
            {
                isOpen &&
                <p className='opacity-75 font-[Montserrat] text-lg sm:text-xl font-normal leading-[30px] text-[#303030]'>{ans}</p>
            }
        </div>    
    </div>
  )
}

export default FAQComponent