import Container from "../../Pagelayouts/Container";
import Headphone from "../../assets/svg_icons/Headphone";
import Security from "../../assets/svg_icons/Security";
import DeliveryIcon from "../../assets/svg_icons/DeliveryIcon";
import Transparent from "../../assets/svg_icons/Transparent";

const Facility = () => {
  return (
    <Container>
        <div className='flex flex-wrap sm:flex-nowrap justify-between sm:items-center gap-y-[14px] sm:gap-y-0 sm:gap-x-[90px] mb-[24px] sm:mb-[80px] px-2 sm:px-0 '>
            <div className="flex items-center gap-x-2 sm:gap-x-6 w-[48%] sm:w-full">
                <Headphone />
                <div className="font-[Montserrat] text-[#303030] text-xs sm:text-base leadin-6 ml-3 sm:ml-0">
                    <h3 className="font-bold mb-[2px]">Responsive</h3>
                    <p className="font-normal text-[10px] sm:text-base">Customer service available 24/7</p>
                </div>
            </div>
            <div className="flex items-center gap-x-2 sm:gap-x-6 w-[48%] sm:w-full">
                <Security />
                <div className="font-[Montserrat] text-[#303030] text-xs sm:text-base leadin-6 ml-3 sm:ml-0">
                    <h3 className="font-bold mb-[2px]">Secure</h3>
                    <p className="font-normal text-[10px] sm:text-base">Certified marketplace since 2017</p>
                </div>
            </div>
            <div className="flex items-center gap-x-2 sm:gap-x-6 w-[48%] sm:w-full">
                <DeliveryIcon />
                <div className="font-[Montserrat] text-[#303030] text-xs sm:text-base leadin-6">
                    <h3 className="font-bold mb-[2px]">Shipping</h3>
                    <p className="font-normal text-[10px] sm:text-base">Free, fast, and reliable worldwide</p>
                </div>
            </div>
            <div className="flex items-center gap-x-2 sm:gap-x-6 w-[48%] sm:w-full">
                <Transparent />
                <div className="font-[Montserrat] text-[#303030] text-xs sm:text-base leadin-6">
                    <h3 className="font-bold mb-[2px]">Transparent</h3>
                    <p className="font-normal text-[10px] sm:text-base">Hassle-free return policy</p>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Facility