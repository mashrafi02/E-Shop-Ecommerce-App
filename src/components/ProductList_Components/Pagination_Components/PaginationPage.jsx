import { useState } from "react";
import pagination_data from "../../../assets/datas/pagination_products.json";
import PaginationBar from "./PaginationBar";
import ProductComponent from "../../../Pagelayouts/ProductComponent";
import PaginationFilter from "./PaginationFilter";
import WindowIcon from "../../../assets/svg_icons/WindowIcon";
import ThreeBar from "../../../assets/svg_icons/ThreeBar";
import { Link } from "react-router-dom";


const PaginationPage = () => {

    const itemsPerPage = 16;
    const totalItems = pagination_data.length;
    const [currentPage, setCurrentPage] = useState(1);
    
    let startIndex =  (currentPage - 1) * itemsPerPage;
    let currentPageProducts = pagination_data.slice(startIndex, itemsPerPage + startIndex);

  return (
    <div>
        <div>
          <h3 className="font-[Poppins] text-[36px] text-[#303030] font-semibold leading-[46px] ml-6 mb-6">Products</h3>
          <div className="flex justify-between ml-6 mb-[48px]">
            <span className="font-[Montserrat] text-base text-[#303030] font-normal leading-6">
              Showing {startIndex + 1} - {currentPageProducts.length + startIndex} of 160 results. 
            </span>
            <div className="flex">
              <PaginationFilter />
              <div className="flex justify-between items-center gap-x-3 ml-12">
                <Link><WindowIcon /></Link>
                <Link><ThreeBar /></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap mb-[80px]">
        {
            currentPageProducts.map((item,key) => {
                return <ProductComponent key={key} maxWidth="285px" title={item.product_title} text={item.product_description} rating={item.rating} starRating={item.star_rating} price={item.price} discount={item.discount} preprice={item.pre_price}/>
            })
        }
        </div>
        <div className="flex justify-center">
          <PaginationBar
          totalItems={totalItems}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
          />
        </div>
    </div>
  )
}

export default PaginationPage