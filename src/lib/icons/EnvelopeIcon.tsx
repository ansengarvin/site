import React from "react";
import { IconProps } from "./common/IconProps";
import { GoogleSVG } from "./common/GoogleSVG";

// Google Mail Icon - An envelope
export function EnvelopeIcon(props: IconProps) {
    const {color, dim, filled} = props

    return (
        <GoogleSVG
            color={color}
            dim={dim}
        >
            {filled ? (
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280 320-200v-80L480-520 160-720v80l320 200Z"/>
            ) : (
                <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
            )}     
        </GoogleSVG>
    )
}