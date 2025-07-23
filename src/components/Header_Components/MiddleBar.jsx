import Container from "../../Pagelayouts/Container";
import { GoSearch } from "react-icons/go";
import CartIcon from "../../assets/svg_icons/CartIcon"
import { LiaUserSolid } from "react-icons/lia";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { showSidebar } from "../../slices/sidebarSlice";

const MiddleBar = () => {
  const [search, setSearch] = useState("");
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const dispatch = useDispatch();

  return (
    <Container>
        <section className="py-4 sm:py-8 flex items-center justify-between font-[Montserrat] px-2 sm:px-0">
            <div className="logo flex items-center gap-x-2 sm:block">
                <FaBars className="sm:hidden text-2xl" onClick={()=> dispatch(showSidebar())}/>
                <img src="/images/logo.png" alt="logo" className="w-[70%] sm:w-full"/>
            </div>
            <div className="flex items-center">
                <form 
                    className="relative mx-12 hidden sm:block"
                    onSubmit={(e) => e.preventDefault()}>
                    <input  type="text" 
                            className="py-[18px] pl-6 w-[332px] border border-[#CCC] rounded-lg text-[14px] font-normal leading-5" 
                            placeholder="Search Products..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    <GoSearch className="absolute right-6 top-5 text-lg"/>
                </form>
                <div className="search-icon relative z-50 sm:hidden mr-5 after:absolute after:content-[''] after:w-[1px] after:h-8 after:top-[-4px] after:right-[-10px] after:bg-[#BFBFBF] " 
                     onClick={() => setIsOpenSearch(prev => !prev)}>
                        <GoSearch className="text-2xl"/>
                </div>
                <div className="cart relative sm:pl-[52px] mr-[16px] sm:mr-[90px] after:content-[''] after:absolute after:w-[1px] after:h-8 after:bg-[#BFBFBF] after:right-[-12px] sm:after:right-[-45px] after:top-1/2 after:-translate-y-1/2 -z-1">
                    <div className="cart-icon sm:absolute sm:left-0 sm:top-2">
                        <CartIcon />
                    </div>
                    <p className="text-base font-normal text-[#303030] leading-6 hidden sm:block">Cart</p>
                    <span className="ext-base font-bold text-[#303030] leading-6 hidden sm:block">$ 150,00</span>
                </div>
                <div className="cart relative sm:pl-[52px] -z-1">
                    <div className="cart-icon sm:absolute sm:left-0 sm:top-1.5">
                        <LiaUserSolid className="text-4xl"/>
                    </div>
                    <p className="text-base font-normal text-[#303030] leading-6 hidden sm:block">User</p>
                    <span className="ext-base font-bold text-[#303030] leading-6 hidden sm:block">Account</span>
                </div>
            </div>
        </section>
        <form 
            style={{display:isOpenSearch? "block":"none"}}
            className="px-2 sm:hidden text-center mb-4"
            onSubmit={(e) => e.preventDefault()}>
            <input  type="text" 
                    className="py-[18px] px-2 w-[332px] border border-[#CCC] rounded-lg text-[14px] font-normal leading-5" 
                    placeholder="Search Products..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
        </form>
    </Container>
  )
}

export default MiddleBar