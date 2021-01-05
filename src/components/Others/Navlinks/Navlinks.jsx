import React from 'react'
import { NavLink } from "react-router-dom";

import {AiOutlineMedium} from 'react-icons/ai';
import {ImBehance, ImDribbble, ImStackoverflow} from 'react-icons/im';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineInstagram,
} from "react-icons/ai";


export function Social() {
    return(
        <div className="social">
          <Navlinks
            newTab={true}
            link="https://github.com/rttss-sahil"
            className="github"
            icon={AiFillGithub}
            color='gray'
          />
          <Navlinks
            newTab={true}
            link="https://www.instagram.com/rttss_sahil/"
            className="insta"
            icon={AiOutlineInstagram}
            color='#ff0033'
          />
          <Navlinks
            newTab={true}
            link="https://www.linkedin.com/in/sahil-rathee-b3993116b/"
            className="linkedIn"
            icon={AiFillLinkedin}
            color='#007bff'
          />
          <Navlinks
            newTab={true}
            link="https://stackoverflow.com/users/14934835/rttss-sahil"
            className="stack-overflow"
            icon={ImStackoverflow}
            color='#ffa500'
          />
          <Navlinks
            newTab={true}
            link="https://medium.com/@rttss-sahil"
            className="medium"
            icon={AiOutlineMedium}
            color='#121212'
          />
          <Navlinks
            newTab={true}
            link="https://www.behance.net/rttss_sahil/"
            className="behance"
            icon={ImBehance}
            color='#0057FF'
          />
          <Navlinks
            newTab={true}
            link="https://dribbble.com/rttss_sahil"
            className="dribble"
            icon={ImDribbble}
            color='#f03353'
          />
        </div>
    )
}

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

export default Navlinks;
