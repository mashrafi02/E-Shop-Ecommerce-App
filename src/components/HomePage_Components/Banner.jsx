import { Link } from "react-router-dom"
import Container from "../../Pagelayouts/Container"

const Banner = () => {
  return (
    <Container>
        <div className="px-2 sm:px-0 mb-6 sm:mb-[80px]">
            <Link to="/"><img src="/images/banner.png" alt="banner" /></Link>
        </div>
    </Container>
  )
}

export default Banner