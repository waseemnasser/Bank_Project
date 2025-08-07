import React from 'react'
import "./iconShape.css"

const IconShape = ({icon}) => {
    return(
        <div className="ss-icon-container">
            <div className="ss-big-circle">
                <div className="ss-circle">
                    <img src={icon} alt="icon"/>
                </div>
            </div>
        </div>
    )
}

export default IconShape
