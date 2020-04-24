import React,{useState} from 'react'
import { ChromePicker } from 'react-color';





function Color() {
    const [color, setColor] = useState('#fff')
    const [showPicker, setShowPicker] = useState(false)

    return (
        <div>
            <button onClick={()=> setShowPicker(!showPicker)} >{showPicker ? 'Close color picker' : 'Open picker'}</button>

            {
                showPicker ? <div>
                    <ChromePicker
                    color={color}
                    onChangeComplete={(updatedColor)=>{ setColor(updatedColor.hex) }}
                    />
                    <h2>You chose the color {color}</h2>
                </div>
                : ''
            }
        </div>
    )
}

export default Color
