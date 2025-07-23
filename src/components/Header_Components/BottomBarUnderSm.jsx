import React from 'react';
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { useState, useRef, useEffect } from "react";
import { GrClose } from "react-icons/gr";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { hideSidebar } from '../../slices/sidebarSlice';

const BottomBarUnderSm = () => {
    const [isOpenAllcategory, setIsOpenAllcategory] = useState(false);
    const [isOpenProducts, setIsOpenProducts] = useState(false);
    const dropdownAllcategoryRef = useRef(null);
    const dropdownProductsRef = useRef(null);
    const isOpenSidebar = useSelector(state=> state.sidebarOpen.value);
    const dispatch = useDispatch();

    const [maxWidth, setMaxWidth] = useState("0px");
    const sidebarRef = useRef(null);

    useEffect(() => {
        if (isOpenSidebar && sidebarRef.current) {
        setMaxWidth(`190px`);
        } else {
        setMaxWidth("0px");
        }
    }, [isOpenSidebar]);


    useEffect(()=>{
        function handleClickOutside(e){
            if(dropdownAllcategoryRef.current && !dropdownAllcategoryRef.current.contains(e.target)){
                setIsOpenAllcategory(prev => prev = false)
            }
            if(dropdownProductsRef.current && !dropdownProductsRef.current.contains(e.target)){
                setIsOpenProducts(prev => prev = false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
        
    },[isOpenAllcategory, isOpenProducts])

  return (
    <div ref={sidebarRef} className='sm:hidden inline-block min-h-screen fixed z-50 top-0 bg-[#FF624C] transition-[max-width] duration-100'
         style={{
                 maxWidth:maxWidth,
                 overflow:isOpenSidebar?"visible":"hidden"
                }}>

        <GrClose className='text-white font-extrabold absolute top-4 left-36' onClick={() => dispatch(hideSidebar())}/>

        <section className="font-[Montserrat] py-[26px] text-white font-bold leading-6 text-base mt-8">
            <div className="flex flex-col gap-y-[30px] px-4">
                <span ref={dropdownAllcategoryRef}
                        onClick={() => setIsOpenAllcategory(prev => !prev)} 
                        className="all-category flex items-center gap-x-4 cursor-pointer relative">
                        All Categories
                        <IoIosArrowDown />
                        {
                        isOpenAllcategory && 
                            <ul className="absolute w-[270px] py-2 z-50 top-6 -right-30 bg-white text-[#303030] font-[Montserrat text-base font-normal shadow-xl rounded-lg flex flex-col">
                                <li className="hover:bg-[#FF624C] hover:text-white hover:font-semibold rounded-3xl px-4 py-2 duration-200 transition-colors">
                                    <Link to="#">Computers & Tablets</Link>
                                </li>
                                <li className="hover:bg-[#FF624C] hover:text-white hover:font-semibold rounded-3xl px-4 py-2 duration-200 transition-colors">
                                    <Link to="#">Mobile Phones & Accessories</Link>
                                </li>
                                <li className="hover:bg-[#FF624C] hover:text-white hover:font-semibold rounded-3xl px-4 py-2 duration-200 transition-colors">
                                    <Link to="#">TV & Home Theater</Link>
                                </li>
                                <li className="hover:bg-[#FF624C] hover:text-white hover:font-semibold rounded-3xl px-4 py-2 duration-200 transition-colors">
                                    <Link to="#">Audio & Headphones</Link>
                                </li>
                                <li className="hover:bg-[#FF624C] hover:text-white hover:font-semibold rounded-3xl px-4 py-2 duration-200 transition-colors">
                                    <Link to="#">Cameras & Camcorders</Link>
                                </li>
                                <li className="hover:bg-[#FF624C] hover:text-white hover:font-semibold rounded-3xl px-4 py-2 duration-200 transition-colors">
                                    <Link to="#">Gaming Equipment</Link>
                                </li>
                                <li className="hover:bg-[#FF624C] hover:text-white hover:font-semibold rounded-3xl px-4 py-2 duration-200 transition-colors">
                                    <Link to="#">Home Appliances</Link>
                                </li>
                            </ul>
                        }
                </span>
                <span ref={dropdownProductsRef}
                        onClick={() => setIsOpenProducts(prev => !prev)}
                        className="products cursor-pointer flex items-center gap-x-2 relative">
                        Products
                        <IoIosArrowDown />
                        {
                        isOpenProducts && 
                            <ul className="absolute w-[120px] px-1 py-2 z-999 top-6 right-9 bg-white text-[#303030] font-[Montserrat text-base font-normal shadow-xl rounded-lg flex flex-col">
                                <li className="hover:bg-[#FF624C] hover:text-white hover:font-semibold rounded-3xl px-4 py-2 duration-200 transition-colors">
                                    <Link to="#">Product 1</Link>
                                </li>
                                <li className="hover:bg-[#FF624C] hover:text-white hover:font-semibold rounded-3xl px-4 py-2 duration-200 transition-colors">
                                    <Link to="#">Product 2</Link>
                                </li>
                                <li className="hover:bg-[#FF624C] hover:text-white hover:font-semibold rounded-3xl px-4 py-2 duration-200 transition-colors">
                                    <Link to="#">Product 3</Link>
                                </li>
                                <li className="hover:bg-[#FF624C] hover:text-white hover:font-semibold rounded-3xl px-4 py-2 duration-200 transition-colors">
                                    <Link to="#">Product 4</Link>
                                </li>
                                <li className="hover:bg-[#FF624C] hover:text-white hover:font-semibold rounded-3xl px-4 py-2 duration-200 transition-colors">
                                    <Link to="#">Product 5</Link>
                                </li>
                            </ul>
                        }
                </span>
                <Link to="/blogs">Blog</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="flex flex-col gap-y-[30px] px-4 mt-[30px]">
                <Link to="#">LIMITED SALE 👋🏼</Link>
                <Link to="#">Best Seller</Link>
                <Link to="#">New Arrival</Link>
            </div>
        </section>
    </div>
  )
}

export default BottomBarUnderSm