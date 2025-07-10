import React, {useState} from 'react';
import Container from '../Pagelayouts/Container';
import CheckoutTabs from '../components/Checkout_Components/CheckoutTabs';
import CheckoutInfoForm from '../components/Checkout_Components/CheckoutInfoForm';

const Checkout = () => {

    const [active, setActive] = useState("Information");

  return (
    <Container>
        <div className="product-path flex items-center gap-x-10 mb-12 mt-16">
            <span className='text-[#303030] text-base font-[Montserrat] font-normal leading-6 relative after:content-[""] after:w-[1px] after:h-[15px] after:bg-[#303030] after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-5'>Home</span>
            <span className='text-[#303030] text-base font-[Montserrat] font-normal leading-6 relative after:content-[""] after:w-[1px] after:h-[15px] after:bg-[#303030] after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-5'>Cart</span>
            <span className='text-[#303030] text-base font-[Montserrat] font-bold leading-6'>Checkout</span>
        </div>
        <div>
            <h2 className='text-[56px] text-[#303030] font-[Poppins] font-bold leading-[68px] text-center mb-9'>Checkout</h2>
            <CheckoutTabs active={active} setActive={setActive}/>
            <CheckoutInfoForm />
        </div>
    </Container>
  )
}

export default Checkout