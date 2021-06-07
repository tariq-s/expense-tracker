import React from 'react'
import './Card.css'
const Card = ({ className, children }) => {
    let classes = 'card';
    if (className)
        classes += ' ' + className;
    return (
        <div className={classes}>
            {children}
        </div>
    )
}

export default Card
