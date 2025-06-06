import React from 'react'
import Container from '../../Pagelayouts/Container';
import RightArrowThin from "../../assets/svg_icons/RightArrowThin";
import { Link } from 'react-router-dom';
import ProductComponent from "../../Pagelayouts/ProductComponent";

const BestSeller = () => {
  return (
    <Container>
        <section className='mb-[80px] flex justify-between gap-x-[74px]'>
                <div className='max-w-[903px]'>
                    <div className="mb-12 flex justify-between">
                        <h2 className='font-semibold font-[Poppins] text-[#303030] text-4xl leading-[46px]'>Best Seller</h2>
                        <Link className='self-end' to="#">
                            <span className='flex gap-x-4 items-center font-[Montserrat] text-base text-[#FF624C] font-bold leading-6'>
                                View All <RightArrowThin />
                            </span>
                        </Link>
                    </div>
                    <div className='flex flex-wrap gap-x-6'>
                        <ProductComponent maxWidth="285px" title={"AUDIO"} text={"Wireless Bluetooth Speaker Portable Sou..."} rating={"100"} starRating={5} price={"1199.00"}/>
                        <ProductComponent maxWidth="285px" title={"TABLET"} text={"Tablet Pro 128 GB HD RAM 8 GB i8 1080P 4K ..."} rating={"120"} starRating={5} price={"129.00"} discount='30' preprice='167.00'/> 
                        <ProductComponent maxWidth="285px" title={"WATCH"} text={"Mobile Watch A Series GPS 7/144 45..."} rating={"50"} starRating={5} price={"999.00"}/>                   
                        <ProductComponent maxWidth="285px" title={"PHONE"} text={"LT Phone RAM 16/256 GB Rose Gold Guaran..."} rating={"50"} starRating={5} price={"999.00"}/>
                        <ProductComponent maxWidth="285px" title={"LAPTOP"} text={"Gaming Laptop ZDY 15.6 Inch 512 GB VGA ..."} rating={"120"} starRating={5} price={"1659.00"}/>
                        <ProductComponent maxWidth="285px" title={"HOME"} text={"Wash Machine 11 KG Front Loading Steam ..."} rating={"120"} starRating={5} price={"5699.00"} preprice='6268.00' discount='10'/> 
                    </div>
                </div>
                <div>
                    <img src="/images/bestseller-banner.png" alt="best-seller-img" />
                </div>
        </section>
    </Container>
  )
}

export default BestSeller