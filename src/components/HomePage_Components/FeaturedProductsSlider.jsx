import React from 'react'
import ProductComponent from '../../Pagelayouts/ProductComponent';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        width:"40px",
        height:"40px",
        border:"1px solid #303030",
        borderRadius:"50%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        right:0,
        zIndex:10
      }}
      onClick={onClick}
    >
      <SlArrowRight className='text-[12px] text-[#303030] absolute left-1/2 -translate-x-1/2'/>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{
        width:"40px",
        height:"40px",
        border:"1px solid #303030",
        borderRadius:"50%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        left:0,
        zIndex:10
      }}
      onClick={onClick}
    >
      <SlArrowLeft className='text-[12px] text-[#303030] absolute left-1/2 -translate-x-1/2'/>
    </div>
  );
}

const FeaturedProductsSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 350,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <section className='mb-[80px]'>
        <h2 className='mb-12 font-semibold font-[Poppins] text-[#303030] text-4xl leading-[46px]'>Featured Products</h2>
        <Slider {...settings}>
            <ProductComponent title={"PHONE"} text={"JPhone 13 High Quality Value Buy Best Cam..."} rating={"50"} starRating={5} price={"999.00"}/>
            <ProductComponent title={"AUDIO"} text={"WH-1000XM4 Wireless Headphones High Qu..."} rating={"120"} starRating={5} price={"59.00"} preprice={"118.00"} discount={"50"}/>
            <ProductComponent title={"LAPTOP"} text={"S21 Laptop Ultra HD LED Screen Feature 2023 ..."} rating={"100"} starRating={5} price={"1199.00"}/>
            <ProductComponent title={"CAMERA"} text={"Mini Polaroid Camera for Girls with Flash Li..."} rating={"70"} starRating={5} price={"79.00"}/>
            <ProductComponent title={"TELEVISION"} text={"AG OLED65CXPUA 4K Smart OLED TV New ..."} rating={"20"} starRating={5} price={"2799.00"}/>
            <ProductComponent title={"PHONE"} text={"JPhone 13 High Quality Value Buy Best Cam..."} rating={"50"} starRating={5} price={"999.00"}/>
            <ProductComponent title={"AUDIO"} text={"WH-1000XM4 Wireless Headphones High Qu..."} rating={"120"} starRating={5} price={"59.00"}/>
            <ProductComponent title={"LAPTOP"} text={"S21 Laptop Ultra HD LED Screen Feature 2023 ..."} rating={"100"} starRating={5} price={"1199.00"}/>
            <ProductComponent title={"CAMERA"} text={"Mini Polaroid Camera for Girls with Flash Li..."} rating={"70"} starRating={5} price={"79.00"} preprice={"118.00"} discount={"50"}/>
            <ProductComponent title={"TELEVISION"} text={"AG OLED65CXPUA 4K Smart OLED TV New ..."} rating={"20"} starRating={5} price={"2799.00"}/>
        </Slider>
    </section>
  )
}

export default FeaturedProductsSlider