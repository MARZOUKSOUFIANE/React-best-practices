import React from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; 

function ToolTip() {
    return (
        <div>
            <Tippy content="Hello">
            <button>My button</button>
            </Tippy>
        </div>
    )
}

export default ToolTip
