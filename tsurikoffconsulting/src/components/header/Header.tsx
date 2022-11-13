import React, { useState } from 'react'
import './Header.scss'
import logo from './../../img/logoWhite.png';
import videoBg from '../../assets/videoBg.mp4';
import { Nav } from './nav/Nav'
import { Button } from '../button/button';

export const Header = () => {



    const [navbar, setNavbar] = useState(false);

        const changeBackground = () => {
            if (window.scrollY >= 80) {
            setNavbar(true);
            } else {
            setNavbar(false);
            }
        };

    window.addEventListener("scroll", changeBackground);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };

    return (
        <div className="headerContainer">
            <video src={videoBg} autoPlay loop muted></video>
            <div className="overlay" />
            <div className={navbar ? "headerOpened" : "header"}>
                <Nav />
            </div>

            <div className={navbar ? "logoHeader" : "logo"}>
                <img onClick={scrollToTop} src={logo} alt="Logo" />
            </div>
            <div className="buttonClass">
                <Button name="Book Introduction Call"/>
            </div>
            
        </div>
        
    )
}
