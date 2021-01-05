import React from 'react'
import { NavLink } from "react-router-dom";

function Navlinks(props) {
    return (
        props.newTab ? (
            <NavLink
                target="_blank"
                to={{ pathname: props.link }}
                className={props.className}
            >
                <props.icon color={props.color} />
                <p>{props.p}</p>
            </NavLink>
        ) : (
            <NavLink
                to={{ pathname: props.link }}
                className={props.className}
            >
                <props.icon />
            </NavLink>
        )
    ) 
}

export default Navlinks
