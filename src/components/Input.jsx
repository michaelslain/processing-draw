import React, { Fragment } from 'react'
import './Input.scss'

export default function Input({ value, callback, title, type = 'number' }) {
    const handleNumberValue = e => {
        const newValue = e.target.value
        if (Number.isNaN(Number(newValue))) return
        if (Number(newValue) < 0) return
        callback(newValue)
    }

    const handleRedValue = e => {
        const newValue = e.target.value
        if (Number.isNaN(Number(newValue))) return
        if (Number(newValue) < 0) return
        if (Number(newValue) > 255) return

        let newRGB = value
        newRGB = newRGB.map((color, i) => (i === 0 ? newValue : color))
        callback(newRGB)
    }
    const handleGreenValue = e => {
        const newValue = e.target.value
        if (Number.isNaN(Number(newValue))) return
        if (Number(newValue) < 0) return
        if (Number(newValue) > 255) return

        let newRGB = value
        newRGB = newRGB.map((color, i) => (i === 1 ? newValue : color))
        callback(newRGB)
    }
    const handleBlueValue = e => {
        const newValue = e.target.value
        if (Number.isNaN(Number(newValue))) return
        if (Number(newValue) < 0) return
        if (Number(newValue) > 255) return

        let newRGB = value
        newRGB = newRGB.map((color, i) => (i === 2 ? newValue : color))
        callback(newRGB)
    }

    const input =
        type === 'number' ? (
            <input
                type="text"
                className="input"
                value={value}
                onChange={handleNumberValue}
                placeholder="0"
            />
        ) : (
            <div className="rgb-input-container">
                <div className="rgb-label red">R</div>
                <input
                    type="text"
                    className="rgb-input"
                    value={value[0]}
                    onChange={handleRedValue}
                    placeholder="0"
                />
                <div className="rgb-label green">G</div>
                <input
                    type="text"
                    className="rgb-input"
                    value={value[1]}
                    onChange={handleGreenValue}
                    placeholder="0"
                />
                <div className="rgb-label blue">B</div>
                <input
                    type="text"
                    className="rgb-input"
                    value={value[2]}
                    onChange={handleBlueValue}
                    placeholder="0"
                />
            </div>
        )

    return (
        <div className="input-container">
            <div className="title">{title}</div>
            {input}
        </div>
    )
}
