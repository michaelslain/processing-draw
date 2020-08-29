import React from 'react'
import './Object.scss'

export default function Object({ data, DOM, setDOM, index, currentTool }) {
    const {
        type,
        x,
        y,
        height,
        fill,
        strokeWidth,
        strokeColor,
        radius,
        x2,
        y2,
        width,
    } = data

    let style

    switch (type) {
        case 'rect':
        case 'ellipse':
            style = {
                top: y,
                left: x,
                width: `${Number(width)}px`,
                height: `${Number(height)}px`,
                background: `rgb(${Number(fill[0])},${Number(fill[1])},${Number(
                    fill[2]
                )})`,
                borderWidth: `${Number(strokeWidth)}px`,
                borderColor: `rgb(${Number(strokeColor[0])},${Number(
                    strokeColor[1]
                )},${Number(strokeColor[2])})`,
            }
            break
        case 'circle':
            style = {
                top: y,
                left: x,
                width: `${Number(radius)}px`,
                height: `${Number(radius)}px`,
                background: `rgb(${Number(fill[0])},${Number(fill[1])},${Number(
                    fill[2]
                )})`,
                borderWidth: `${Number(strokeWidth)}px`,
                borderColor: `rgb(${Number(strokeColor[0])},${Number(
                    strokeColor[1]
                )},${Number(strokeColor[2])})`,
            }
            break
        case 'line':
            const newWidth = Math.sqrt(
                Math.pow(x2 - x, 2) + Math.pow(y2 - y, 2)
            )
            const hypotenuse = newWidth
            const adjacent = Math.abs(y2 - y)

            const angle = Math.acos(adjacent / hypotenuse) * (180 / Math.PI)

            let rotation

            // top right
            if (x2 > x && y2 < y) rotation = 270 + angle
            // bottom right
            else if (x2 > x && y2 > y) rotation = 90 - angle
            // bottom left
            else if (x2 < x && y2 > y) rotation = 90 + angle
            // top left
            else rotation = 270 - angle

            style = {
                top: y,
                left: x,
                width: `${newWidth}px`,
                height: 0,
                borderWidth: `${Number(strokeWidth)}px`,
                borderColor: `rgb(${Number(strokeColor[0])},${Number(
                    strokeColor[1]
                )},${Number(strokeColor[2])})`,
                transform: `rotate(${rotation}deg)`,
                borderLeftWidth: 0,
                borderRightWidth: 0,
            }
    }

    const handleClick = () => {
        if (currentTool !== 'delete') return

        const newDOM = DOM.filter((_, i) => index !== i)
        setDOM(newDOM)
    }

    return (
        <div
            className={`object ${type}`}
            style={style}
            onClick={handleClick}
        ></div>
    )
}
