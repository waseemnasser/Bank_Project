import "./Featured.css"
import FeaturesCard from '../FeaturesCard/FeaturesCard'
import FeaturesFilter from '../FeaturesFilter/FeaturesFilter'

export default function Featured() {
  return (
    <div className='aa-features-container '>
       <FeaturesFilter/>
      <FeaturesCard/>
     
    </div>
  )
}
