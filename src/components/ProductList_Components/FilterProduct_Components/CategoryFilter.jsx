import { useState, useRef, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";

const CategoryFilter = () => {
    const [isOpenCategory, setIsOpenCategory] = useState(true);
    const dropdownCategoryRef = useRef(null);
    const [maxHeightCategory, setMaxHeightCategory] = useState("0px");

    useEffect(() => {
        if (isOpenCategory && dropdownCategoryRef.current) {
            setMaxHeightCategory(`${dropdownCategoryRef.current.scrollHeight}px`);
        } else {
            setMaxHeightCategory("0px");
        }
        }, [isOpenCategory]);

  return (
    <div className='category-filter'>
        <span
            onClick={() => setIsOpenCategory(prev => !prev)} 
            className="cursor-pointer">
            <div className='flex justify-between items-center mb-5'>
                <h4 className='font-[Montserrat] text-xl font-bold leading[30px] text-[#303030]'>Categories</h4>
                <IoChevronDown 
                className='duration-300 text-base text-[#303030]'
                style={{
                    transform: isOpenCategory? "rotate(180deg)" : "rotate(0deg)"
                }}/>
            </div>
        </span>
        <ul ref={dropdownCategoryRef}
        className="w-full overflow-hidden text-[#303030] font-[Montserrat] text-base font-normal flex flex-col transition-[max-height] duration-300 ease-in-out"
        style={{maxHeight : maxHeightCategory}}>
            <li className="mb-4 flex items-center gap-x-2">
                <input type="checkbox" id='comp&tab' className='w-[16px] h-[16px] align-middle'/> 
                <label htmlFor="comp&tab">Computer & Tablet</label>
            </li>
            <li className="mb-4 flex items-center gap-x-2">
                <input type="checkbox" id='mob&acc' className='w-[16px] h-[16px] align-middle'/> 
                <label htmlFor="mob&acc">Mobile & Accessories</label>
            </li>
            <li className="mb-4 flex items-center gap-x-2">
                <input type="checkbox" id='tv&home' className='w-[16px] h-[16px] align-middle'/> 
                <label htmlFor="tv&home">TV & Home Theater</label>
            </li>
            <li className="mb-4 flex items-center gap-x-2">
                <input type="checkbox" id='aud&head' className='w-[16px] h-[16px] align-middle'/> 
                <label htmlFor="aud&head">Audio & Headphones</label>
            </li>
            <li className="mb-4 flex items-center gap-x-2">
                <input type="checkbox" id='cam&cord' className='w-[16px] h-[16px] align-middle'/> 
                <label htmlFor="cam&cord">Cameras & Camcorders</label>
            </li>
            <li className="mb-4 flex items-center gap-x-2">
                <input type="checkbox" id='gaming' className='w-[16px] h-[16px] align-middle'/> 
                <label htmlFor="gaming">Gaming Equipment</label>
            </li>
            <li className="flex items-center gap-x-2">
                <input type="checkbox" id='home' className='w-[16px] h-[16px] align-middle'/> 
                <label htmlFor="home">Home Appliances</label>
            </li>
        </ul>
    </div>
)
}

export default CategoryFilter