import React from 'react'

const DiscountComponent = ({width="75px", height="37px", px="20px", py="7px", radius="5px", fontSize="16px", text}) => {
  return (
    <div className="bg-[#FF624C] font-[Montserrat] text-white font-bold leading-6 flex justify-center items-center"
         style={{
            fontSize:fontSize,
            width:width,
            height:height,
            paddingInline:px,
            paddingBlock:py,
            borderRadius:radius
         }}>
        {text}%
    </div>
  )
}

export default DiscountComponent