import React from 'react';
import Container from '../Pagelayouts/Container';
import ContactForm from '../components/Contact_Components/ContactForm';
import ContactInfo from '../components/Contact_Components/ContactInfo';

const Contact = () => {
  return (
    <Container>
        <div className='rounded-[14px] overflow-hidden mb-16'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.723631790663!2d-78.87921192396384!3d42.878677071149376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d31236c203b691%3A0x53bf7932ab372a6f!2s123%20Main%20St%2C%20Buffalo%2C%20NY%2014203%2C%20USA!5e0!3m2!1sen!2sbd!4v1752387848002!5m2!1sen!2sbd" width="100%" height="600" style={{border:0, allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
        </div>
        <div className='mb-[80px]'>
            <div className="product-path flex items-center gap-x-10 mb-12 mt-16">
                <span className='text-[#303030] text-base font-[Montserrat] font-normal leading-6 relative after:content-[""] after:w-[1px] after:h-[15px] after:bg-[#303030] after:absolute after:top-1/2 after:-translate-y-1/2 after:-right-5'>Home</span>
                <span className='text-[#303030] text-base font-[Montserrat] font-bold leading-6'>Contact</span>
            </div>
            <div className='flex justify-between'>
                <div className='w-[870px]'>
                    <ContactForm />
                </div>
                <div className='w-[594px]'>
                    <ContactInfo />
                </div>
            </div>
        </div>
    </Container>
  )
}

export default Contact