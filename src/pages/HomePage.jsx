import Banner from "../components/HomePage_Components/Banner"
import BestSeller from "../components/HomePage_Components/BestSeller"
import Facility from "../components/HomePage_Components/Facility"
import FAQ from "../components/HomePage_Components/FAQ"
import FeaturedProductsSlider from "../components/HomePage_Components/FeaturedProductsSlider"
import NewProducts from "../components/HomePage_Components/NewProducts"
import Offer from "../components/HomePage_Components/Offer"
import SpringSale from "../components/HomePage_Components/SpringSale"

const HomePage = () => {
  return (
    <>
      <Banner />
      <Facility />
      <FeaturedProductsSlider />
      <Offer />
      <NewProducts />
      <SpringSale />
      <BestSeller />
      <FAQ />
    </>
  )
}

export default HomePage