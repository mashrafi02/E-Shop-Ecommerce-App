import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/svg_icons/EnlargeIcon";
import EnlargeIcon from "../../assets/svg_icons/EnlargeIcon";
import { MdClose } from "react-icons/md";

function AsNavFor() {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const settingsHorizonatal = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const settingsVertical = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        focusOnSelect: true
    }

    const [horizontalSlider, setHorizontalSlider] = useState(null);
    const [verticalSlider, setVerticalSlider] = useState(null);
    let horizontalSliderRef = useRef(null);
    let verticalSliderRef = useRef(null);

    useEffect(() => {
        setHorizontalSlider(horizontalSliderRef);
        setVerticalSlider(verticalSliderRef);
    }, []);

  return (
    <div className="w-full">
        <div className="top-slider slider-container w-full mb-8">
            <Slider {...settingsHorizonatal} asNavFor={horizontalSlider} ref={slider => (verticalSliderRef = slider)}>
                <div className="w-full rounded-[25px] overflow-hidden">
                    <div className="w-full h-[541px] bg-[#D9D9D9] relative overflow-hidden">
                        <img src="/images/banner.png" alt="---" className="w-full h-full object-cover object-center" />
                        <span className="absolute top-2 right-6 cursor-pointer"
                              onClick={() => {
                                    setIsOpenModal(true);
                                    setCurrentImage("/images/banner.png")
                              }}>
                            <EnlargeIcon />
                        </span>
                    </div>
                </div>
                <div className="w-full rounded-[25px] overflow-hidden relative">
                    <div className="w-full h-[541px] bg-[#D9D9D9]">
                        <img src="/images/Offer1.png" alt="---" className="w-full h-full object-cover object-center"/>
                        <span className="absolute top-2 right-6 cursor-pointer"
                              onClick={() => {
                                    setIsOpenModal(true);
                                    setCurrentImage("/images/Offer1.png")
                              }}>
                            <EnlargeIcon />
                        </span>
                    </div>
                </div>
                <div className="w-full rounded-[25px] overflow-hidden relative">
                    <div className="w-full h-[541px] bg-[#D9D9D9]">
                        <img src="/images/Offer2.png" alt="---" className="w-full h-full object-cover object-center"/>
                        <span className="absolute top-2 right-6 cursor-pointer"
                              onClick={() => {
                                    setIsOpenModal(true);
                                    setCurrentImage("/images/Offer2.png")
                              }}>
                            <EnlargeIcon />
                        </span>
                    </div>
                </div>
            </Slider>
        </div>
        <div className="bottom-slider slider-container max-w-[350px] mb-12">
            <Slider {...settingsVertical} asNavFor={verticalSlider} ref={slider => (horizontalSliderRef = slider)}>
                <div className="w-full cursor-pointer">
                    <div className="w-[94px] h-[82px] bg-[#D9D9D9] rounded-[10px] overflow-hidden">
                        <img src="/images/banner.png" alt="---" className="w-full h-full object-cover object-center" />
                    </div>
                </div>
                <div className="w-full cursor-pointer">
                    <div className="w-[94px] h-[82px] bg-[#D9D9D9] rounded-[10px] overflow-hidden">
                        <img src="/images/Offer1.png" alt="---" className="w-full h-full object-cover object-center"/>
                    </div>
                </div>
                <div className="w-full cursor-pointer">
                    <div className="w-[94px] h-[82px] bg-[#D9D9D9] rounded-[10px] overflow-hidden">
                        <img src="/images/Offer2.png" alt="---" className="w-full h-full object-cover object-center"/>
                    </div>
                </div>
            </Slider>
        </div>
        {
            isOpenModal && (
                <div className="fixed w-full h-screen inset-0 backdrop-blur-lg flex items-center justify-center z-50">
                    <img src={currentImage} alt="---" />
                    <MdClose className="text-3xl text-black absolute top-3 right-6 cursor-pointer" onClick={() => setIsOpenModal(false)}/>
                </div>
            )
        }
    </div>
  );
}

export default AsNavFor;