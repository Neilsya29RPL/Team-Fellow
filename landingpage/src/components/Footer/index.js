import React from 'react'
import { animateScroll as scroll} from 'react-scroll'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import Financetify from '../../Images/logo1.png'
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTittle, FooterLink} from './FooterElements'
import {SocialMedia, SocialMediaWrap, WebsiteRights, SocialIcons, SocialIconLink, SocialLogo} from './FooterElements'


const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();    
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTittle>About Us</FooterLinkTittle>
                                <FooterLink to="/">How it works</FooterLink>
                                <FooterLink to="/">Testimonials</FooterLink>
                                <FooterLink to="/">Careers</FooterLink>
                                <FooterLink to="/">Investors</FooterLink>
                                <FooterLink to="/">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTittle>Marketing</FooterLinkTittle>
                                <FooterLink to="/">User</FooterLink>
                                <FooterLink to="/">Ambassador</FooterLink>
                                <FooterLink to="/">Agency</FooterLink>
                                <FooterLink to="/">Influencer</FooterLink>
                                <FooterLink to="/">Events</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTittle>Contact Us</FooterLinkTittle>
                                <FooterLink to="/">Contact</FooterLink>
                                <FooterLink to="/">Support</FooterLink>
                                <FooterLink to="/">Destinations</FooterLink>
                                <FooterLink to="/">Sponsorships</FooterLink>
                                <FooterLink to="/">Customer Service</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTittle>Social Media</FooterLinkTittle>
                                <FooterLink to="/">Instagram</FooterLink>
                                <FooterLink to="/">Facebook</FooterLink>
                                <FooterLink to="/">Youtube</FooterLink>
                                <FooterLink to="/">Twitter</FooterLink>
                                <FooterLink to="/">Linkedin</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo src={Financetify} alt="Financetify" to="/" onClick={toggleHome}/>   
                    <WebsiteRights>Financetify - {new Date().getFullYear()} All rights reserved</WebsiteRights> 
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" grid-label="Instagram">
                            <FaInstagram/>
                        </SocialIconLink> 
                        <SocialIconLink href="/" target="_blank" grid-label="Facebook">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" grid-label="Youtube">
                            <FaYoutube/>
                        </SocialIconLink> 
                        <SocialIconLink href="/" target="_blank" grid-label="Twitter">
                            <FaTwitter/>
                        </SocialIconLink> 
                        <SocialIconLink href="/" target="_blank" grid-label="Linkedin">
                            <FaLinkedin/>
                        </SocialIconLink> 
                    </SocialIcons>                  
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>           
        </FooterContainer>
    )
}

export default Footer
