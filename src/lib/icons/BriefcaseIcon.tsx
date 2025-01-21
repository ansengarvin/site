import React from "react";
import { IconProps } from "./common/IconProps";
import { GoogleSVG } from "./common/GoogleSVG";

// Briefcase with a buckle
export function BriefcaseIcon(props: IconProps) {
    const {color, dim, filled} = props

    return (
        <GoogleSVG
            color={color}
            dim={dim}
        >
            {filled ? (
                <path d="M160-120q-33 0-56.5-23.5T80-200v-160h280v80h240v-80h280v160q0 33-23.5 56.5T800-120H160Zm280-240v-80h80v80h-80ZM80-440v-200q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v200H600v-80H360v80H80Zm320-280h160v-80H400v80Z"/>
            ) : (
                <path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm240-600h160v-80H400v80Zm400 360H600v80H360v-80H160v160h640v-160Zm-360 0h80v-80h-80v80Zm-280-80h200v-80h240v80h200v-200H160v200Zm320 40Z"/>
            )}     
        </GoogleSVG>
    )
}