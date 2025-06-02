import { Link } from "react-router-dom"

const Banner = () => {
  return (
    <div className="mb-[80px]">
        <Link to="/"><img src="/images/banner.png" alt="banner" /></Link>
    </div>
  )
}

export default Banner