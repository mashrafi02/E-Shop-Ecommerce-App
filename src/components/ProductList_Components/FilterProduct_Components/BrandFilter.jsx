import { useState, useRef, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";
import { Link } from 'react-router-dom';

const BrandFilter = () => {
    const [isOpenBrand, setIsOpenBrand] = useState(true);
    const dropdownBrandRef = useRef(null);
    const [maxHeightBrand, setMaxHeightBrand] = useState("0px");

    useEffect(() => {
        if (isOpenBrand && dropdownBrandRef.current) {
        setMaxHeightBrand(`${dropdownBrandRef.current.scrollHeight}px`);
        } else {
        setMaxHeightBrand("0px");
        }
    }, [isOpenBrand]);

  return (
    <div className='brand-filter'>
        <span
            onClick={() => setIsOpenBrand(prev => !prev)} 
            className="cursor-pointer">
            <div className='flex justify-between items-center mb-5'>
                <h4 className='font-[Montserrat] text-xl font-bold leading[30px] text-[#303030]'>Brands</h4>
                <IoChevronDown 
                className='duration-300 text-base text-[#303030]'
                style={{
                    transform: isOpenBrand? "rotate(180deg)" : "rotate(0deg)"
                }}/>
            </div>
        </span>
        <ul ref={dropdownBrandRef}
        className="w-full overflow-hidden text-[#303030] font-[Montserrat] text-base font-normal flex flex-col transition-[max-height] duration-300 ease-in-out"
        style={{maxHeight:maxHeightBrand}}>
            <li className="mb-4 flex items-center gap-x-2">
                <input type="checkbox" id='apple' className='w-[16px] h-[16px] align-middle'/> 
                <label htmlFor="apple" className='w-full flex justify-between'>Apple <span>( 565 )</span></label>
            </li>
            <li className="mb-4 flex items-center gap-x-2">
                <input type="checkbox" id='sam' className='w-[16px] h-[16px] align-middle'/> 
                <label htmlFor="sam" className='w-full flex justify-between'>Samsung <span>( 428 )</span></label>
            </li>
            <li className="mb-4 flex items-center gap-x-2">
                <input type="checkbox" id='asus' className='w-[16px] h-[16px] align-middle'/> 
                <label htmlFor="asus" className='w-full flex justify-between'>ASUS <span>( 323 )</span></label>
            </li>
            <li className="mb-4 flex items-center gap-x-2">
                <input type="checkbox" id='dell' className='w-[16px] h-[16px] align-middle'/> 
                <label htmlFor="dell" className='w-full flex justify-between'>Dell <span>( 298 )</span></label>
            </li>
            <li className="mb-4 flex items-center gap-x-2">
                <input type="checkbox" id='lenovo' className='w-[16px] h-[16px] align-middle'/> 
                <label htmlFor="lenovo" className='w-full flex justify-between'>Lenovo <span>( 180 )</span></label>
            </li>
            <li className="mb-4 flex items-center gap-x-2">
                <input type="checkbox" id='hp' className='w-[16px] h-[16px] align-middle'/> 
                <label htmlFor="hp" className='w-full flex justify-between'>HP <span>( 98 )</span></label>
            </li>
            <li className="mb-4 flex items-center gap-x-2">
                <input type="checkbox" id='sonic' className='w-[16px] h-[16px] align-middle'/> 
                <label htmlFor="sonic" className='w-full flex justify-between'>Panasonic <span>( 17 )</span></label>
            </li>
            <li>
                <Link className='font-bold relative after:absolute after:content-[""] after:h-[1px] after:w-full after:left-0 after:bottom-0 after:bg-[#303030]'>More Brands</Link>
            </li>
        </ul>
    </div>
  )
}

export default BrandFilter