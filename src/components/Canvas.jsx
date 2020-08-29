import React from 'react'
import './Canvas.scss'

import Object from './Object'

export default function Canvas({ DOM, setDOM, currentTool }) {
    const objects = DOM.map((object, i) => (
        <Object
            key={i}
            data={object}
            index={i}
            DOM={DOM}
            setDOM={setDOM}
            currentTool={currentTool}
        />
    ))

    return <div className="canvas">{objects}</div>
}
