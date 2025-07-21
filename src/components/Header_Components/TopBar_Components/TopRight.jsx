import { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { GrFacebookOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const TopRight = () => {

    const countries = [
        {country_name: "United Kingdom", language: 'English', code: 'GB', flag: 'https://flagcdn.com/16x12/gb.png', currency: 'GBP' },
        {country_name: "United States", language: 'English', code: 'US', flag: 'https://flagcdn.com/16x12/us.png', currency: 'USD' },
        {country_name: "Germany", language: 'German', code: 'DE', flag: 'https://flagcdn.com/16x12/de.png', currency: 'EUR' },
        {country_name: "France", language: 'French', code: 'FR', flag: 'https://flagcdn.com/16x12/fr.png', currency: 'EUR' }
      ]

    const [selectedCurrency, setSelectedCurrency] = useState(countries[1]);
    const [selectedLang, setSelectedLang] = useState(countries[0]);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const dropDownCurrency = useRef(null);
    const dropDownLanguage = useRef(null);

    useEffect(()=>{
        function handleClickOutside(e){
            if(dropDownCurrency.current && !dropDownCurrency.current.contains(e.target)){
                setIsOpen2(prev => prev = false)
            }
            if(dropDownLanguage.current && !dropDownLanguage.current.contains(e.target)){
                setIsOpen(prev => prev = false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    },[isOpen,isOpen2])

return (
    <section className="flex items-center gap-x-[51px] sm:gap-x-[49px] text-[#303030] font-[Montserrat] text-sm font-normal leading-5 px-2 sm:px-0 ">
        <div className="currency relative z-50">

            {/* for backend  integration */}

            <select
                className="hidden" 
                name="currency"
                value={selectedCurrency.currency}
                onChange={(e) => {
                                const country = countries.find(c => c.currency === e.target.value);
                                setSelectedCurrency(country)
            }}>
                {
                    countries.map((country,i) => {
                        return <option key={i} value={country.currency}>{country.currency}</option>
                    })
                }
            </select>

            {/* for backend  integration */}

            {/* for Frontend  integration */}

            <div ref={dropDownCurrency} className="flex items-center gap-x-2 cursor-pointer relative"
            onClick={() => setIsOpen2(prev => !prev)}>
                <h6>{selectedCurrency.currency}</h6>
                <IoIosArrowDown />

                {
                isOpen2 && 
                    <ul className="absolute w-[70px] top-7 left-0 shadow-xl rounded-md bg-white">
                        {countries.map((country,index) => 
                                            <li key={index}
                                                className="flex items-center pl-2 pr-2 gap-x-2 mb-2 hover:bg-gray-300 cursor-pointer"
                                                onClick={(e) => {
                                                    setSelectedCurrency(country);
                                                }}>
                                                <img src={country.flag} alt="country-flag" />
                                                <h6>{country.currency}</h6>
                                            </li>)}
                    </ul>
                }
            </div>

            {/* for Frontend  integration */}


        </div>
        <div className="language w-[112px] relative after:content-[''] after:absolute after:w-px after:h-5 sm:after:h-8 after:bg-[#BFBFBF] after:right-[-16px] sm:after:right-[-18px] after:top-1/2 after:-translate-y-1/2 before:content-[''] before:absolute before:w-px before:h-5 sm:before:h-8 before:bg-[#BFBFBF] before:left-[-26px] sm:before:left-[-24px] before:top-1/2 before:-translate-y-1/2 z-50">

            {/* for backend  integration */}

            <select 
                className="hidden"
                name="currency"
                value={selectedLang.language}
                onChange={(e) => {
                                const country = countries.find(c => c.code === e.target.value);
                                setSelectedLang(country)
            }}>
                {
                    countries.map((country,i) => {
                        return <option key={i} value={country.code}>{country.language}</option>
                    })
                }
            </select>

            {/* for backend  integration */}


            {/* for Frontend  integration */}

            <div ref={dropDownLanguage} className="flex items-center gap-x-2 relative cursor-pointer"
            onClick={() => {
                setIsOpen(prev => !prev);
            }}>
                <div className="flex items-center gap-x-2">
                    <img src={selectedLang.flag} alt="country-flag" />
                    <h6>{selectedLang.language}</h6>
                </div>
                <IoIosArrowDown />

                {
                isOpen && 
                    <ul className="absolute w-full top-7 left-0 shadow-xl rounded-md bg-white">
                        {countries.map((country,index) => 
                                            <li key={index}
                                                className="flex items-center pl-2 pr-2 gap-x-2 mb-2 hover:bg-gray-300 cursor-pointer"
                                                onClick={(e) => {
                                                    setSelectedLang(country);
                                                }}>
                                                <img src={country.flag} alt="country-flag" />
                                                <h6>{country.language}</h6>
                                            </li>)}
                    </ul>
                }
            </div>

            {/* for Frontend  integration */}

        </div>
        <div className="media-links flex items-center gap-x-6">
            <Link to='#' ><GrFacebookOption /></Link>
            <Link to='#' ><FaTwitter /></Link>
            <Link to='#' ><FaInstagram /></Link>
        </div>
    </section>
  )
}

export default TopRight