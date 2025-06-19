import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const PaginationFilter = () => {
    const sortCategories = ['Popularity', 'Newest', 'Oldest', 'Most Sell'];
    
    const [sortCategory, setSortCategory] = useState(sortCategories[0])
    const [isOpenSort, setIsOpenSort] = useState(false);
    const dropdownSortCategoryRef = useRef(null);

    useEffect(()=>{
        function handleClickOutside(e){
            if(dropdownSortCategoryRef.current && !dropdownSortCategoryRef.current.contains(e.target)){
                setIsOpenSort(prev => prev = false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
        
    },[isOpenSort])


    const sortPriceMode = ['Price Low-to-High', 'Price High-to-Low'];
    
    const [sortPrice, setSortPrice] = useState(sortPriceMode[0])
    const [isOpenPriceMode, setIsOpenPriceMode] = useState(false);
    const dropdownSortPriceModeRef = useRef(null);

    useEffect(()=>{
        function handleClickOutside(e){
            if(dropdownSortPriceModeRef.current && !dropdownSortPriceModeRef.current.contains(e.target)){
                setIsOpenPriceMode(prev => prev = false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
        
    },[isOpenPriceMode])


  return (
    <div className="flex gap-x-[50px]">
        <div className='self-end flex gap-x-4 items-center font-[Montserrat] text-base leading-6'>
            <span className='text-[#303030] font-normal'>Sort by</span>
            <div    ref={dropdownSortCategoryRef}
                    onClick={() => setIsOpenSort(prev => !prev)}
                    className='relative'>
                <Link className='flex items-center gap-x-[48px]'>
                    <span className=' text-[#FF624C] font-bold '>
                        {sortCategory}
                    </span>
                    <IoIosArrowDown 
                    style={{transform: isOpenSort? "rotate(180deg) " : "rotate(0deg)"}}/>
                </Link>
                {
                    isOpenSort &&
                        <ul className='absolute w-[170px] px-4 py-2 z-999 top-13 -right-2 bg-white text-[#303030] font-[Montserrat text-base font-normal shadow-xl rounded-lg flex flex-col gap-y-3'>
                            {sortCategories.map((catergory, index) => 
                                <li key={index}
                                    onClick={() => setSortCategory(catergory)}
                                    className='hover:bg-[#FF624C] hover:text-white hover:font-semibold rounded-3xl px-4 py-2 duration-200 transition-colors'  >
                                        <Link to="#">{catergory}</Link>
                                </li>)}
                        </ul>
                }
            </div>
        </div>
        <div className='self-end flex gap-x-4 items-center font-[Montserrat] text-base leading-6 relative after:content-[""] after:absolute after:w-px after:h-8 after:bg-[#BFBFBF] after:right-[-24px] after:top-1/2 after:-translate-y-1/2 before:content-[""] before:absolute before:w-px before:h-8 before:bg-[#BFBFBF] before:left-[-24px] before:top-1/2 before:-translate-y-1/2'>
            <div    ref={dropdownSortPriceModeRef}
                    onClick={() => setIsOpenPriceMode(prev => !prev)}
                    className='relative'>
                <Link className='flex items-center gap-x-[48px]'>
                    <span className=' text-[#FF624C] font-bold '>
                        {sortPrice}
                    </span>
                    <IoIosArrowDown 
                    style={{transform: isOpenPriceMode? "rotate(180deg) " : "rotate(0deg)"}}/>
                </Link>
                {
                    isOpenPriceMode &&
                        <ul className='absolute w-[220px] px-4 py-2 z-999 top-13 -right-2 bg-white text-[#303030] font-[Montserrat text-base font-normal shadow-xl rounded-lg flex flex-col gap-y-3'>
                            {sortPriceMode.map((catergory, index) => 
                                <li key={index}
                                    onClick={() => setSortPrice(catergory)}
                                    className='hover:bg-[#FF624C] hover:text-white hover:font-semibold rounded-3xl px-4 py-2 duration-200 transition-colors'  >
                                        <Link to="#">{catergory}</Link>
                                </li>)}
                        </ul>
                }
            </div>
        </div>
    </div>
  )
}

export default PaginationFilter