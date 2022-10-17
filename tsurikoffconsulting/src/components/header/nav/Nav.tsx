import React, { useState } from 'react'
import './Nav.scss'
import {Link} from 'react-scroll'
import Scrollspy from 'react-scrollspy'

export const Nav = () => {

    const[showMenu, setShowNemu] = useState(false);
 
    return (
        
        <div className="navContainer">
            

            {/* Scrollspy - Scrolling through the page and select right tab in the Nav menu */}
            <Scrollspy
              className={!showMenu ? "nav" : "navShow"}
              items={["aboutUs", "services", "keyTechnologies", "pricing", "contactUs"]} // items should match with ID for each component
              currentClassName={"current"}
              offset={-90}
            >    
            
                <Link
                    to='aboutUs'
                    spy={true}
                    smooth={true}
                    offset={-55}
                    duration={500}
                    onClick={() => setShowNemu(false)}
                    >About Us</Link>
                <Link
                    //activeClass='active'
                    to='services'
                    spy={true}
                    smooth={true}
                    offset={-55}
                    duration={500}
                    onClick={() => setShowNemu(false)}
                    >Services</Link>
                <Link
                    //activeClass='active'
                    to='keyTechnologies'
                    spy={true}
                    smooth={true}
                    offset={-55}
                    duration={500}
                    onClick={() => setShowNemu(false)}
                    >Key Technologies</Link>
                <Link
                    //activeClass='active'
                    to='pricing'
                    spy={true}
                    smooth={true}
                    offset={-55}
                    duration={500}
                    onClick={() => setShowNemu(false)}
                    >Pricing</Link>
                <Link
                    //activeClass='active'
                    to='contactUs'
                    spy={true}
                    smooth={true}
                    offset={-55}
                    duration={500}
                    onClick={() => setShowNemu(false)}
                    >Contact Us</Link>

            </Scrollspy>
            
            
            
            <div className={"showMenuButton"} onClick={ () => setShowNemu(!showMenu) }>
              <img src={"menuButton"} alt="" />
            </div> 
            

            
        </div>
        
    )
}
