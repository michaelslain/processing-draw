import React, { Fragment, useRef } from 'react'
import './Pop.scss'

import Button from './Button'

export default function Pop({ openPop, handleTogglePop, DOM }) {
    const codeRef = useRef(null)

    if (!openPop) return <Fragment />

    let code = []

    code.push(`size(${window.innerWidth - 200}, ${window.innerHeight - 100});`)
    code.push('noStroke();')
    DOM.forEach(object => {
        let {
            x,
            y,
            width,
            height,
            radius,
            strokeColor,
            strokeWidth,
            fill,
            x2,
            y2,
            type,
        } = object

        switch (type) {
            case 'rect':
                x = Number(x)
                y = Number(y)
                width = Number(width)
                height = Number(height)
                strokeColor = [
                    Number(strokeColor[0]),
                    Number(strokeColor[1]),
                    Number(strokeColor[2]),
                ]
                strokeWidth = Number(strokeWidth)
                fill = [Number(fill[0]), Number(fill[1]), Number(fill[2])]

                code.push(`fill(${fill[0]}, ${fill[1]}, ${fill[2]});`)

                if (strokeWidth > 0) {
                    code.push(
                        `stroke(${strokeColor[0]}, ${strokeColor[1]}, ${strokeColor[2]});`
                    )
                    code.push(`strokeWeight(${strokeWidth});`)
                } else code.push('noStroke();')

                code.push(`rect(${x}, ${y}, ${width}, ${height});`)
                break
            case 'ellipse':
                x = Number(x)
                y = Number(y)
                width = Number(width)
                height = Number(height)
                strokeColor = [
                    Number(strokeColor[0]),
                    Number(strokeColor[1]),
                    Number(strokeColor[2]),
                ]
                strokeWidth = Number(strokeWidth)
                fill = [Number(fill[0]), Number(fill[1]), Number(fill[2])]

                code.push(`fill(${fill[0]}, ${fill[1]}, ${fill[2]});`)

                if (strokeWidth > 0) {
                    code.push(
                        `stroke(${strokeColor[0]}, ${strokeColor[1]}, ${strokeColor[2]});`
                    )
                    code.push(`strokeWeight(${strokeWidth});`)
                } else code.push('noStroke();')

                code.push(`ellipse(${x}, ${y}, ${width}, ${height});`)
                break
            case 'circle':
                x = Number(x)
                y = Number(y)
                radius = Number(radius)
                strokeColor = [
                    Number(strokeColor[0]),
                    Number(strokeColor[1]),
                    Number(strokeColor[2]),
                ]
                strokeWidth = Number(strokeWidth)
                fill = [Number(fill[0]), Number(fill[1]), Number(fill[2])]

                code.push(`fill(${fill[0]}, ${fill[1]}, ${fill[2]});`)

                if (strokeWidth > 0) {
                    code.push(
                        `stroke(${strokeColor[0]}, ${strokeColor[1]}, ${strokeColor[2]});`
                    )
                    code.push(`strokeWeight(${strokeWidth});`)
                } else code.push('noStroke();')

                code.push(
                    `circle(${x + radius / 2}, ${y + radius / 2}, ${radius});`
                )
                break
            case 'line':
                x = Number(x)
                y = Number(y)
                x2 = Number(x2)
                y2 = Number(y2)
                strokeColor = [
                    Number(strokeColor[0]),
                    Number(strokeColor[1]),
                    Number(strokeColor[2]),
                ]
                strokeWidth = Number(strokeWidth)

                if (strokeWidth < 0) return

                code.push(
                    `stroke(${strokeColor[0]}, ${strokeColor[1]}, ${strokeColor[2]});`
                )
                code.push(`strokeWeight(${strokeWidth});`)

                code.push(`line(${x}, ${y}, ${x2},${y2});`)
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
