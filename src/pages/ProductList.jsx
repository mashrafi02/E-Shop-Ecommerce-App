import React from 'react';
import Container from "../Pagelayouts/Container";
import FilterProducts from '../components/ProductList_Components/FilterProducts';
import Pagination from '../components/ProductList_Components/Pagination';

const ProductList = () => {
  return (
      <Container>
          <div className='flex justify-between items-start gap-x-[25px] pt-[32px] mb-[80px]'>
              <FilterProducts />
              <Pagination />
          </div>
      </Container>
  )
}

export default ProductList