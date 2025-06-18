import { useState, useRef, useEffect } from "react";
import { IoChevronDown } from "react-icons/io5";

const PriceFilter = () => {
    const [isOpenPrice, setIsOpenPrice] = useState(true);
    const dropdownPriceRef = useRef(null);
    const [maxHeightPrice, setMaxHeightPrice] = useState("0px");

    useEffect(() => {
        if (isOpenPrice && dropdownPriceRef.current) {
        setMaxHeightPrice(`${dropdownPriceRef.current.scrollHeight}px`);
        } else {
        setMaxHeightPrice("0px");
        }
    }, [isOpenPrice]);

    const [minVal, setMinVal] = useState(2000);
    const [maxVal, setMaxVal] = useState(7500);
    const min = 0;
    const max = 9999;
    const step = 10;
    
    const getWidthPercent = (value) => ((value-min) / (max-min)) * 100;
  return (
    <div className='price-filter'>
        <span
            onClick={() => setIsOpenPrice(prev => !prev)} 
            className="cursor-pointer">
            <div className='flex justify-between items-center mb-6'>
                <h4 className='font-[Montserrat] text-xl font-bold leading[30px] text-[#303030]'>Price</h4>
                <IoChevronDown 
                className='duration-300 text-base text-[#303030]'
                style={{
                    transform: isOpenPrice? "rotate(180deg)" : "rotate(0deg)"
                }}/>
            </div>
        </span>
        <div ref={dropdownPriceRef}
        className="w-full overflow-hidden text-[#303030] font-[Montserrat] text-base font-normal flex flex-col transition-[max-height] duration-300 ease-in-out"
        style={{maxHeight:maxHeightPrice,
                paddingBottom: isOpenPrice? "8px" : "0px"
        }}>
            <div className="price-display flex justify-between items-center mb-[37px]">
                <span className='w-[124px] h-[74px] flex justify-center items-center border border-[#7A7A7A] rounded-[10px]'>
                    $ <input type="text"
                            value={minVal}
                            className='bg-transparent border-none focus:outline-none w-[40%] ml-[4px] text-center'
                            onChange={(e) => 
                            {   
                                const value = e.target.value;

                                if(isNaN(value)){
                                    return;
                                }
                                else if(value === ""){
                                    setMinVal(0)
                                }
                                else{
                                    if(value < maxVal){
                                        setMinVal(parseInt(e.target.value))
                                    }
                                }
                            }
                            } />
                    </span>
                <span className='w-[124px] h-[74px] flex justify-center items-center border border-[#7A7A7A] rounded-[10px]'>
                    $ <input type="text"
                            value={maxVal}
                            className='bg-transparent border-none focus:outline-none w-[40%] ml-[4px] text-center'
                            onChange={(e) => 
                            {   
                                const value = e.target.value;

                                if(isNaN(value)){
                                    return;
                                }
                                else if(value === ""){
                                    setMaxVal(minVal + 10);
                                    return;
                                }else{
                                    setMaxVal(value)
                                }            
                            }
                            } />
                    </span>
            </div>
            <div className="price-range">
                <div className="w-full h-[2px] bg-[#B7B7B7] relative">
                    <div className="h-[2px] bg-[#FF624C] absolute top-0"
                        style={{
                            left:`${getWidthPercent(minVal)}%`,
                            width:`${getWidthPercent(maxVal) - getWidthPercent(minVal)}%`,
                        }}>
                    </div>
                    <input type="range"
                            className='w-full absolute top-0 pointer-events-auto appearance-none bg-transparent'
                            min={min}
                            max={max}
                            value={minVal}
                            step={step}
                            onChange={(e) => {
                                const newMinValu = Math.min(parseInt(e.target.value), maxVal - step);
                                setMinVal(newMinValu);
                            }} />
                    <input type="range"
                            className='w-full absolute top-0 pointer-events-auto appearance-none bg-transparent'
                            min={min}
                            max={max}
                            value={maxVal}
                            step={step}
                            onChange={(e) => {
                                const newMaxValu = Math.max(parseInt(e.target.value), minVal + step);
                                setMaxVal(newMaxValu);
                            }} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default PriceFilter