import { exportedValueCardData } from "../../data/OurValuesCard"
import ValueCard from "../ValueCard/ValueCard"
import './CardFeatured.css'

const CardFeatured = () => {
    return (
        <div className="CF-Container white-space">
            {exportedValueCardData.map((e, index) => {
                return (
                    <ValueCard key={index}
                        title={e.title}
                        desc={e.desc}
                    />
                )
            })}
        </div>
    )
}

export default CardFeatured

