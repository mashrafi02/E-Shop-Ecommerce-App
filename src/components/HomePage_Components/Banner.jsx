import { Link } from "react-router-dom"
import Container from "../../Pagelayouts/Container"

const Banner = () => {
  return (
    <Container>
        <div className="mb-[80px]">
            <Link to="/"><img src="/images/banner.png" alt="banner" /></Link>
        </div>
    </Container>
  )
}

export default Banner