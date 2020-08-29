import React, { useEffect, useState, Fragment } from 'react'
import './Cursor.scss'

export default function Cursor({
    currentTool,
    width,
    setWidth,
    height,
    setHeight,
    radius,
    setRadius,
    fill,
    setFill,
    strokeColor,
    setStrokeColor,
    strokeWidth,
    setStrokeWidth,
    openPop,
}) {
    const [top, setTop] = useState(0)
    const [left, setLeft] = useState(0)

    useEffect(() => {
        window.onmousemove = handleUpdateLocation
    }, [setTop, setLeft])

    const handleUpdateLocation = mouse => {
        setTop(mouse.clientY)
        setLeft(mouse.clientX)
    }

    if (openPop) return <Fragment />
    if (top < 100) return <Fragment />
    if (left > window.innerWidth - 200) return <Fragment />

    let style

    switch (currentTool) {
        case 'rect':
        case 'ellipse':
            style = {
                top,
                left,
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
                top,
                left,
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
            style = {
                top: `${top - 1000}px`,
                left: `${left - 1000}px`,
                width: '2000px',
                height: '2000px',
                cursor: 'cell',
            }
            break
        case 'delete':
            break
    }

    return <div className={`cursor ${currentTool}`} style={style}></div>
}
