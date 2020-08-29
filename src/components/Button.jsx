import React from 'react'
import './Button.scss'

export default function Button({ children, callback, style, className }) {
    return (
        <div className={`button ${className}`} onClick={callback} style={style}>
            {children}
        </div>
    )
}
