import React from 'react'
import { Link } from 'react-router-dom';
import Container from "../../Pagelayouts/Container";

const Offer = () => {
  return (
    <Container>
        <section className='mb-[80px] flex justify-between'>
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