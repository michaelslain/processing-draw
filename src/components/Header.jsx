import React from 'react'
import './Header.scss'

import Button from './Button'

export default function Header({
    currentTool,
    setCurrentTool,
    handleTogglePop,
}) {
    const handleSwitchEllipse = () => {
        const tool = 'ellipse'
        if (currentTool !== tool) setCurrentTool(tool)
    }
    const handleSwitchRect = () => {
        const tool = 'rect'
        if (currentTool !== tool) setCurrentTool(tool)
    }
    const handleSwitchCircle = () => {
        const tool = 'circle'
        if (currentTool !== tool) setCurrentTool(tool)
    }
    const handleSwitchLine = () => {
        const tool = 'line'
        if (currentTool !== tool) setCurrentTool(tool)
    }
    const handleSwitchDelete = () => {
        const tool = 'delete'
        if (currentTool !== tool) setCurrentTool(tool)
    }

    return (
        <div className="header">
            <div className="tools">
                <Button
                    callback={handleSwitchRect}
                    className={currentTool === 'rect' ? 'selected' : ''}
                >
                    Rect
                </Button>
                <Button
                    callback={handleSwitchEllipse}
                    className={currentTool === 'ellipse' ? 'selected' : ''}
                >
                    Ellipse
                </Button>
                <Button
                    callback={handleSwitchCircle}
                    className={currentTool === 'circle' ? 'selected' : ''}
                >
                    Circle
                </Button>
                <Button
                    callback={handleSwitchLine}
                    className={currentTool === 'line' ? 'selected' : ''}
                >
                    Line
                </Button>
                <Button
                    callback={handleSwitchDelete}
                    className={currentTool === 'delete' ? 'selected' : ''}
                >
                    Delete
                </Button>
            </div>
            <div className="other">
                <Button
                    callback={handleTogglePop}
                    style={{ color: 'cornflowerblue' }}
                >
                    Export for Processing
                </Button>
            </div>
        </div>
    )
}
