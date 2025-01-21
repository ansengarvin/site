import React from 'react'

interface iconProps {
    iconName: string
    color: string
    height?: string
    width?: string
}

// All SVG icons are sourced from https://fonts.google.com/icons
export function Icon(props: iconProps) {
    const {iconName, color, height, width} = props
    switch(iconName) {
        case "backArrow": {
            // arrow pointing left
            return (
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    height={height}
                    viewBox="0 -960 960 960" 
                    width={height}
                    fill={color}
                >
                    <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z"/>
                </svg>
            )
        }
        case "forwardArrow": {
            // arrow pointing right
            return (
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    height={height}
                    viewBox="0 -960 960 960" 
                    width={width}
                    fill={color}
                >
                    <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/>
                </svg>
            )
        }
        case "close": {
            // x icon
            return (
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    height={height}
                    viewBox="0 -960 960 960"
                    width={width}
                    fill={color}
                >
                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                </svg>
            )
        }
        case "delete": {
            // trash can icon
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height={height}
                    viewBox="0 -960 960 960"
                    width={width}
                    fill={color}
                >
                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                </svg>
            ) 
        }
        case "more": {
            // horizontal elipses icon
            return (
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    height={height}
                    viewBox="0 -960 960 960"
                    width={width}
                    fill={color}
                >
                    <path d="M240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400Z"/>
                </svg>
            )
        }
        case "edit": {
            // pencil icon
            return (
                <svg 
                    xmlns="http://www.w3.org/2000/svg"
                    height={height}
                    viewBox="0 -960 960 960"
                    width={width}
                    fill={color}
                >
                    <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"/>
                </svg>
            )
        }
        case "add": {
            // plus icon
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height={height}
                    viewBox="0 -960 960 960"
                    width={width}
                    fill={color}
                >
                    <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
                </svg>
            )
        }
        case "remove": {
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height={height}
                    viewBox="0 -960 960 960"
                    width={width}
                    fill={color}
                >
                    <path d="M200-440v-80h560v80H200Z"/>
                </svg>
            )
        }
        case "home": {
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height={height}
                    viewBox="0 -960 960 960"
                    width={width}
                    fill={color}
                >
                    <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/>
                </svg>
            )
        }
        case "work": {
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height={height}
                    viewBox="0 -960 960 960"
                    width={width}
                    fill={color}
                >
                    <path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z"/>
                </svg>
            )
        }
        default: {
            return (
                <div>Icon not found</div>
            )
        }
    }

}