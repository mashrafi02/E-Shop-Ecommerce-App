import React, {useState} from 'react';
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import Button from "../../Pagelayouts/Button";
import CartIcon2 from "../../assets/svg_icons/CartIcon2";

const QuantityButtons = () => {

    const [productQuantity, setProductQuantity] = useState(1);

  return (
    <div className='flex items-center mr-[84px]'>
        <span className='inline-block p-4 cursor-pointer'
                onClick={() => {
                    if(productQuantity > 1){
                        setProductQuantity(prev => prev - 1)
                    }
                }}>
            <FiMinus className='text-base text-[#000]'/>
        </span>
        <input type="number" value={productQuantity} readOnly className='w-[40px] h-[40px] bg-[#F4F4F4] rounded-full border-none focus:outline-none text-center text-base text-[#303030] font-[Montserrat] font-bold leading-6'/>
        <span className='inline-block p-4 cursor-pointer'
                onClick={() => {
                    setProductQuantity(prev => prev + 1)
                }}>
            <FiPlus className='text-base text-[#000]'/>
        </span>
    </div>
  )
}

export default QuantityButtons