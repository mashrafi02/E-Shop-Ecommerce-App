import React from 'react'
import Container from "../../Pagelayouts/Container";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import ProductComponent from "../../Pagelayouts/ProductComponent";
import Button from '../../Pagelayouts/Button';

const NewProducts = () => {
    
    const categories = ['All categories', 'Computers & Tablets', 'Mobile Phones & Accessories', 'TV & Home Theater', 'Audio & Headphones', 'Cameras & Camcorders', 'Gaming Equipment', 'Home Appliances']

    const [categoryValue, setCategoryValue] = useState(categories[0])
    const [isOpen, setIsOpen] = useState(false);
    const dropdownCategoryRef = useRef(null);

    useEffect(()=>{
        function handleClickOutside(e){
            if(dropdownCategoryRef.current && !dropdownCategoryRef.current.contains(e.target)){
                setIsOpen(prev => prev = false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
        
    },[isOpen])

  return (
    <Container>
        <section className='mb-8 sm:mb-[51px] px-2 sm:px-0'>
            <div className="mb-5 sm:mb-12 sm:flex sm:justify-between">
                <h2 className='font-semibold font-[Poppins] text-[#303030] text-4xl leading-[46px] mb-4 sm:mb-0'>New Products</h2>
                <div className='self-end flex gap-x-4 items-center font-[Montserrat] text-base leading-6'>
                    <span className='text-[#303030] font-normal'>Sort by</span>
                    <div    ref={dropdownCategoryRef}
                            onClick={() => setIsOpen(prev => !prev)}
                            className='relative'>
                        <Link className='flex items-center gap-x-[50px] sm:gap-x-[100px]'>
                            <span className=' text-[#FF624C] font-bold '>
                                {categoryValue}
                            </span>
                            <IoIosArrowDown />
                        </Link>
                        {
                            isOpen &&
                                <ul className='absolute w-[190px] sm:w-[270px] px-2 sm:px-4 sm:py-2 top-8 sm:top-13 -right-4 sm:-right-2 bg-white text-[#303030] font-[Montserrat text-xs sm:text-base font-normal shadow-2xl rounded-lg flex flex-col sm:gap-y-3 z-50'>
                                    {categories.map((catergory, index) => 
                                        <li key={index}
                                            onClick={() => setCategoryValue(catergory)}
                                            className='hover:bg-[#FF624C] hover:text-white hover:font-semibold rounded-3xl px-4 py-2 duration-200 transition-colors'  >
                                                <Link to="#">{catergory}</Link>
                                        </li>)}
                                </ul>
                        }
                    </div>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row justify-between items-center gap-y-2 sm:gap-y-0 sm:gap-x-6 sm:mb-[64px] mb-8'>
                <div className='max-w-[320px] sm:max-w-[285px]'>
                    <ProductComponent title={"WATCH"} text={"Orange Watch 12 High Quality Health Sensor..."} rating={"120"} starRating={5} price={"959.99"} preprice={"1919.99"} discount='50'/>
                </div>
                <div className='max-w-[320px] sm:max-w-[285px]'>
                    <ProductComponent title={"TABLET"} text={"Ultra Tablet Qwerty HD 10765 Series Low Pri..."} rating={"100"} starRating={5} price={"799.00"}/>
                </div>
                <div className='max-w-[320px] sm:max-w-[285px]'>
                    <ProductComponent title={"AUDIO"} text={"QuietComfort 45 Wireless Headphone ..."} rating={"120"} starRating={5} price={"329.99"}/>
                </div>
                <div className='max-w-[320px] sm:max-w-[285px]'>
                    <ProductComponent title={"LAPTOP"} text={"Surface Laptop 4 XPS 13 Plus 64GB i7 Touch ..."} rating={"120"} starRating={5} price={"2399.99"} preprice='2878.00' discount='20'/>
                </div>
                <div className='max-w-[320px] sm:max-w-[285px]'>
                    <ProductComponent title={"CAMERA"} text={"CamPro HERO10 Black Sleek Design 2023 4K ..."} rating={"20"} starRating={5} price={"1499.99"}/>
                </div>
            </div>
            <div className='text-center'>
                <Button text={"Load More"} color='#FF624C' bg='transparent'/>
            </div>
        </section>
    </Container>
  )
}

export default NewProducts