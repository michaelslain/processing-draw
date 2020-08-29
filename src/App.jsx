import React, { useState, Fragment, useEffect } from 'react'
import './App.scss'

import Header from './components/Header'
import SideBar from './components/SideBar'
import Canvas from './components/Canvas'
import Cursor from './components/Cursor'
import Pop from './components/Pop'

export default function App() {
    const [currentTool, setCurrentTool] = useState('rect')
    const [DOM, setDOM] = useState([])

    const [width, setWidth] = useState(50)
    const [height, setHeight] = useState(50)
    const [radius, setRadius] = useState(50)
    const [fill, setFill] = useState([0, 0, 0])
    const [strokeColor, setStrokeColor] = useState([0, 0, 0])
    const [strokeWidth, setStrokeWidth] = useState(5)

    const [openPop, setOpenPop] = useState(false)

    const handleAddObject = mouse => {
        if (openPop) return

        const { clientX, clientY } = mouse

        if (clientX > window.innerWidth - 200) return
        if (clientY < 100) return

        if (currentTool === 'line') {
            let init = false

            const calculate = mouse => {
                const { clientX: clientX2, clientY: clientY2 } = mouse

                const object = {
                    x: Math.round(clientX),
                    y: Math.round(clientY - 100),
                    x2: Math.round(clientX2),
                    y2: Math.round(clientY2 - 100),
                    strokeWidth,
                    strokeColor,
                    type: currentTool,
                }

                let newDOM

                if (init) {
                    newDOM = DOM.pop()
                }

                newDOM = DOM.concat([object])
                setDOM(newDOM)
                return
            }

            window.addEventListener('mousemove', calculate)

            window.onmouseup = () =>
                window.removeEventListener('mousemove', calculate)

            return
        }

        let object = { x: Math.round(clientX), y: Math.round(clientY - 100) }
        switch (currentTool) {
            case 'rect':
            case 'ellipse':
                object = {
                    ...object,
                    width,
                    height,
                    fill,
                    strokeColor,
                    strokeWidth,
                }
                break
            case 'circle':
                object = {
                    ...object,
                    radius,
                    fill,
                    strokeColor,
                    strokeWidth,
                }
                break
        }

        object = { ...object, type: currentTool }

        const newDOM = DOM.concat([object])
        setDOM(newDOM)
    }

    useEffect(() => {
        window.onmousedown = handleAddObject
    }, [handleAddObject])

    const handleTogglePop = () => setOpenPop(!openPop)

    return (
        <Fragment>
            <Header {...{ currentTool, setCurrentTool, handleTogglePop }} />
            <div className="bottom-container">
                <Canvas DOM={DOM} setDOM={setDOM} currentTool={currentTool} />
                <SideBar
                    {...{
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
                    }}
                />
            </div>
            <Cursor
                {...{
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
                }}
            />
            <Pop {...{ openPop, handleTogglePop, DOM }} />
        </Fragment>
    )
}
