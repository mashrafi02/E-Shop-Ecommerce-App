import React from 'react';
import RightArrowThin from "../../assets/svg_icons/RightArrowThin";
import { Link } from 'react-router-dom';
import ProductComponent from "../../Pagelayouts/ProductComponent";

const RelatedProducts = () => {
  return (
    <section className=''>
        <div className='w-full'>
            <div className="mb-12 flex justify-between">
                <h2 className='font-semibold font-[Poppins] text-[#303030] text-4xl leading-[46px]'>Related Products</h2>
                <Link className='self-end' to="#">
                    <span className='flex gap-x-4 items-center font-[Montserrat] text-base text-[#FF624C] font-bold leading-6'>
                        View All <RightArrowThin />
                    </span>
                </Link>
            </div>
            <div className='flex flex-wrap gap-x-6'>
                <ProductComponent maxWidth="284px" title={"LAPTOP"} text={"Gaming Laptop ZDY 15.6 Inch 512 GB VGA ..."} rating={"120"} starRating={5} price={"1,659.00"}/>
                <ProductComponent maxWidth="284px" title={"LAPTOP"} text={"Surface Laptop 4 XPS 13 64GB i7 Touch ..."} rating={"120"} starRating={5} price={"2,399.99"} discount='20' preprice='2,878.00'/> 
                <ProductComponent maxWidth="284px" title={"LAPTOP"} text={"2019 Smart Laptop 256 GB 13 inch Pro Chip ..."} rating={"20"} starRating={5} price={"2,099.99"}/>                   
                <ProductComponent maxWidth="284px" title={"LAPTOP"} text={"S21 Laptop Ultra HD LED Screen Feature 2023 ..."} rating={"100"} starRating={5} price={"1,199.00"}/>
                <ProductComponent maxWidth="284px" title={"LAPTOP"} text={"Sleek Laptop HQ 256 GB SSD 8 GB Intel iCor..."} rating={"20"} starRating={5} price={"1,519.99"}/>
            </div>
        </div>
    </section>
  )
}

export default RelatedProducts