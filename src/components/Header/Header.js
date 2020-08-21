import React, { useContext } from 'react'
import { PlayfieldContext } from '../Playground/Playground'
import './Header.css'

const Header = () => {
    const { greetingWords } = useContext(PlayfieldContext)

    return (
        <h2 className={'ui Header header'}>
            <i className={'ship icon'}></i>
            <div className="content">
                {greetingWords.title}
                <div className={'sub header'}>{greetingWords.description}</div>
            </div>
            <div className={'ui divider'}></div>
        </h2>
    )
}

export default Header
