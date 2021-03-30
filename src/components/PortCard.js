import React from 'react'
import { Card} from 'react-bootstrap'

const PortCard = ({image, alt,href}) => {
    return (
        <div id="port-card">
            <a href={href} target="_blank" rel="noreferrer noopener">
            <img src={image} alt={alt} className="port-card-image"></img>
            </a>
        </div>
    )
}

export default PortCard
