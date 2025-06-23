import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

const PaginationBar = ({totalItems, currentPage, itemsPerPage, onPageChange}) => {

    const totalPages = Math.ceil(totalItems/itemsPerPage);
    const maxPagesTOShow = 5;
    const page_numbers = [];

    if(totalPages <= maxPagesTOShow){
        for(let i= 1; i <= totalPages; i++){
            page_numbers.push(i);
        }
    }
    else{
        const startPages = [1];
        const endPages = [totalPages];
        const middlePages = [currentPage -1, currentPage, currentPage +1].filter(
            p => p > 1 && p < totalPages 
        )

        const uniquePages = Array.from(new Set([...startPages, ...middlePages, ...endPages])).sort((a,b) => a-b);
        for (let i = 0; i < uniquePages.length; i++) {
            const current = uniquePages[i];
            const prev = uniquePages[i - 1];
        
            if (i > 0 && current - prev > 1) {
                page_numbers.push("...");
            }
        
            page_numbers.push(current);
        }
        console.log(page_numbers)
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