import React, { useState } from 'react'
import Grid from '../Grid/Grid'
import Menu from '../Menu/Menu'
import Header from '../Header/Header'

const playfield = {
    greetingWords: {
        title: 'Battleship Game',
        description: 'Please select ships to set them randomly, then start the game.'
    },
    grid: [
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ]
}

export const PlayfieldContext = React.createContext(playfield)

const Playground = () => {

    return (
        <PlayfieldContext.Provider value={playfield}>
            <div className={'ui container'}>
                <Header />
                <div className={'ui equal width grid'}>
                    <div className={'row'}>
                        <Grid />
                        <Menu />
                    </div>
                </div>
            </div>
        </PlayfieldContext.Provider>
    )
}

export default Playground
