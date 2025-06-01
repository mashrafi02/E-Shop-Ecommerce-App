import Container from "../../Pagelayouts/Container";
import { GoSearch } from "react-icons/go";
import CartIcon from "../../assets/svg_icons/CartIcon"
import { LiaUserSolid } from "react-icons/lia";

import { useState } from "react";

const MiddleBar = () => {
  const [search, setSearch] = useState("");
  return (
    <Container>
        <section className="py-8 flex items-center justify-between font-[Montserrat]">
            <div className="logo">
                <img src="/images/logo.png" alt="logo" />
            </div>
            <div className="flex items-center">
                <form 
                    className="relative mx-12"
                    onSubmit={(e) => e.preventDefault()}>
                    <input  type="text" 
                            className="py-[18px] pl-6 w-[332px] border border-[#CCC] rounded-lg text-[14px] font-normal leading-5" 
                            placeholder="Search Products..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    <GoSearch className="absolute right-6 top-5 text-lg"/>
                </form>
                <div className="cart relative pl-[52px] mr-[90px] after:content-[''] after:absolute after:w-px after:h-8 after:bg-[#BFBFBF] after:right-[-45px] after:top-1/2 after:-translate-y-1/2 -z-1">
                    <div className="cart-icon absolute left-0 top-2">
                        <CartIcon />
                    </div>
                    <p className="text-base font-normal text-[#303030] leading-6">Cart</p>
                    <span className="ext-base font-bold text-[#303030] leading-6">$ 150,00</span>
                </div>
                <div className="cart relative pl-[52px] -z-1">
                    <div className="cart-icon absolute left-0 top-1.5">
                        <LiaUserSolid className="text-4xl"/>
                    </div>
                    <p className="text-base font-normal text-[#303030] leading-6">User</p>
                    <span className="ext-base font-bold text-[#303030] leading-6">Account</span>
                </div>
            </div>
        </section>
    </Container>
  )
}

export default MiddleBar