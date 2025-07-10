import React, {useState, useRef, useEffect} from 'react';
import { SlArrowDown } from "react-icons/sl";

const CheckOutInfoDropdown = ({categories=undefined, placeholder=""}) => {

    const [inputValue, setInputValue] = useState("");
    const [isOpenSelectionBox, setIsOpenSelectioBox] = useState(false);
    const selectionBoxRef = useRef(null);
    const [maxHeightSelctionBox, setMaxHeightSelctionBox] = useState("0px");

    useEffect(() => {
        if (isOpenSelectionBox && selectionBoxRef.current) {
            setMaxHeightSelctionBox(`200px`);
            selectionBoxRef.current.style.border = "1px solid #D9D9D9";
        } else {
            setMaxHeightSelctionBox("0px");
            selectionBoxRef.current.style.border = "none";
        }
    }, [isOpenSelectionBox]);

  return (
    <div className='w-full h-[80px] relative' onClick={() => setIsOpenSelectioBox(prev => !prev)}>
        <SlArrowDown className='text-xl text-[#303030] absolute top-7 right-7 cursor-pointer duration-200'
                     style={{
                        transform:isOpenSelectionBox? "rotate(180deg)" : "rotate(0deg)"
                     }}/>
        <input type="text"
                readOnly
                placeholder={categories[0]}
                value={inputValue}
                className='w-full h-full rounded-[10px] border border-[#CBCBCB] px-8 py-[25px] text-[#303030] placeholder:text-[#959595] text-xl font-[Montserrat] font-normal leading-[30px] cursor-pointer' />
        <ul ref={selectionBoxRef} style={{maxHeight:maxHeightSelctionBox}}
            className='w-full bg-white rounded-[5px] overflow-y-scroll transition-[max-height] duration-300 ease-in-out absolute top-[80px] left-[0px] z-50'>
            {categories && (
                categories.map((product, index) => (
                    <li key={index} 
                        className='p-2 text-[#303030] text-xl font-[Montserrat] font-normal leading-[30px] hover:bg-[#FF624C] hover:text-white duration-200 cursor-pointer'
                        onClick={(e) => setInputValue(product)}>
                        {product}
                    </li>
                )))
            }
        </ul>
    </div>
  )
}

export default CheckOutInfoDropdown