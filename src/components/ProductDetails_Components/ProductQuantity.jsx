import React, {useState} from 'react';
import { FiMinus } from "react-icons/fi";
import { FiPlus } from "react-icons/fi";
import Button from "../../Pagelayouts/Button";
import CartIcon2 from "../../assets/svg_icons/CartIcon2";

const ProductQuantity = () => {

    const [productQuantity, setProductQuantity] = useState(1);

  return (
    <div className='flex'>
        <div className='flex items-center mr-[80px]'>
            <span className='inline-block p-4 rounded-full hover:bg-[#F4F4F4] cursor-pointer'
                  onClick={() => {
                        if(productQuantity > 1){
                            setProductQuantity(prev => prev - 1)
                        }
                  }}>
                <FiMinus className='text-2xl text-[#000]'/>
            </span>
            <input type="number" value={productQuantity} readOnly className='w-[210px] py-[5px] bg-transparent border-none focus:outline-none text-center text-4xl text-[#303030] font-[Poppins] font-semibold leading-[46px]'/>
            <span className='inline-block p-4 rounded-full hover:bg-[#F4F4F4] cursor-pointer'
                  onClick={() => {
                        setProductQuantity(prev => prev + 1)
                  }}>
                <FiPlus className='text-2xl text-[#000]'/>
            </span>
        </div>
        <Button text="Buy Now"/>
        <span className='text-[#FF624C] p-[17px] border border-[#FF624C] rounded-[10px] ml-4'>
            <CartIcon2 width={28} height={28}/>
        </span>
    </div>
  )
}

export default ProductQuantity