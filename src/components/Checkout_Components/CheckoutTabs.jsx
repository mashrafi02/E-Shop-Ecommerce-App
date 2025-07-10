import React from 'react'

const CheckoutTabs = ({active, setActive}) => {

  return (
    <div className='flex justify-center items-center gap-x-[80px] mb-[80px]'>
        <p>
            <span style={{display:active==="Information"? "inline-block" : "none"}}
                    className='mr-4 bg-[#FF624C] rounded-full px-4 py-[13px] text-white text-base font-[Montserrat] font-bold leading-6'>01
            </span>
            <span className='text-2xl font-[Poppins] font-semibold leading-[30px] pb-2 border-b-[4px] border-b-transparent cursor-pointer duration-100'
                    style={{color:active === "Information"? "#303030" : "#CBCBCB",
                            borderBottom:active === "Information" && "4px solid #FF624C"
                    }}
                    onClick={() => setActive("Information")}>Information</span>
        </p>
        <p>
            <span style={{display:active==="Shipping"? "inline-block" : "none"}}
                    className='mr-4 bg-[#FF624C] rounded-full px-4 py-[13px] text-white text-base font-[Montserrat] font-bold leading-6'>01
            </span>
            <span className='text-2xl font-[Poppins] font-semibold leading-[30px] pb-2 border-b-[4px] border-b-transparent cursor-pointer duration-100'
                    style={{color:active === "Shipping"? "#303030" : "#CBCBCB",
                            borderBottom:active === "Shipping" && "4px solid #FF624C"
                    }}
                    onClick={() => setActive("Shipping")}>Shipping</span>
        </p>
        <p>
            <span style={{display:active==="Payment"? "inline-block" : "none"}}
                    className='mr-4 bg-[#FF624C] rounded-full px-4 py-[13px] text-white text-base font-[Montserrat] font-bold leading-6'>01
            </span>
            <span className='text-2xl font-[Poppins] font-semibold leading-[30px] pb-2 border-b-[4px] border-b-transparent cursor-pointer duration-100'
                    style={{color:active === "Payment"? "#303030" : "#CBCBCB",
                            borderBottom:active === "Payment" && "4px solid #FF624C"
                    }}
                    onClick={() => setActive("Payment")}>Payment</span>
        </p>
    </div>
  )
}

export default CheckoutTabs