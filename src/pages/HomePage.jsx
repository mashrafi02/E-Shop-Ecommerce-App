import Container from "../Pagelayouts/Container"
import Banner from "../components/HomePage_Components/Banner"
import Facility from "../components/HomePage_Components/Facility"
import FeaturedProductsSlider from "../components/HomePage_Components/FeaturedProductsSlider"

const HomePage = () => {
  return (
    <Container>
        <Banner />
        <Facility />
        <FeaturedProductsSlider />
    </Container>
  )
}

export default HomePage