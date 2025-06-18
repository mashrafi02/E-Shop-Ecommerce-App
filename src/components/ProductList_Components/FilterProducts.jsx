
import CategoryFilter from './FilterProduct_Components/CategoryFilter';
import BrandFilter from './FilterProduct_Components/BrandFilter';
import PriceFilter from './FilterProduct_Components/PriceFilter';

const FilterProducts = () => {

  return (
    <div className='w-[355px] bg-[#F4F4F4] rounded-[25px] p-12'>
        <CategoryFilter />
        <div className='my-10 h-[1px] w-full opacity-25 bg-[#303030]'></div>
        <BrandFilter />
        <div className='my-10 h-[1px] w-full opacity-25 bg-[#303030]'></div>
        <PriceFilter />
    </div>
  )
}

export default FilterProducts