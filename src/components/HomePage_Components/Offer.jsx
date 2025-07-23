import React from 'react'
import { Link } from 'react-router-dom';
import Container from "../../Pagelayouts/Container";

const Offer = () => {
  return (
    <Container>
        <section className='mb-6 sm:mb-[80px] flex flex-col sm:flex-row gap-y-3 sm:gap-y-0 sm:justify-between px-2 sm:px-0'>
            <div>
                <Link to="#"><img src="/images/Offer1.png" alt="offer-banner" /></Link>
            </div>
            <div>
                <Link to="#"><img src="/images/Offer2.png" alt="offer-banner" /></Link>
            </div>
        </section>
    </Container>
  )
}

export default Offer