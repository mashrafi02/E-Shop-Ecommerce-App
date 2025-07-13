import React from 'react'

const OrderList = ({productName="Product", productQuantity=1, productPrice="1234", isBorder=true}) => {
  return (
    <li className='flex pb-5' style={{borderBottom:isBorder && "1px solid #CBCBCB"}}>
        <p className='w-[250px] text-xl text-[#303030] font-[Montserrat] font-normal leading-[30px]'>
            {productName}
        </p>
        <span className='inline-block ml-[61px] mr-[68px] text-xl text-[#303030] font-[Montserrat] font-bold leading-[30px]'>{productQuantity}</span>
        <span className='inline-block text-xl text-[#303030] font-[Poppins] font-semibold leading-[30px]'>${productPrice}</span>
    </li>
  )
}

export default OrderList