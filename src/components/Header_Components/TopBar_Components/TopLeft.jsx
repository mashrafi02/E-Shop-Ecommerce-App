import { Link } from 'react-router-dom'
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";

const TopLeft = () => {
  return (
        <div className="top-left flex justify-between sm:gap-[48px] px-2 sm:px-0 mb-2 sm:mb-0">
            <div className="address flex items-center gap-[8px] text-[#303030] font-[Montserrat] text-sm font-normal leading-5 relative after:content-[''] after:absolute after:w-[1px] after:h-5 sm:after:h-8 after:bg-[#BFBFBF] after:right-[-24px] after:top-1/2 after:-translate-y-1/2">
                <CiLocationOn className='hidden sm:block sm:text-xl' />
                <Link to='https://maps.app.goo.gl/jC8wKByXR5RisGeK7' target='_blank'>123 Main Street, Anytown USA</Link>
            </div>
            <div className="number flex items-center gap-[8px] text-[#303030] font-[Montserrat] text-sm font-normal leading-5">
              <FiPhone className='hidden sm:block sm:text-xl' />
              <Link to='tel:123456789'>+1 (555) 123-4567</Link>
            </div>
        </div>
  )
}

export default TopLeft