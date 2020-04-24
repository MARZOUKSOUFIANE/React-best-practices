import React from 'react'
import ReactPlayer from 'react-player'


function Player() {
    return (
        <div>
            <ReactPlayer 
            url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
            playing  
            controls
            onReady={() => console.log("player ready")}
            onStart={() => console.log("player start")}
            onPause={() => console.log("player pause")}
            onEnded={() => console.log("player ended")}
            onError={() => console.log("player error")}
            />
        </div>
    )
}

export default Player
