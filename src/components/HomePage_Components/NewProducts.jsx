import React from 'react'
import Container from "../../Pagelayouts/Container";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
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
        <section className='mb-[51px]'>
            <div className="mb-12 flex justify-between">
                <h2 className='font-semibold font-[Poppins] text-[#303030] text-4xl leading-[46px]'>New Products</h2>
                <div className='self-end flex gap-x-4 items-center font-[Montserrat] text-base leading-6'>
                    <span className='text-[#303030] font-normal'>Sort by</span>
                    <div    ref={dropdownCategoryRef}
                            onClick={() => setIsOpen(prev => !prev)}
                            className='relative'>
                        <Link className='flex items-center gap-x-[100px]'>
                            <span className=' text-[#FF624C] font-bold '>
                                {categoryValue}
                            </span>
                            <IoIosArrowDown />
                        </Link>
                        {
                            isOpen &&
                                <ul className='absolute w-[270px] px-4 py-2 z-999 top-13 -right-2 bg-white text-[#303030] font-[Montserrat text-base font-normal shadow-xl rounded-lg flex flex-col gap-y-3'>
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
            <div className='flex justify-between items-center gap-x-6 mb-[64PX]'>
                <ProductComponent maxWidth="285px" title={"WATCH"} text={"Orange Watch 12 High Quality Health Sensor..."} rating={"120"} starRating={5} price={"959.99"} preprice={"1919.99"} discount='50'/>
                <ProductComponent maxWidth="285px" title={"TABLET"} text={"Ultra Tablet Qwerty HD 10765 Series Low Pri..."} rating={"100"} starRating={5} price={"799.00"}/>
                <ProductComponent maxWidth="285px" title={"AUDIO"} text={"QuietComfort 45 Wireless Headphone ..."} rating={"120"} starRating={5} price={"329.99"}/>
                <ProductComponent maxWidth="285px" title={"LAPTOP"} text={"Surface Laptop 4 XPS 13 Plus 64GB i7 Touch ..."} rating={"120"} starRating={5} price={"2399.99"} preprice='2878.00' discount='20'/>
                <ProductComponent maxWidth="285px" title={"CAMERA"} text={"CamPro HERO10 Black Sleek Design 2023 4K ..."} rating={"20"} starRating={5} price={"1499.99"}/>
            </div>
            <div className='text-center'>
                <Button text={"Load More"} color='#FF624C' bg='transparent'/>
            </div>
        </section>
    </Container>
  )
}

export default NewProducts