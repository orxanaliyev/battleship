import React, { useContext } from 'react'
import './Grid.css'
import { PlayfieldContext } from '../Playground/Playground'

const Grid = () => {
    const { grid } = useContext(PlayfieldContext)

    // create grid
    const createGrid = grid.map((row, index) => {
        return (
            <div key={index} className={'Grid-row'}>
                {row.map((cell, index) => {
                    return (
                        <div key={index} className={'Grid-cell'}>{cell}</div>
                    )
                })}
            </div>
        )
    })

    return (
        <div className={'column'}>
            {createGrid}
        </div>
    )
}

export default Grid
