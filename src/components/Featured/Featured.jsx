import "./Featured.css"
import FeaturesCard from '../FeaturesCard/FeaturesCard'
import FeaturesFilter from '../FeaturesFilter/FeaturesFilter'

function Featured() {
  return (
    <div className='aa-features-container '>
      <FeaturesFilter />
      <FeaturesCard />
    </div>
  )
}

export default Featured
