import React, { useState, useEffect } from 'react'
import './Ship.css'

const Ship = ({ shape, count }) => {
    const [shipCount, setShipCount] = useState(count)
    
    const onClickShipButtonHandler = () => {
        setShipCount(shipCount - 1)
    }

    return (
        <button 
            onClick={onClickShipButtonHandler} 
            className={'Ship-button ui blue button'} 
            disabled={shipCount ? '' : 'disabled'}
        >
            {shape} 
            <span 
                className={'Ship-count'}
            >
                {shipCount}
            </span>
        </button>
    )
}

export default Ship
