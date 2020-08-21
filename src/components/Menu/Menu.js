import React from 'react'
import './Menu.css'
import Ship from '../Ship/Ship'

const Menu = () => {
    return (
        <div className={'column'}>
            <div className={'ui vertical buttons'}>
                <Ship shape={'L shaped'} count={1} />
                <Ship shape={'I shaped'} count={1} />
                <Ship shape={'Dot shaped'} count={2} />
            </div>
        </div>
    )
}

export default Menu
