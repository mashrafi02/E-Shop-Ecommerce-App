import React from 'react';
import Container from '../Pagelayouts/Container';
import Button from '../Pagelayouts/Button';
import HighlightedLinks from './Foote2_Components/HighlightedLinks';

const Footer2 = () => {
  return (
    <section className='bg-[#303030] py-[80px]'>
        <Container>
            <div className='flex justify-center items-center gap-x-4 mb-[120px]'>
                <input type="text"
                       placeholder='Enter your email address ...'
                       className='w-[806px] h-[70px] bg-white py-[23px] px-10 rounded-[10px] text-base text-[#303030] placeholder:text-[#9b9b9b] font-[Montserrat] font-normal leading-6' />
                <Button text="Subscribe" py='20px'/>
            </div>
            <HighlightedLinks />
        </Container>
    </section>
  )
}

export default Footer2