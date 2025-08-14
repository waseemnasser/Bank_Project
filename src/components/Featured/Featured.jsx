import FeaturesCard from "../FeaturesCard/FeaturesCard"
import FeaturesFilter from "../FeaturesFilter/FeaturesFilter"
import "./Featured.css"
import { useState } from "react";
function Featured() {
    const [group,setGroup]=useState(0);
  return (
    <div className='aa-features-container '>
      <FeaturesFilter setGroup={setGroup}/>
      <FeaturesCard  group={group}/>
    </div>
  )
}

export default Featured
