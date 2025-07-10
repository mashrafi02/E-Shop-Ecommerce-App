import React, {useState} from 'react';
import Container from "../Pagelayouts/Container";
import AsNavFor from '../components/ProductDetails_Components/AsNavFor';
import Security from "../assets/svg_icons/Security";
import DeliveryIcon from "../assets/svg_icons/DeliveryIcon";
import Transparent from "../assets/svg_icons/Transparent";
import ProductInfo from '../components/ProductDetails_Components/ProductInfo';
import ProductQuantity from '../components/ProductDetails_Components/ProductQuantity';
import ProductDescription from '../components/ProductDetails_Components/ProductDescription';
import ProductReviews from '../components/ProductDetails_Components/ProductReviews';
import RelatedProducts from '../components/ProductDetails_Components/RelatedProducts';

const ProductDetails = () => {

    const [isOpenDescription, setIsOpenDescription] = useState(true);
    const [isOpenReviews, setIsOpenReviews] = useState(false);

  return (
    <Container>
        <div className="product-path flex items-center gap-x-10 mb-12 mt-16">
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
                <ProductInfo />
                <ProductQuantity />
            </div>
        </div>
        <div className='w-full pb-20 mb-[64px] border-b border-b-[#BFBFBF]'>
            <div className='flex gap-x-12 items-start mb-12'>
                <p className='text-[#CBCBCB] text-2xl font-[Poppins] font-semibold leading-[30px] pb-2 border-b-[4px] border-b-[#FFF] duration-150 cursor-pointer'
                   style={{
                        color: isOpenDescription && "#303030",
                        borderBottom: isOpenDescription && "4px solid #FF624C"
                   }}
                   onClick={() => {
                                setIsOpenDescription(true);
                                setIsOpenReviews(false)
                   }}>
                    Description
                </p>
                <p className='text-[#CBCBCB] text-2xl font-[Poppins] font-semibold leading-[30px] pb-2 border-b-[4px] border-b-[#FFF] duration-150 cursor-pointer'
                   style={{
                        color: isOpenReviews && "#303030",
                        borderBottom: isOpenReviews && "4px solid #FF624C"
                   }}
                   onClick={() => {
                                setIsOpenDescription(false);
                                setIsOpenReviews(true)
                   }}>
                    Reviews
                </p>
            </div>
            <div style={{display: isOpenDescription? "block" : "none"}}>
                <ProductDescription />
            </div>
            <div style={{display: isOpenReviews? "block" : "none"}}>
                <ProductReviews />
            </div>
        </div>
        <div className='mb-[64px]'>
            <RelatedProducts />
        </div>
    </Container>
  )
}

export default ProductDetails