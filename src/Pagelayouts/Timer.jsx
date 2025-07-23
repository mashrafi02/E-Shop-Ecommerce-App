import React, { useEffect, useState } from 'react';

const Timer = ({ OfferLastDate = undefined }) => {
  const [leftTime, setLeftTime] = useState({
    day: "00",
    hour: "00",
    minute: "00",
    second: "00"
  });

  const getLeftTime = () => {
    const lastTime = new Date(OfferLastDate).getTime();
    const currentTime = Date.now();
    const difference = lastTime - currentTime;

    if (difference <= 0) {
      return { day: "00", hour: "00", minute: "00", second: "00" };
    } else {
      let days = Math.floor(difference / (1000 * 60 * 60 * 24));
      let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      let minutes = Math.floor((difference / (1000 * 60)) % 60);
      let seconds = Math.floor((difference / 1000) % 60);

      return {
        day: String(days).padStart(2, "0"),
        hour: String(hours).padStart(2, "0"),
        minute: String(minutes).padStart(2, "0"),
        second: String(seconds).padStart(2, "0")
      };
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLeftTime(getLeftTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [OfferLastDate]);

  return (
    <div className='flex gap-x-[40px] sm:gap-x-[58px]'>
        <span className='flex flex-col justify-center items-center font-[Poppins] font-semibold text-[#FF624C] text-4xl leading-[46px] relative after:absolute after:content-[":"] after:text-[36px] after:text-[#FF624C] after:font-semibold after:leading-6 after:top-2 after:-right-6 sm:after:-right-8'>
            {leftTime.day}
            <span className='font-[Montserrat] font-normal text-base text-[#303030] leading-6'>Days</span>
        </span> 
        <span className='flex flex-col justify-center items-center font-[Poppins] font-semibold text-[#FF624C] text-4xl leading-[46px] relative after:absolute after:content-[":"] after:text-[36px] after:text-[#FF624C] after:font-semibold after:leading-6 after:top-2 after:-right-7 sm:after:-right-8'>
            {leftTime.hour}
            <span className='font-[Montserrat] font-normal text-base text-[#303030] leading-6'>Hours</span>
        </span> 
        <span className='flex flex-col justify-center items-center font-[Poppins] font-semibold text-[#FF624C] text-4xl leading-[46px] relative after:absolute after:content-[":"] after:text-[36px] after:text-[#FF624C] after:font-semibold after:leading-6 after:top-2 after:-right-6 sm:after:-right-8'>
            {leftTime.minute}
            <span className='font-[Montserrat] font-normal text-base text-[#303030] leading-6'>Minutes</span>
        </span> 
        <span className='flex flex-col justify-center items-center font-[Poppins] font-semibold text-[#FF624C] text-4xl leading-[46px]'>
            {leftTime.second}
            <span className='font-[Montserrat] font-normal text-base text-[#303030] leading-6'>Seconds</span>
        </span>
    </div>
  );
};

export default Timer;
