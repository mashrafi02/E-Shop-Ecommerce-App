import { useState } from "react";
import Button from "../../Pagelayouts/Button";

const FooterTop = () => {

    const [email, setEmail] = useState("");

  return (
    <section style={{background:"linear-gradient(90deg,rgba(244, 244, 244, 1) 30%, rgba(217, 217, 217, 1) 100%)"}} 
            className='sm:rounded-[25px] py-8 sm:py-[114px] px-2 sm:px-[100px] mb-[100px]'>
            <h2 className='text-[#303030] font-[Poppins] text-4xl font-semibold leading-[46px] mb-4'>Get Our Updates</h2>
            <p className='max-w-[475px] text-[#303030] font-[Montserrat] text-xl font-normal leading-[30px] mb-8'>Browse our wide selection of electronics and find the perfect promo for you from newsletter.</p>
            <form 
                onSubmit={(e) => e.preventDefault()}>
                <input  type="text" 
                        className="p-4 sm:p-6 w-full sm:w-[494px] bg-white border border-[#CCC] rounded-[10px] text-base font-[Montserrat] font-normal leading-6 mb-4" 
                        placeholder="Enter your email address ..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /> <br />
                    <div className="sm:hidden">
                        <Button text="Submit" px="30px" py="10px"/>
                    </div>
                    <div className="hidden sm:block">
                        <Button text="Submit"/>
                    </div>
            </form>
    </section>
  )
}

export default FooterTop