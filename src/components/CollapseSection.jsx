import { useState } from "react"
import React from "react";
export const CollapsableSection = ({ children, title, initiallyVisible = true }) => {

    const [buttonActive, setButtonActive] = useState(initiallyVisible);

    const header = <button onClick={() => {
        setButtonActive(!buttonActive);
    }} className="collapse">{title}</button>;

    return (
        <>
            {header}
            <div style={{ display: !buttonActive ? "none" : "block" }}>
                {children}
            </div>
        </>
    )
}