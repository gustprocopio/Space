import React from 'react'
import Logo from '../../images/joyjet.jpg'
import { 
    FooterContainer,
    FooterLogo,
    FooterLinkContainer,
    FooterLinks
} from './styles'

export function Footer () {
    return (
        <FooterContainer>
            <FooterLogo to="/">
                <img src={Logo} alt='Logo do Site'/>
            </FooterLogo>
            
            <FooterLinkContainer>
                <FooterLinks to="blog">BLOG</FooterLinks>
                <FooterLinks to="popular">POPULAR</FooterLinks>
                <FooterLinks to="archive">ARCHIVE</FooterLinks>
                <FooterLinks to="about">ABOUT</FooterLinks>
            </FooterLinkContainer>
        </FooterContainer>
    )
}

// export default Footer
