import React from 'react'
import "./DungeonsButton.css"
export const DungeonsButton = ({ text, hoverText, onClick }) => {
    return (
        <div className='dungeons-button animate__animated animate__bounceIn animate__delay-1s'
            onMouseLeave={() => { document.querySelector(".dungeons-button p").innerHTML = text }}
            onMouseEnter={() => { document.querySelector(".dungeons-button p").innerHTML = hoverText }}
            onClick={() => {
                document.querySelector(".dungeons-button p").innerHTML = text;
                onClick()
            }}
        >
            <p>{text}</p>
        </div>
    )
}
