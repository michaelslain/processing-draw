import React, { Fragment } from 'react'
import './SideBar.scss'

import Input from './Input'

export default function SideBar({
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
}) {
    let sideBar

    const widthInput = <Input value={width} callback={setWidth} title="Width" />
    const heightInput = (
        <Input value={height} callback={setHeight} title="Height" />
    )
    const radiusInput = (
        <Input value={radius} callback={setRadius} title="Radius" />
    )
    const fillInput = (
        <Input value={fill} callback={setFill} title="Fill" type="rgb" />
    )
    const strokeColorInput = (
        <Input
            value={strokeColor}
            callback={setStrokeColor}
            title="Stroke Color"
            type="rgb"
        />
    )
    const strokeWidthInput = (
        <Input
            value={strokeWidth}
            callback={setStrokeWidth}
            title="Stroke Width"
        />
    )

    switch (currentTool) {
        case 'rect':
        case 'ellipse':
            sideBar = (
                <Fragment>
                    {widthInput}
                    {heightInput}
                    {fillInput}
                    {strokeColorInput}
                    {strokeWidthInput}
                </Fragment>
            )
            break
        case 'circle':
            sideBar = (
                <Fragment>
                    {radiusInput}
                    {fillInput}
                    {strokeColorInput}
                    {strokeWidthInput}
                </Fragment>
            )
            break
        case 'line':
            sideBar = (
                <Fragment>
                    {strokeColorInput}
                    {strokeWidthInput}
                </Fragment>
            )

            break
    }

    return <div className="side-bar">{sideBar}</div>
}
