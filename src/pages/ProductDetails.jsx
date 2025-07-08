import React from 'react';
import Container from "../Pagelayouts/Container";
import AsNavFor from '../components/ProductDetails_Components/AsNavFor';
import Security from "../assets/svg_icons/Security";
import DeliveryIcon from "../assets/svg_icons/DeliveryIcon";
import Transparent from "../assets/svg_icons/Transparent";

const ProductDetails = () => {
  return (
    <Container>
        <div className="product-path flex items-center gap-x-10 mb-12">
            <span className='text-[#303030] text-base font-[Montserrat] font-normal leading-6 relative after:content-[""] after:w-[1px] after:h-[15px] after:bg-[#303030] after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-5'>Home</span>
            <span className='text-[#303030] text-base font-[Montserrat] font-normal leading-6 relative after:content-[""] after:w-[1px] after:h-[15px] after:bg-[#303030] after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-5'>Computers & Tablets</span>
            <span className='text-[#303030] text-base font-[Montserrat] font-normal leading-6 relative after:content-[""] after:w-[1px] after:h-[15px] after:bg-[#303030] after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-5'>Laptop</span>
            <span className='text-[#303030] text-base font-[Montserrat] font-bold leading-6'>NexSUS ROCK Strix Scar 17 Gaming Laptop</span>
        </div>
        <div className='w-full flex justify-between items-start mb-[100px]'>
            <div className="product-slider w-[833px]">
                <AsNavFor />
                <div className='flex justify-between items-center gap-x-12'>
                    <div className="flex items-center gap-x-6">
                        <DeliveryIcon />
                        <div className="font-[Montserrat] text-[#303030] text-base leadin-6">
                            <h3 className="font-bold mb-[2px]">Free Shipping</h3>
                            <p className="font-normal">Worldwide available</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-6">
                        <Security />
                        <div className="font-[Montserrat] text-[#303030] text-base leadin-6">
                            <h3 className="font-bold mb-[2px]">100% Guaranteed</h3>
                            <p className="font-normal">Receive product first</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-6">
                        <Transparent />
                        <div className="font-[Montserrat] text-[#303030] text-base leadin-6">
                            <h3 className="font-bold mb-[2px]">Return Available</h3>
                            <p className="font-normal">See return policy</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-info">
              
            </div>
        </div>
    </Container>
  )
}

export default ProductDetails