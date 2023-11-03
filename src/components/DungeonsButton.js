import React from 'react'
import "./DungeonsButton.css"
export const DungeonsButton = ({ text, hoverText, onClick }) => {
    return (
        <div className='dungeons-button animate__animated animate__bounceIn animate__delay-1s'
            onMouseLeave={() => { document.querySelector(".dungeons-button p").innerHTML = text }}
            onMouseEnter={() => { document.querySelector(".dungeons-button p").innerHTML = hoverText }}
            onClick={() => {
                document.querySelector(".dungeons-button p").innerHTML = text;
                document.querySelector(".dungeons-button audio").play();
                document.querySelector("#click").play();
                onClick()
            }}
        >
            <p>{text}</p>
            <audio src="/sounds/clickSound.mp3" ></audio>
            <audio src="/sounds/clickSound2.mp3" id="click"></audio>
        </div>
    )
}
