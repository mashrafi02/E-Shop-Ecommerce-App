import { Link } from "react-router-dom";
import Container from "../../Pagelayouts/Container";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";

const BottomBar = () => {
  return (
      <section className='bg-[#FF624C] mb-8'>
          <Container>
              <section className="flex items-center justify-between font-[Montserrat] py-[26px] text-white font-bold leading-6 text-base">
                  <div className="flex items-center gap-x-[80px]">
                      <span className="all-category flex items-center gap-x-4 cursor-pointer">
                          <HiMiniBars3 className="text-2xl"/>
                          All Categories
                      </span>
                      <span className="products cursor-pointer flex items-center gap-x-2">
                          Products
                          <IoIosArrowDown />
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