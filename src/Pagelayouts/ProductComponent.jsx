import StarIcon from "../assets/svg_icons/StarIcon";
import DiscountComponent from "./DiscountComponent";
import { IoMdHeartEmpty } from "react-icons/io";
import { GoShareAndroid } from "react-icons/go";
import CartIcon2 from "../assets/svg_icons/CartIcon2";

const ProductComponent = ({maxWidth="284px",
                          image="/images/product-placeholder.png",
                          text="", 
                          title="", 
                          bg="transparent", 
                          border=true, 
                          p="24px 24px 44px 24px", 
                          discount="",
                          diswidth="75px",
                          disheight="37px",
                          dispx = "20px",
                          dispy = "7px",
                          disradius = "5px", 
                          rating="0", 
                          starRating="", 
                          availability="", 
                          price="0", 
                          preprice="" }) => {
  
  const hoverBorder = 'hover:border-[#BFBFBF]'
  let ratingNumberArray;
  if(starRating){
    ratingNumberArray = new Array(starRating).fill("");
  }
  return (
    <div className={`border border-transparent ${border && hoverBorder} rounded-[10px] cursor-pointer duration-300 group`}
          style={{
            maxWidth:maxWidth,
            padding:p,
            background:bg,
          }}>
        <div className="image mb-10 w-full relative">
            <img className='w-full' src={image} alt="item-image" />
            {
              discount &&
                  <div className="discount absolute z-999 -top-4 -right-4">
                      <DiscountComponent width={diswidth} height={disheight} px={dispx} py={dispy} radius={disradius} text={discount} />
                  </div>
            }
            <div className="hover-options scale-0 group-hover:scale-100 duration-300 flex justify-center gap-x-[18px] items-center absolute w-full top-[158px]">
                <div className="w-[50px] h-[50px] text-[#FF624C] rounded-full border border-[#FF624C] bg-white flex justify-center items-center hover:text-white hover:bg-[#FF624C] duration-200">
                    <CartIcon2 />
                </div>
                <div className="w-[50px] h-[50px] rounded-full border border-[#FF624C] bg-white flex justify-center items-center hover:bg-[#FF624C] duration-200 group/nested">
                    <IoMdHeartEmpty className="text-[#FF624C] text-xl group-hover/nested:text-white duration-200"/>
                </div>
                <div className="w-[50px] h-[50px] rounded-full border border-[#FF624C] bg-white flex justify-center items-center hover:bg-[#FF624C] duration-200 group/nested">
                    <GoShareAndroid className="text-[#FF624C] text-xl group-hover/nested:text-white duration-200"/>
                </div>
            </div>
        </div>
        <h4 className="text-[14px] text-[#303030] leading-5 font-[Montserrat] font-normal tracking-[5px] mb-4">{title}</h4>
        <p className="text-[#303030] font-[Poppins] text-xl font-semibold leading-[30px] mb-2 group-hover:text-[#FF624C] group-hover:underline duration-200">{text}</p>
        <div className="star-rating flex items-center mb-5">
            {
              starRating &&
                  ratingNumberArray.map((_,index) => <StarIcon key={index} />)
            }
            <span className="ml-2 mb-[-3px] text-base text-[#303030] leading-6 font-normal font-[Montserrat] tracking-widest">({rating})</span>
        </div>
        <span className="font-[Poppins] text-2xl font-semibold leading-[30px]"
              style={{
                color: preprice? "#FF624C" : "#303030"
              }}>${price}
        </span>
        {
          preprice &&
              <span className="text-[#979797] font-[Montserrat] text-base font-normal leading-6 ml-2 relative after:content-[''] after:w-full after:h-[1px] after:bg-[#979797] after:absolute after:left-0 after:top-1/2 after:-translate-y-1/2">
                  ${preprice}
              </span>
        }
    </div>
  )
}

export default ProductComponent