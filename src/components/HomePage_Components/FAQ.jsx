import React from 'react'
import Container from '../../Pagelayouts/Container'
import FAQComponent from '../../Pagelayouts/FAQComponent'
import { useState } from 'react';
import Button from "../../Pagelayouts/Button";

const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit and debit cards, PayPal, Apple Pay, Google Pay, and other secure payment options at checkout."
    },
    {
      question: "How long does the product shipping take?",
      answer: "Shipping typically takes 3–7 business days depending on your location. A tracking number will be provided once your order is shipped."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary based on location."
    },
    {
      question: "Can I track my order?",
      answer: "Absolutely! Once your order has been shipped, we'll send you a tracking number and a link to our carrier's website where you can track your package in real-time. You can also check the status of your order by logging into your account and viewing your order history."
    }
  ];
  

const FAQ = () => {

    const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className='mb-[40px] sm:mb-[70px] pt-[40px] sm:pt-[64px] pb-[40px] sm:pb-[70px]' style={{background:"url('/images/faq-background.png')"}}>
        <Container>
            <div className='sm:flex sm:gap-x-[112px] px-2 sm:px-0'>
                <div className='sm:hidden sm:self-end'>
                    <h2 className='max-w-[306px] font-[Poppins] text-4xl text-[#303030] font-semibold leading-[46px] mb-6'>Frequently Asked Questions</h2>
                    <p className='max-w-[392px] font-[Montserrat] font-normal text-xl leading-6 text-[#303030] mb-8 sm:mb-[64px]'>Questions that get asked the most by our clients. Get any burning questions?</p>
                    <div className='mb-8 sm:mb-0'>
                        <Button text="Ask A Question"/>
                    </div>
                </div>
                <div className='w-full sm:w-[926px] flex flex-col gap-y-6'>
                    {
                        faqs.map((faq,index) => <FAQComponent 
                                    key={index} 
                                    que={faq.question} 
                                    ans={faq.answer}
                                    onToggle={() => setOpenIndex(prev => prev === index? null : index)}
                                    isOpen={openIndex === index}/>)
                    }
                </div>
                <div className='hidden sm:block sm:self-end'>
                    <h2 className='max-w-[306px] font-[Poppins] text-4xl text-[#303030] font-semibold leading-[46px] mb-6'>Frequently Asked Questions</h2>
                    <p className='max-w-[392px] font-[Montserrat] font-normal text-xl leading-6 text-[#303030] mb-[64px]'>Questions that get asked the most by our clients. Get any burning questions?</p>
                    <Button text="Ask A Question"/>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default FAQ