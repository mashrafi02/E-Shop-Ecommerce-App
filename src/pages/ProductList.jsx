import React from 'react';
import Container from "../Pagelayouts/Container";
import FilterProducts from '../components/ProductList_Components/FilterProducts';

const ProductList = () => {
  return (
      <Container>
          <div className='flex justify-between pt-[32px] mb-[80px]'>
              <FilterProducts />
              <div>
                  <h3>PAgination</h3>
              </div>
          </div>
      </Container>
  )
}

export default ProductList