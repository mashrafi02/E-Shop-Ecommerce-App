import Headphone from "../../assets/svg_icons/Headphone";
import Security from "../../assets/svg_icons/Security";
import DeliveryIcon from "../../assets/svg_icons/DeliveryIcon";
import Transparent from "../../assets/svg_icons/Transparent";

const Facility = () => {
  return (
    <div className='flex justify-between items-center gap-x-[90px] mb-[80px]'>
        <div className="flex items-center gap-x-6">
            <Headphone />
            <div className="font-[Montserrat] text-[#303030] text-base leadin-6">
                <h3 className="font-bold mb-[2px]">Responsive</h3>
                <p className="font-normal">Customer service available 24/7</p>
            </div>
        </div>
        <div className="flex items-center gap-x-6">
            <Security />
            <div className="font-[Montserrat] text-[#303030] text-base leadin-6">
                <h3 className="font-bold mb-[2px]">Secure</h3>
                <p className="font-normal">Certified marketplace since 2017</p>
            </div>
        </div>
        <div className="flex items-center gap-x-6">
            <DeliveryIcon />
            <div className="font-[Montserrat] text-[#303030] text-base leadin-6">
                <h3 className="font-bold mb-[2px]">Shipping</h3>
                <p className="font-normal">Free, fast, and reliable worldwide</p>
            </div>
        </div>
        <div className="flex items-center gap-x-6">
            <Transparent />
            <div className="font-[Montserrat] text-[#303030] text-base leadin-6">
                <h3 className="font-bold mb-[2px]">Transparent</h3>
                <p className="font-normal">Hassle-free return policy</p>
            </div>
        </div>
    </div>
  )
}

export default Facility