import React, {useState, useEffect} from 'react'
import {FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll} from 'react-scroll'
import {Nav, NavbarContainer, img, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
import Images from '../../Images/images.png'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();    
    }

    return (
        <>
        <IconContext.Provider value={{color : '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <img src={Images} alt="Financetify"  to="/" onClick={toggleHome}/>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                            smooth={true} duration={500} spy={true} exact='true' offset={-80} 
                            >ABOUT</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover"
                            smooth={true} duration={500} spy={true} exact='true' offset={-80} 
                            >DISCOVER</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="features"
                            smooth={true} duration={500} spy={true} exact='true' offset={-80} 
                            >FEATURES</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup"
                            smooth={true} duration={500} spy={true} exact='true' offset={-80} 
                            >SIGN UP</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='contact'
                        smooth={true} duration={500} spy={true} exact='true' offset={-80} 
                        >Contact</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
