import React, { Fragment, useRef } from 'react'
import './Pop.scss'

import Button from './Button'

export default function Pop({ openPop, handleTogglePop, DOM }) {
    const codeRef = useRef(null)

    if (!openPop) return <Fragment />

    let code = []

    code.push(`size(${window.innerWidth - 200}, ${window.innerHeight - 100});`)
    DOM.forEach(object => {
        switch (object.type) {
            case 'rect':
                code.push(
                    `fill(${object.fill[0]}, ${object.fill[1]}, ${object.fill[2]});`
                )
                if (object.strokeWidth > 0) {
                    code.push(
                        `stroke(${object.strokeColor[0]}, ${object.strokeColor[1]}, ${object.strokeColor[2]});`
                    )
                    code.push(`strokeWeight(${object.strokeWidth});`)
                }
                code.push(
                    `rect(${object.x}, ${object.y}, ${object.width}, ${object.height});`
                )
                break
            case 'ellipse':
                code.push(
                    `fill(${object.fill[0]}, ${object.fill[1]}, ${object.fill[2]});`
                )
                if (object.strokeWidth > 0) {
                    code.push(
                        `stroke(${object.strokeColor[0]}, ${object.strokeColor[1]}, ${object.strokeColor[2]});`
                    )
                    code.push(`strokeWeight(${object.strokeWidth});`)
                }
                code.push(
                    `ellipse(${object.x}, ${object.y}, ${object.width}, ${object.height});`
                )
                break
            case 'circle':
                code.push(
                    `fill(${object.fill[0]}, ${object.fill[1]}, ${object.fill[2]});`
                )
                if (object.strokeWidth > 0) {
                    code.push(
                        `stroke(${object.strokeColor[0]}, ${object.strokeColor[1]}, ${object.strokeColor[2]});`
                    )
                    code.push(`strokeWeight(${object.strokeWidth});`)
                }
                code.push(
                    `circle(${object.x + object.radius / 2}, ${
                        object.y + object.radius / 2
                    }, ${object.radius});`
                )
                break
            case 'line':
                if (object.strokeWidth < 0) return

                code.push(
                    `stroke(${object.strokeColor[0]}, ${object.strokeColor[1]}, ${object.strokeColor[2]});`
                )
                code.push(`strokeWeight(${object.strokeWidth});`)

                code.push(
                    `line(${object.x}, ${object.y}, ${object.x2},${object.y2});`
                )
                break
        }
    })

    const betterCode = code.map((line, i) => {
        line = line.split('')
        line = line.map((char, i2) => {
            if (Number.isNaN(Number(char))) return char
            return (
                <div className="number" key={i * i2}>
                    {char}
                </div>
            )
        })

        return (
            <div key={i} className="line">
                {line}
            </div>
        )
    })

    const handleCopyCode = async () => {
        await navigator.clipboard.writeText(code.join('\n'))
    }

    return (
        <div className="pop-container">
            <div className="pop">
                <div className="close" onClick={handleTogglePop}>
                    X
                </div>
                <Button className="copy-button" callback={handleCopyCode}>
                    Copy Code
                </Button>
                <div className="code-container" ref={codeRef}>
                    {betterCode}
                </div>
            </div>
        </div>
    )
}
