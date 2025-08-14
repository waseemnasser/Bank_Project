import FeaturesCard from "../FeaturesCard/FeaturesCard"
import FeaturesFilter from "../FeaturesFilter/FeaturesFilter"
import "./Featured.css"


function Featured() {
  return (
    <div className='aa-features-container '>
      <FeaturesFilter />
      <FeaturesCard />
    </div>
  )
}

export default Featured
