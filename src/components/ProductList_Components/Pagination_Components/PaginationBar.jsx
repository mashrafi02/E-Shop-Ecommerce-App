import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

const PaginationBar = ({totalItems, currentPage, itemsPerPage, onPageChange}) => {

    const totalPages = Math.ceil(totalItems/itemsPerPage);
    const maxPagesTOShow = 10;
    const pagesToShowBefore = 3;
    const pagesToShowAfter = 3;

    let startPage = Math.max(1, currentPage - pagesToShowBefore);
    let endPage = Math.min(totalPages, currentPage + pagesToShowAfter)

    if(endPage - startPage + 1 < maxPagesTOShow){
        if(startPage > 1){
            startPage = Math.max(1, endPage - maxPagesTOShow +1)
        }
        endPage = Math.min(totalPages, startPage + maxPagesTOShow -1)
    }

    const page_numbers = [];
    for (let i = startPage; i <= endPage; i++){
        page_numbers.push(i);
    }

  return (
    <div className="text-center">
        <div className="paginate flex gap-x-[30px] items-center">
            <button onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}>
                <SlArrowLeft className=" text-[22px] text-[#303030] cursor-pointer mr-[34px] font-semibold"/>
            </button>
            {
                page_numbers.map((num,index) => <button key={index}
                                                        onClick={() => onPageChange(num)}
                                                        className="px-[18px] py-[9px] text-lg text-[#303030] font-[Poppins] font-semibold cursor-pointer rounded-[5px] hover:!text-white hover:!bg-[#FF624C] duration-200"
                                                        style={{
                                                            background: currentPage === num? "#FF624C" : "#FFF",
                                                            color: currentPage === num? "#FFF" : "#303030",
                                                        }}>
                                                    {num}
                                                </button>)
            }
            <button onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}>
                <SlArrowRight className="text-[22px] text-[#303030] cursor-pointer ml-[34px] font-semibold"/>
            </button>
        </div>
    </div>
  )
}

export default PaginationBar