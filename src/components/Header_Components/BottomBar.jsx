import { Link } from "react-router-dom";
import Container from "../../Pagelayouts/Container";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { useState, useRef, useEffect } from "react";

const BottomBar = () => {
    const [isOpenAllcategory, setIsOpenAllcategory] = useState(false);
    const [isOpenProducts, setIsOpenProducts] = useState(false);
    const dropdownAllcategoryRef = useRef(null);
    const dropdownProductsRef = useRef(null);

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
      <section className='bg-[#FF624C] mb-8'>
          <Container>
              <section className="flex items-center justify-between font-[Montserrat] py-[26px] text-white font-bold leading-6 text-base">
                  <div className="flex items-center gap-x-[80px]">
                      <span ref={dropdownAllcategoryRef}
                            onClick={() => setIsOpenAllcategory(prev => !prev)} 
                            className="all-category flex items-center gap-x-4 cursor-pointer relative">
                            <HiMiniBars3 className="text-2xl"/>
                            All Categories
                            {
                            isOpenAllcategory && 
                                <ul className="absolute w-[270px] px-4 py-2 z-999 top-13 -right-35 bg-white text-[#303030] font-[Montserrat text-base font-normal shadow-xl rounded-lg flex flex-col gap-y-3">
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
                                <ul className="absolute w-[150px] px-4 py-2 z-999 top-13 -right-10 bg-white text-[#303030] font-[Montserrat text-base font-normal shadow-xl rounded-lg flex flex-col gap-y-3">
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
                  <div className="flex items-center gap-x-[80px]">
                      <Link to="#">LIMITED SALE 👋🏼</Link>
                      <Link to="#">Best Seller</Link>
                      <Link to="#">New Arrival</Link>
                  </div>
              </section>
          </Container>
      </section>
  )
}

export default BottomBar