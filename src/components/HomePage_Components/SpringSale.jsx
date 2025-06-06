import React from 'react';
import Container from "../../Pagelayouts/Container";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlArrowRight } from "react-icons/sl";
import ProductComponent from '../../Pagelayouts/ProductComponent';
import Timer from '../../Pagelayouts/Timer';
import Button from "../../Pagelayouts/Button";

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

const SpringSale = () => {

    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 350,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
      };

  return (
    <section className='mb-[110px] py-[64px]' style={{background:"url('/images/springsale-back.png')"}}>
        <Container>
            <div className='flex gap-x-[127px] items-center'>
                <div className="timer">
                    <h2 className='max-w-[325px] font-[Poppins] font-bold text-[56px] text-[#303030] leading-[68px] mb-10'>Spring Sale</h2>
                    <Timer OfferLastDate="June 27, 2025 12:00 PM +06"/>
                    <div className='mt-[72px]'>
                        <Button text="Shop Now" />
                    </div>
                </div>
                <div className='min-w-0 spring-sale'>
                    <Slider {...settings}>
                        <ProductComponent maxWidth='463px' border={false} bg='#EAEAEA' starColor='white' starHover={true} bgHover="white" image={"/images/watch.png"} title={"TELEVISION"} text={"LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color Enhancer USB Movie..."} rating={"100"} starRating={5} price={"4599.00"} preprice="5058.00" availability={50} totalProduct={100} p='40px 40px 43px 40px' discount='10' disheight='100px' diswidth='100px' dispy='35px' dispx='28px' disradius='50%' disFontSize='20px' disTop='0' disRight='0'/>      
                        <ProductComponent maxWidth='463px' border={false} bg='#EAEAEA' starColor='white' starHover={true} bgHover="white" image={"/images/watch.png"} title={"CAMERA"} text={"VBI Mini 2 Fly More Combo Drone Sjrc F22S 4K Pro Ptz 5 Km Version Alpha..."} rating={"100"} starRating={5} price={"819.00"} preprice="1638.00" availability={95} totalProduct={100} p='40px 40px 43px 40px' discount='50' disheight='100px' diswidth='100px' dispy='35px' dispx='28px' disradius='50%' disFontSize='20px' disTop='0' disRight='0'/>                  
                        <ProductComponent maxWidth='463px' border={false} bg='#EAEAEA' starColor='white' starHover={true} bgHover="white" image={"/images/watch.png"} title={"TELEVISION"} text={"LP78245 Smart TV OLED 43 Inch 4K HD Dynamic Color Enhancer USB Movie..."} rating={"100"} starRating={5} price={"4599.00"} preprice="5058.00" availability={50} totalProduct={100} p='40px 40px 43px 40px' discount='10' disheight='100px' diswidth='100px' dispy='35px' dispx='28px' disradius='50%' disFontSize='20px' disTop='0' disRight='0'/>      
                        <ProductComponent maxWidth='463px' border={false} bg='#EAEAEA' starColor='white' starHover={true} bgHover="white" image={"/images/watch.png"} title={"CAMERA"} text={"VBI Mini 2 Fly More Combo Drone Sjrc F22S 4K Pro Ptz 5 Km Version Alpha..."} rating={"100"} starRating={5} price={"819.00"} preprice="1638.00" availability={95} totalProduct={100} p='40px 40px 43px 40px' discount='50' disheight='100px' diswidth='100px' dispy='35px' dispx='28px' disradius='50%' disFontSize='20px' disTop='0' disRight='0'/>                  
                    </Slider>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default SpringSale