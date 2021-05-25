import React from 'react';
import { FaBars } from 'react-icons/fa'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks 
} from './styles'
import Logo from '../../images/joyjet.jpg'

// interface ToggleProps {
//     primary: boolean;
//     onHover: () => void;
// }

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        <img src={Logo} alt='Logo do Site'/>
                        
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="blog">BLOG</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="popular">POPULAR</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="archive">ARCHIVE</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">ABOUT</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav> 
        </>
    )
}

export default Navbar
